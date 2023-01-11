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
        <div className="space-y-24">
            <div>
                <h1 className="text-gray-900 dark:text-white">
                    <span className="max-w-4xl mt-5 text-lg md:text-xl">{salutations()}, I'm Melvin He.</span>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                        <div>
                            Welcome to my portfolio!
                        </div>
                    </div>
                </h1>
                <p className="max-w-4xl mt-5 text-lg md:text-xl text-gray-500 dark:text-gray-400">
                    I'm a sophomore studying Applied Mathematics and Computer Science at Brown 
                    University with a passion for exploring technology and education.                </p>
            </div>
            {/*Projects section*/}
            <Section title="Projects">
                <Projects projects={projects}/>
            </Section>

            {/*Research section*/}
            <Section title="Research">
                <Researches researches={researches}/>
            </Section>

            {/*Experience section*/}
            <Section title="Experience">
                <Experiences experiences={experience}/>
            </Section>

            {/*Skills section*/}
            <Section title="Skills">
                <Skills skills={skills}/>
            </Section>
        </div>
        
    </PageTemplate>
}