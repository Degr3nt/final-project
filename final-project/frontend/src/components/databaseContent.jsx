import { useEffect, useState } from "react";

export function DatabaseContent() {
  const [message, setMessage] = useState("Loading...");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const healthRes = await fetch("/api/health");
        const healthData = await healthRes.json();
        setMessage(healthData.message);

        const usersRes = await fetch("/api/users");
        const usersData = await usersRes.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Fetch failed:", error);
        setMessage("Failed to connect to API");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="text-white flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-3xl">Database Content</h1>
      <p className="text-xl">{message}</p>

      <h2 className="font-bold mt-10 text-3xl">Users from database</h2>
      <div className="flex flex-col text-xl/7">
        {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="flex flex-row gap-5">
          <div className="grid grid-rows gap-2">
            {users.map((user) => (
              <div key={user.id}>
                {user.email}
              </div>
            ))}
          </div>
          <div className="grid grid-rows gap-2">
            {users.map((user) => (
              <div key={user.id}>
                {user.phone}
              </div>
            ))}
          </div>
          <div className="grid grid-rows gap-2">
            {users.map((user) => (
              <div key={user.id}>
                <input 
                type="checkbox"
                readOnly
                className={`rounded-xl bg-gray-800 text-blue-600 accent-pink-300 bg-grey-700 cursor-pointer`}
                checked={user.agreement}
                ></input>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}