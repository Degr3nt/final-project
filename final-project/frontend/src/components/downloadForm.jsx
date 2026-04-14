import { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
    email: z.email("Please enter a valid email address"),
    phone: z.e164("Please enter a phone number"),
    agreement: z.boolean("How did you make it into a non-boolean value??"),
}).refine((data) => data.agreement, {
    message: "Please agree with the terms and conditions",
    path: ["agreement"],
  });


export function DownloadForm() {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        agreement: false,
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [apiResponse, setApiResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorInResponse, setErrorInResponse] = useState(false);

    function handleChange(event) {
        
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        const newData = {
            ...formData,
            [name]: value,
        }

        const result = registerSchema.safeParse(newData);
        if (!result.success) {
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0];
                fieldErrors[fieldName] = issue.message;
            });

            setErrors(fieldErrors);
        } else {
            setErrors({});
        }
        setApiResponse(null)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const result = registerSchema.safeParse(formData);
        setApiResponse(null);

        if (!result.success) {
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0];
                fieldErrors[fieldName] = issue.message;
            });

            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        setErrorInResponse(false)
        setSuccessMessage("Processing your request...");

        console.log("Validated form data:", result.data);

        setLoading(true);

        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(result.data),
            });

            const data = await response.json();

            setApiResponse(data);
            setSuccessMessage("Your download should start soon! 🎉");
            downloadFileFromUrl('https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user')
        } catch (error) {
            console.error(error);
            setErrorInResponse(true)
            setSuccessMessage("Something went wrong while processing your request ❌");
        } finally {
            setLoading(false);
        }
    }

    const hasError = !Object.values(errors).every(x => x === null || x === '');

    return (
        <div className="rounded-3xl bg-[#16191d] text-white flex flex-col gap-4 p-5 border-2 border-white/20 w-300">
            <p className="text-xl font-semibold self-center">Your Details</p>
            <SuccessMessage message={successMessage} loading={!hasError && loading} success={!hasError && apiResponse} error={!hasError && errorInResponse} />
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-10">
                    <div className="px-4 flex flex-col gap-10">
                        <div className="grid grid-cols-2 gap-30">
                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400 text-lg">Email:</p>
                                <input 
                                id="email"
                                name="email"
                                className={`w-full border-1 pl-5 rounded-3xl p-2 focus:outline-0 transition duration-300 ${formData.email ? (errors.email ? 'border-red-400' : 'border-emerald-400') : 'focus:border-sky-300 border-white/50'}` }
                                type="email"
                                placeholder="Enter your email address"
                                onChange={handleChange}
                                value={formData.email}
                                ></input>
                                {errors.email && formData.email && <ErrorMessage error={errors.email} />}
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400 text-lg">Phone number:</p>
                                <input 
                                id="phone" 
                                name="phone"
                                className={`w-full border-1 pl-5 rounded-3xl p-2 focus:outline-0 transition duration-300 ${formData.phone ? (errors.phone ?'border-red-400' : 'border-emerald-400') : 'focus:border-sky-300 border-white/50'}` }
                                type="phone" 
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                value={formData.phone}
                                ></input>
                                {errors.phone && formData.phone && <ErrorMessage error={errors.phone} />}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-gray-400 text-lg">Agreement</p>
                            <div className="flex items-center px-4">
                                <input 
                                id="agreement"
                                name="agreement"
                                type="checkbox"
                                className={`rounded-xl bg-gray-800 text-blue-600 accent-pink-300 bg-grey-700 cursor-pointer`}
                                onChange={handleChange}
                                checked={formData.agreement}
                                ></input>
                                <label htmlFor="agreement" className="select-none ms-2 text-sm font-medium text-heading">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</label>
                            </div>
                            {errors.agreement && !Object.values(formData).some(x => x === null || x === '') && <ErrorMessage error={errors.agreement} />}
                        </div>
                    </div>
                    <div className="relative flex mt-10">
                        <button type="submit"  disabled={hasError || Object.values(formData).some(x => x === null || x === '')} className="absolute items-center justify-center self-center align-center p-4 w-full bg-emerald-400 disabled:bg-emerald-400/10 disabled:text-white/30 text-white rounded-xl font-semibold text-xl enabled:transition-all duration-100 ease-in-out enabled:hover:border-4 enabled:hover:outline-3 outline-0 border-black outline-white">Download</button>
                    </div>
                </div>
            </form>
            <div className="mb-5"></div>
        </div>
    )
}

function ErrorMessage({error}) {
    return (
        <div className="text-red-400 text-md text-center justify-center items-center">{error}</div>
    )
}

function SuccessMessage({message, loading, success, error}) {
    return (
        <div className={`transition h-15 duration-300 ease-in-out ${loading || success || error ? 'opacity-100' : 'opacity-0'} p-4 border-1 items-center self-center text-center justify-center rounded-xl ${error ? 'bg-red-400/10 border-red-800' : (success ? 'bg-emerald-400/10 border-emerald-800' : 'bg-yellow-700/10 border-yellow-800')}`}>
            {message + " "}
        </div>
    )
}

function downloadFileFromUrl(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop(); // Use provided filename or extract from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}