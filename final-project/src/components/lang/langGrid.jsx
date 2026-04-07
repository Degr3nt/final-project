import { LangCard } from "./langCard";

export function LangGrid() {
    return ( 
        <div className="grid grid-cols-3">
            <LangCard name="JavaScript" icon="https://code.visualstudio.com/assets/home/language-js.png"/>
            <LangCard name="TypeScript" icon="https://code.visualstudio.com/assets/home/language-ts.png"/>
            <LangCard name="Python" icon="https://code.visualstudio.com/assets/home/language-python.png"/>
            <LangCard name="C#" icon="https://code.visualstudio.com/assets/home/language-cs.png"/>
            <LangCard name="C++" icon="https://code.visualstudio.com/assets/home/language-cpp.png"/>
            <LangCard name="HTML" icon="https://code.visualstudio.com/assets/home/language-html.png"/>
            <LangCard name="Java" icon="https://code.visualstudio.com/assets/home/language-java.png"/>
            <LangCard name="JSON" icon="https://code.visualstudio.com/assets/home/language-json.png"/>
            <LangCard name="PHP" icon="https://code.visualstudio.com/assets/home/language-php.png"/>
            <LangCard name="Markdown" icon="https://code.visualstudio.com/assets/home/language-markdown.png"/>
            <LangCard name="Powershell" icon="https://code.visualstudio.com/assets/home/language-powershell.png"/>
            <LangCard name="YAML" icon="https://code.visualstudio.com/assets/home/language-yaml.png"/>
        </div>
    )
}