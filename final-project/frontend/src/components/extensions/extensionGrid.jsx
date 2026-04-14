import { ExtensionCard } from "./extensionCard";

export function ExtensionGrid() {
    return (
        <div className="flex flex-col gap-3 mask-b-from-20%">
            <div className="grid grid-cols-3 gap-3">
             <ExtensionCard name="Python" description="Adds rich language support for python" icon="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"/>
             <ExtensionCard name="Stripe" description="Adds rich language support for python" icon="https://stripe.gallerycdn.vsassets.io/extensions/stripe/vscode-stripe/3.8.6/1747172190934/Microsoft.VisualStudio.Services.Icons.Default"/>
             <ExtensionCard name="C/C++" description="Adds rich language support for python" icon="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/cpptools/1.31.3/1774386352317/Microsoft.VisualStudio.Services.Icons.Default"/>
            </div>
            <div className="grid grid-cols-3 gap-3">
             <ExtensionCard name="Jupyter" description="Adds rich language support for python" icon="https://ms-toolsai.gallerycdn.vsassets.io/extensions/ms-toolsai/jupyter/2025.10.2026030601/1772790492698/Microsoft.VisualStudio.Services.Icons.Default"/>
             <ExtensionCard name="GitLens" description="Adds rich language support for python" icon="https://eamodio.gallerycdn.vsassets.io/extensions/eamodio/gitlens/2026.3.2505/1774430688145/Microsoft.VisualStudio.Services.Icons.Default"/>
             <ExtensionCard name="C# Dev Kit" description="Adds rich language support for python" icon="https://ms-dotnettools.gallerycdn.vsassets.io/extensions/ms-dotnettools/csdevkit/3.10.4/1774229799873/Microsoft.VisualStudio.Services.Icons.Default"/>
            </div>
            <div className="grid grid-cols-3 gap-3">
             <ExtensionCard name="MongoDB" description="Adds rich language support for python" icon="https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.15.1/1773071695424/Microsoft.VisualStudio.Services.Icons.Default"/>
             <ExtensionCard name="Azure Copilot for Azure" description="Adds rich language support for python" icon="https://ms-azuretools.gallerycdn.vsassets.io/extensions/ms-azuretools/vscode-azure-github-copilot/1.0.178/1774062156672/Microsoft.VisualStudio.Services.Icons.Default"/>
             <ExtensionCard name="Remote development" description="Adds rich language support for python" icon="https://ms-vscode-remote.gallerycdn.vsassets.io/extensions/ms-vscode-remote/vscode-remote-extensionpack/0.26.0/1729778338986/Microsoft.VisualStudio.Services.Icons.Default"/>
            </div>
        </div>
    )
}