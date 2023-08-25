import React from "react";
import PageTemplate from "../components/PageTemplate";
import salutations from "../features/salutations";
import Section from "../components/Section";
import projects from "../data/projects";
import skills from "../data/skills";
import experience from "../data/experiences";
import researches from "../data/researches";
import Projects from "../components/PageSections/Projects";
import Experiences from "../components/PageSections/Experiences";
import Researches from "../components/PageSections/Researches";
import Skills from "../components/PageSections/Skills";

export default function Home() {
  return (
    <PageTemplate>
      <div className="space-y-14">
        <div>
          <h1 className="text-gray-900 dark:text-white">
            <span className="max-w-4xl mt-5 text-lg md:text-xl">
              {salutations()}, I'm{" "}
              <span className="glitter-text">Melvin He</span>.
            </span>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-500 dark:text-gold-400 mt-2">
              <div>Welcome to my Personal Portfolio!</div>
            </div>
          </h1>
          <p className="max-w-4xl mt-5 text-lg md:text-xl text-green-800 dark:text-green-700">
            I'm a Computer Science student at Brown University greatly passionate for creative problem solving, 
            technology, and innovation with experience in full stack development, distributed systems, and machine learning.
            Check out my technical experience, research, education, and personal projects below!
          </p>
        </div>
        <Section title="Experience">
          <Experiences experiences={experience} />
        </Section>

        <Section title="Research & Education">
          <Researches researches={researches} />
        </Section>

        <Section title="Projects">
          <Projects projects={projects} />
        </Section>

        <Section title="Skills">
          <Skills skills={skills} />
        </Section>
      </div>

      <style jsx>
        {`
          .glitter-text {
            background-image: linear-gradient(
              45deg,
              #a78b28 25%, /* Darker gold color */
              #b9a45b 25%, /* Different shade of gold */
              #b9a45b 50%,
              #a78b28 50%,
              #a78b28 75%,
              #b9a45b 75%, /* Different shade of gold */
              #b9a45b
            );
            background-size: 400% 400%;
            animation: glitter 10s ease infinite; /* Adjusted animation duration */
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }

          @keyframes glitter {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 400% 400%;
            }
          }
        `}
      </style>
    </PageTemplate>
  );
}
