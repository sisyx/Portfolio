import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import MemberCard from "./MemberCard";
import sajadjpg from "../../Assets/members/sajad.jpg";
import sajadpng from "../../Assets/members/sajad.png";
import nasrinpng from '../../Assets/members/nasrin.png';
import javadpng from '../../Assets/members/javad.png';
import sinapng from '../../Assets/members/sina.png';
import mahakpng from '../../Assets/members/mahak.png';
import mehdipng from '../../Assets/members/mehdi.png';
import { DiBootstrap, DiCss3, DiCssTricks, DiDjango, DiDocker, DiDotnet, DiGhost, DiGit, DiHtml5, DiJavascript, DiLinux, DiMaterializecss, DiMongodb, DiMsqlServer, DiMysql, DiNodejs, DiPhotoshop, DiPython, DiReact, DiSqllite, DiUikit } from "react-icons/di";
import { SiVuedotjs } from "react-icons/si";


const members = [
    {
        name: "Sajad Bahadori",
        profession: "Frontend Developer",
        imageSrc: sajadpng,
        detail: "I'm a frontend specialist with expertise in React.js, VUE.JS utilizing technologies such as Tailwind CSS, Bootstrap, TypeScript, and Material-UI. I have a keen interest in crafting engaging user interfaces, developing responsive web applications, and ensuring seamless integration of design components for optimal user experience. With a keen eye for detail, a passion for modern web development frameworks, and a commitment to delivering high-quality products, I stand out as a valuable asset in frontend development projects.",
        skills: [
            {
                name: "React.js",
                icon: <DiReact />
            }, 
            {
                name: "Vue.js",
                icon: <SiVuedotjs />
            }, 
            {
                name: "Tailwind",
                icon: <DiBootstrap />
            }, 
            {
                name: "Bootstrap",
                icon: <DiBootstrap />
            }, 
            {
                name:"Git",
                icon: <DiGit />
            }, 
            {
                name: "Linux", 
                icon: <DiLinux />
            },
            {
                name: "material ui",
                // icon: <DiUikit />
            }
        ]
    },
    {
        name: "S.M.Javad Motazavian",
        profession: "Backend | ASP.Net Developer",
        imageSrc: javadpng,
        detail: "I'm a specialist in backend development using ASP.NET Core. With a solid background and expertise in this technology stack, I am skilled in building robust backend systems, designing efficient APIs, and implementing secure and scalable solutions.I excel in database design, optimizing performance, and ensuring a seamless integration of frontend and backend components. My dedication to clean code, best practices, and staying updated with the latest trends in backend development makes me a valuable asset in any software development team.",
        right: true,
        skills: [
            {
                name: "ASP.NET",
                icon: <DiDotnet />
            },
            {
                name: "SQL",
                icon: <DiMsqlServer />
            },
            {
                name: "MySql",
                icon: <DiMysql />
            },
            {
                name: "Hosting",
                icon: <DiGhost />
            },
            {
                name: "Node.Js",
                icon: <DiNodejs />
            },
            {
                name:"Git",
                icon: <DiGit />
            }, 
        ]
    },
    {
        name: "Nasrin Mirzapour",
        profession: "Frontend Developer",
        imageSrc: nasrinpng,
        detail: "I'm a frontend expert specializing in advanced HTML, CSS, and JavaScript. My proficiency in frontend development allows me to create visually appealing and interactive user interfaces, employing cutting-edge techniques and best practices. I excel in translating design concepts into seamless web experiences, ensuring both aesthetic appeal and smooth functionality. With a deep understanding of HTML, CSS, and JavaScript, I bring creativity and precision to my frontend projects, making my a valuable asset in delivering high-quality and user-friendly web solutions.",
        skills: [
            {
                name: "HTML",
                icon: <DiHtml5 />
            },
            {
                name: "CSS",
                icon: <DiCss3 />
            },
            {
                name: "Javascript",
                icon: <DiJavascript />
            },
            {
                name: "Bootstrap", 
                icon: <DiBootstrap />
            },
            {
                name: "CSS Tricks",
                icon: <DiCssTricks />
            }
        ]
    },
    {
        name: "Mehdi Boostani",
        profession: "Backend | DJango Developer",
        imageSrc: mehdipng,
        detail: "I'm an experienced database specialist with several years of expertise in SQL and MongoDB. I possesses full proficiency in SQL and MongoDB databases with skills in designing, optimizing, and managing relational and NoSQL databases. I excel in enhancing database performance, executing complex queries, and providing effective solutions for database issues. I emphasize professional ethics, commitment to work, and delivering superior service to clients.",
        right: true,
        skills: [
            {
                name: "DJango",
                icon: <DiDjango />
            },
            {
                name: "python",
                icon: <DiPython />
            },
            {
                name: "MongoDB",
                icon: <DiMongodb />
            },
            {
                name: "SQLite",
                icon: <DiSqllite />
            },
            {
                name: "Docker",
                icon: <DiDocker />
            },
        ]
    },
    {
        name: "Mahak Raeisi",
        profession: "UI/UX Designer",
        imageSrc: mahakpng,
        detail: "I'm a talented UI/UX designer specializing in Figma software. With a keen eye for aesthetics and usability, I bring several years of experience in creating visually appealing and user-friendly interfaces. Mahak excels in designing intuitive user experiences, crafting interactive prototypes, and collaborating effectively with cross-functional teams. i am dedicated to staying updated with the latest design trends and ensuring high-quality deliverables. Professionalism, creativity, and a customer-centric approach define my work ethos.",
        skills: [
            {
                name: "UI/UX",
                icon: <DiUikit />
            },
            {
                name: 'figma',
            },
            {
                name: "Adobe Photoshop",
                icon: <DiPhotoshop />
            }
        ]
    },
    {
        name: "Sina Dabagh A.",
        profession: "Data Scientist",
        imageSrc: sinapng,
        detail: "I'm an expert in the field of artificial intelligence and machine learning. With several years of experience in this domain, I excel in data analysis, developing artificial intelligence algorithms, and implementing machine learning models.I have a strong ability to detect patterns, predict data trends, and provide data-driven solutions for complex problems. My passion for innovation, technological advancement, and solving challenging issues, combined with professional ethics and dedication to offering optimal solutions in the artificial intelligence domain, sets me apart.",
        right: true,
        skills: [
            {
                name: "python",
                icon: <DiPython />
            },
            {
                name: "Linux",
                icon: <DiLinux />
            },
            {
                name: "Jupyter Notebook"
            },
            {
                name: "Docker",
                icon: <DiDocker />
            }
        ]
    },
]

function Members() {
  return (
    <Container fluid className="about-section">
      <Particle />
    <h1 className="project-heading">
        Our Team <strong className="purple">Is Here </strong>
    </h1>
    <p style={{ color: "white" }} style={{marginBottom: "100px"}}>
        Here are our team members introducings.
    </p>
      <Container>
        <div className="members">
            {
                members.map(member => <MemberCard member={member} />)
            }
        </div>
      </Container>
    </Container>
  );
}

export default Members;
