import PageTemplate from "../components/PageTemplate"
import salutations from "../features/salutations"
import Section from "../components/Section"
import projects from "../data/projects"
import skills from "../data/skills"
import experience from "../data/experiences"
import researches from "../data/researches"
import Projects from "../components/PageSections/Projects"
import Experiences from "../components/PageSections/Experiences"
import Researches from "../components/PageSections/Researches"
import Skills from "../components/PageSections/Skills"


export default function Home() {
    return <PageTemplate>
        <div className="space-y-14">
            <div>
                <h1 className="text-gray-900 dark:text-white">
                <span className="max-w-4xl mt-5 text-lg md:text-xl">
                {salutations()}, I'm <span className="text-yellow-500 dark:text-yellow-400">Melvin He</span>.
                </span>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 dark:text-green-400 mt-2">
                        <div>
                            Welcome to my Personal Projects Portfolio!
                        </div>
                    </div>
                </h1>
                <p className="max-w-4xl mt-5 text-lg md:text-xl text-green-800 dark:text-green-700">
                    I'm a Computer Science student at Brown University passionate about using technology to drive innovation 
                    and promote social good. Check out my experience, research, education, and projects below!
                </p>
            </div>
            <Section title="Experience">
                <Experiences experiences={experience}/>
            </Section>

            <Section title="Research & Education">
                <Researches researches={researches}/>
            </Section>

            <Section title="Projects">
                <Projects projects={projects}/>
            </Section>

            <Section title="Skills">
                <Skills skills={skills}/>
            </Section>
        </div>
        
    </PageTemplate>
}