import { ActionCard } from "./actionCard";

export function ActionGrid() {
    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-4 gap-5">
                <ActionCard title="Integrated terminal" description="Use your favorite shell whether it's zsh, pwsh, or git bash, all inside the editor." icon="https://code.visualstudio.com/assets/icons/codicon-terminal.svg" />
                <ActionCard title="Run code" description="Run and debug your code without leaving your editor." icon="https://code.visualstudio.com/assets/icons/codicon-debug.svg" />
                <ActionCard title="Version control" description="Built-in support for git and many other source control providers." icon="https://code.visualstudio.com/assets/icons/codicon-version-control.svg" />
                <ActionCard title="Build tasks" description="Run tools and analyze their results from within VS Code." icon="https://code.visualstudio.com/assets/icons/codicon-build-tasks.svg" />    
            </div>
            <div className="grid grid-cols-4 gap-5">
                <ActionCard title="Local history" description="Never lose your changes with automatically tracked local history." icon="https://code.visualstudio.com/assets/icons/codicon-local-history.svg" />
                <ActionCard title="Themes" description="Your theme is an extension of your personality. Add some flair to your editor and add your touch." icon="https://code.visualstudio.com/assets/icons/codicon-themes.svg" />
                <ActionCard title="Accessibility" description="Optimized experience for screen readers, high contrast themes, and keyboard-only navigation." icon="https://code.visualstudio.com/assets/icons/codicon-accessibility.svg" />
                <ActionCard title="Web support" description="Whether you are on your phone, tablet, or desktop, you can access your code from anywhere." icon="https://code.visualstudio.com/assets/icons/codicon-web.svg" />
            </div>
        </div>
    )
}