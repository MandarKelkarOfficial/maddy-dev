// @flow strict
import React from "react";
import Marquee from "react-fast-marquee";

// ======================
// SVG IMPORTS (EXAMPLES)
// ======================
// Make sure you have these .svg files in `src/assets/svg/skills` or adjust the paths to match your project structure

// Languages
import cSvg from "../../../assets/svg/skills/c.svg";
import cppSvg from "../../../assets/svg/skills/cplusplus.svg";
import pythonSvg from "../../../assets/svg/skills/python.svg";
import javaSvg from "../../../assets/svg/skills/java.svg";
import javascriptSvg from "../../../assets/svg/skills/javascript.svg";
import typescriptSvg from "../../../assets/svg/skills/typescript.svg";
import phpSvg from "../../../assets/svg/skills/php.svg";
import goSvg from "../../../assets/svg/skills/go.svg";
import soliditySvg from "../../../assets/svg/skills/solidity.svg";
import dartSvg from "../../../assets/svg/skills/dart.svg";

// Frontend
import htmlSvg from "../../../assets/svg/skills/html.svg";
import cssSvg from "../../../assets/svg/skills/css.svg";
import reactSvg from "../../../assets/svg/skills/react.svg";

import vueSvg from "../../../assets/svg/skills/vue.svg";
import angularSvg from "../../../assets/svg/skills/angular.svg";
import bootstrapSvg from "../../../assets/svg/skills/bootstrap.svg";
import tailwindSvg from "../../../assets/svg/skills/tailwind.svg";

// Backend
import nodeSvg from "../../../assets/svg/skills/node.svg";
import expressSvg from "../../../assets/svg/skills/express.svg";
import djangoSvg from "../../../assets/svg/skills/django.svg";
import flaskSvg from "../../../assets/svg/skills/flask.svg";

import graphqlSvg from "../../../assets/svg/skills/graphql.svg";

// Databases
import mongodbSvg from "../../../assets/svg/skills/mongodb.svg";
import postgresSvg from "../../../assets/svg/skills/postgresql.svg";
import mysqlSvg from "../../../assets/svg/skills/mysql.svg";
import sqliteSvg from "../../../assets/svg/skills/sqlite.svg";

// DevOps & Hosting
import githubSvg from "../../../assets/svg/skills/git.svg";
import netlifySvg from "../../../assets/svg/skills/netlify.svg";
import renderSvg from "../../../assets/svg/skills/render.svg";
import ghpagesSvg from "../../../assets/svg/skills/github-pages.svg";

// Data Science & AI

import numpySvg from "../../../assets/svg/skills/numpy.svg";
import pandasSvg from "../../../assets/svg/skills/pandas.svg";
import powerbiSvg from "../../../assets/svg/skills/powerbi.svg";

// Design & UI/UX
import canvaSvg from "../../../assets/svg/skills/canva.svg";
import figmaSvg from "../../../assets/svg/skills/figma.svg";

// ======================
// SKILLS DATA
// ======================
const skillsData = [
  // Languages
  "C",
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Go",
  "Solidity",
  "Dart",
  // Frontend
  "HTML5",
  "CSS3",
  "React",
  "Vue",
  "Angular",
  "Bootstrap",
  "TailwindCSS",
  // Backend
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Nest",
  "GraphQL",
  // Databases
  "MongoDB",
  "Postgres",
  "MySQL",
  "SQLite",
  // DevOps & Hosting
  "GitHub",
  "Netlify",
  "Render",
  "GitHub Pages",
  // Data Science & AI
  
  "Numpy",
  "Pandas",
  "Power BI",
  // Design & UI/UX
  "Canva",
  "Figma",
];

// ======================
// SKILL IMAGE MAPPER
// ======================
function skillsImage(skill) {
  // Match skill by name
  switch (skill.toLowerCase()) {
    case "c":
      return cSvg;
    case "c++":
      return cppSvg;
    case "python":
      return pythonSvg;
    case "java":
      return javaSvg;
    case "javascript":
      return javascriptSvg;
    case "typescript":
      return typescriptSvg;
    case "php":
      return phpSvg;
    case "go":
      return goSvg;
    case "solidity":
      return soliditySvg;
    case "dart":
      return dartSvg;

    // Frontend
    case "html5":
      return htmlSvg;
    case "css3":
      return cssSvg;
    case "react":
      return reactSvg;

    case "vue":
      return vueSvg;
    case "angular":
      return angularSvg;
    case "bootstrap":
      return bootstrapSvg;
    case "tailwindcss":
      return tailwindSvg;

    // Backend
    case "node.js":
      return nodeSvg;
    case "express.js":
      return expressSvg;
    case "django":
      return djangoSvg;
    case "flask":
      return flaskSvg;

    case "graphql":
      return graphqlSvg;

    // Databases
    case "mongodb":
      return mongodbSvg;
    case "postgres":
      return postgresSvg;
    case "mysql":
      return mysqlSvg;
    case "sqlite":
      return sqliteSvg;

    // DevOps & Hosting
    case "github":
      return githubSvg;
    case "netlify":
      return netlifySvg;
    case "render":
      return renderSvg;
    case "github pages":
      return ghpagesSvg;

    // Data Science & AI

    case "numpy":
      return numpySvg;
    case "pandas":
      return pandasSvg;
    case "power bi":
      return powerbiSvg;

    // Design & UI/UX
    case "canva":
      return canvaSvg;
    case "figma":
      return figmaSvg;

    default:
      return "";
  }
}

// ======================
// SKILLS COMPONENT
// ======================
function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={100}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
