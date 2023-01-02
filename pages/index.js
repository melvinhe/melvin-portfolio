import PageTemplate from "../components/PageTemplate"
import salutations from "../utils/salutations"
import Projects from "../components/PageSections/Projects"
import Experiences from "../components/PageSections/Experiences"
import Researches from "../components/PageSections/Researches"
import Skills from "../components/PageSections/Skills"
import Section from "../components/Section"
import projects from "../data/projects"
import experiences from "../data/experiences"
import skills from "../data/skills"
import researches from "../data/researches"


export default function Home() {
    return <PageTemplate>
        <div className="space-y-24">
            {/*Page header + description*/}
            <div>
                <h1 className="text-gray-900 dark:text-white">
                    <span className="max-w-4xl mt-5 text-lg md:text-xl">{salutations()}, My name is Melvin.</span>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                        <div>
                            Welcome to my Website!
                        </div>
                    </div>
                </h1>
                <p className="max-w-4xl mt-5 text-lg md:text-xl text-gray-500 dark:text-gray-400">
                    I'm a sophomore studying Applied Mathematics-Computer Science at Brown 
                    University passionate about exploring cutting-edge technology and improving education.                </p>
            </div>
        </div>
    </PageTemplate>
}