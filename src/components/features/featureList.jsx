import { BackgroundAndImage } from '../backgroundAndImage.jsx'
import { WideCard } from '../wideCard.jsx'
import { GrayButton } from '../grayButton.jsx'
import { FeatureCard } from './featureCard.jsx'
import { ExtensionCard } from '../extensions/extensionCard.jsx'
import { ExtensionGrid } from '../extensions/extensionGrid.jsx'
import { LangGrid } from '../lang/langGrid.jsx'

import model1 from '../../assets/models/any-model.png'
import model2 from '../../assets/models/an-expert.png'
import model3 from '../../assets/models/works-team.png'

import editor1 from '../../assets/editor-1.png'
import editor2 from '../../assets/editor-2.png'
import editor3 from '../../assets/editor-3.png'


export function FeatureList() {
    return (
        <div>
            <div className='grid grid-row-3 align-center'>
                <div className='mt-10 '>
                  <BackgroundAndImage path={editor1} />
                </div>
                <div className='mt-20 grid grid-cols-3 gap-10 items-space'>
                  <WideCard title="Any model for any team" description="Choose from multiple out of the box models, or bring your own key to access models from your preferred model and hosting provider." img={model1} />
                  <WideCard title="An expert on your codebase" description="Your codebase is indexed locally and remotely to understand what's relevant, enabling fast, context-aware interactions." img={model2}/>
                  <WideCard title="AI that works the way your team does" description="Personalize interactions using custom agents, custom instructions, and reusable prompt files tailored to your workflows and tools." img={model3} />
                </div>
                <div className="relative flex mt-20 rounded-3xl p-[0.5px] bg-gradient-to-b from-gray-600 to-sky-700 items-center align-center justify-center">
                  <img className='bg-cover p-[0.5px] rounded-[calc(1.5rem-0.5px)]' src="https://code.visualstudio.com/assets/home/copilot-free-banner-bg-dark.webp"></img>
                  <div className='absolute z-10 grid grid-cols-2 p-10 w-full gap-10 justify-between text-white'>
                    <div className='text-4xl font-semibold'>
                      Use AI features in VS Code for free
                    </div>
                    <div className='text-lg grid grid-rows-2 items-center justify-items-start gap-3'>
                      <div>
                        No trial. No credit card required. Just your GitHub account.
                      </div>
                      <GrayButton text="Try free" />
                    </div>
                  </div>
              </div>
            </div>
            <div className='mt-30 grid grid-rows justify-items gap-30 items-center align-center'>
              <FeatureCard title="Agent mode" content={(
                <BackgroundAndImage path={editor2}/>
              )} description="Tackle complex, multi-step tasks. Agent mode reads your codebase, suggests edits across files, runs terminal commands, and responds to compile or test failures — all in a loop until the job is done. Further refine agent mode to fit your team's workflows with VS Code extensions and Model Context Protocol (MCP) servers." linkText="Build with agent mode" link="https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode" />
              <FeatureCard title="Next edit suggestions" content={(
                <BackgroundAndImage path={editor3}/>
              )} description="VS Code predicts your next move as you code. Use the Tab key to accept AI-powered suggestions right in your editor. It intelligently recommends what to change — and where — based on the edits you're already making." linkText="Code with AI-powered suggestions" link="https://code.visualstudio.com/docs/copilot/ai-powered-suggestions#_next-edit-suggestions" />
              <FeatureCard title="Code with extensions" content={(
                <div className='flex flex-col justify-center items-center gap-10 text-white'>
                  <ExtensionGrid/>
                  <p>View 80k+ extensions in the <a className='underline text-sky-400' href="https://marketplace.visualstudio.com/vscode" rel="noopener" target="_blank">Extension Marketplace</a></p>
                </div>
              )} description={(
                <p>
                  Customize VS Code with AI-powered functionality from extensions and Model Context Protocol servers to use in Chat. Or, <a className='underline text-sky-500' href='https://code.visualstudio.com/docs/copilot/copilot-extensibility-overview'>build your own extension</a> to power your team's unique scenarios.
                </p>
              )} />
              <FeatureCard title="Code in any language" content={(
                <LangGrid/>
              )} description="VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace." />
              <FeatureCard title="Fully customizable" content={(
                <img src="https://code.visualstudio.com/assets/home/swimlane-customized.png"></img>
              )} description={(
                <div className='flex flex-col gap-5'>
                  <p>
                    Customize your VS Code UI and layout so that it fits your coding style.
                  </p>
                  <p>
                    <a className='underline text-sky-500' href="https://code.visualstudio.com/docs/configure/themes" rel="noopener">Color themes</a> let you modify the colors in VS Code's user interface to suit your preferences and work environment.
                  </p>
                  <p>
                    <a className='underline text-sky-500' href="https://code.visualstudio.com/docs/configure/settings#_settings-sync" rel="noopener" class="value-prop-bold">Settings Sync</a> enables you to share your user settings across your VS Code instances with the Settings Sync feature.
                  </p>
                  <p>
                    <a className='underline text-sky-500' href="https://code.visualstudio.com/docs/configure/profiles" rel="noopener" class="value-prop-bold">Profiles</a> let you create sets of customizations and quickly switch between them or share them with others.
                  </p>
                </div>
              )} />
              <FeatureCard title="Code anywhere" content={(
                <img src="https://code.visualstudio.com/assets/home/swimlane-anywhere.png"></img>
              )} description={(
                <div className='flex flex-col gap-5'>
                  <p>
                    Code wherever you're most productive, whether you're connected to the cloud, a remote repository, or in the browser with VS Code for the Web (vscode.dev).
                  </p>
                  <p>
                    <a className='underline text-sky-500' href="https://code.visualstudio.com/docs/sourcecontrol/overview" rel="noopener">Built-in Source Control</a> empowers you with Git support out-of-the-box. Many other source control providers are available through extensions.
                  </p>
                  <p>
                    <a className='underline text-sky-500' href="https://code.visualstudio.com/docs/remote/codespaces" rel="noopener" class="value-prop-bold">GitHub Codespaces</a> provides cloud-powered development environments for any activity - whether it's a long-term project, or a short-term task like reviewing a pull request.
                  </p>
                </div>
              )} />
            </div>
          </div>
    )
}