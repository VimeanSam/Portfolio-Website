import {
  FaEnvelope,
  FaHome,
  FaPhone,
  FaCode,
  FaDatabase,
  FaBrain,
  FaTools,
  FaGithub,
  FaPaperclip,
  FaInfoCircle,
  FaCommentAlt,
  FaLinkedin,
  FaBasketballBall,
} from "react-icons/fa";

interface InfoProps {
  color: string;
}

const Info: React.FC<InfoProps> = ({ color }) => {
  return (
    <div className="column">
      <div className="cardTab">
        <div className="fade-animation" style={{ textAlign: "center" }}>
          <img
            id="me"
            src={"Images/Me.jpg"}
            alt="vs"
            style={{ display: "inline" }}
          ></img>
        </div>
        <div className="zoom-animation">
          <h1 style={{ marginTop: "10px", marginBottom: "20px" }}>
            <b>Vimean Sam</b>
          </h1>
          <p style={{ fontSize: "19px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaHome />
            </span>{" "}
            San Francisco Bay Area
          </p>
          <p style={{ fontSize: "19px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaEnvelope />
            </span>{" "}
            <a
              target="_blank"
              href="mailto:vimeansam2017@gmail.com"
              rel="noopener noreferrer"
            >
              vimeansam2017@gmail.com
            </a>
          </p>
          <p style={{ fontSize: "19px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaPhone />
            </span>{" "}
            (209)-968-8736
          </p>
          <p style={{ fontSize: "19px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaPaperclip />
            </span>{" "}
            <a
              target="_blank"
              href="/Files/VimeanSamResume2025.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </p>
          <p style={{ fontSize: "19px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaGithub />
            </span>{" "}
            <a
              target="_blank"
              href="https://github.com/VimeanSam"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p style={{ fontSize: "19px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaLinkedin />
            </span>{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vimean-sam-4040a713a/"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </p>
          <hr></hr>
          <h2 style={{ marginBottom: "10px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaInfoCircle />
            </span>
            <b> About</b>
          </h2>
          <p style={{ fontSize: "19px" }}>
            Greetings, my name is Vimean Sam. I am a highly skilled, versatile,
            and creative individual with an experience in both full stack web
            and mobile development who is successful in both individual and team
            settings.
          </p>
          <hr></hr>
          <h2 style={{ marginBottom: "10px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaBrain />
            </span>
            <b> Skills</b>
          </h2>
          <span className="category">
            <span style={{ color: `rgb(${color})` }}>
              <FaCode />
            </span>{" "}
            Programming Languages
          </span>
          <div>
            <ul className="multi-column">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>React Native</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java</li>
              <li>PHP</li>
              <li>Python</li>
              <li>Go</li>
            </ul>
          </div>
          <span className="category">
            <span style={{ color: `rgb(${color})` }}>
              <FaDatabase />
            </span>{" "}
            Database Languages
          </span>
          <div>
            <ul className="multi-column">
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <span className="category">
            <span style={{ color: `rgb(${color})` }}>
              <FaTools />
            </span>{" "}
            Other Tools
          </span>
          <div>
            <ul className="multi-column">
              <li>Photoshop</li>
              <li>Microsoft Office</li>
              <li>Linux / Ubuntu</li>
              <li>AWS</li>
              <li>NGINX</li>
            </ul>
          </div>
          <span className="category">
            <span style={{ color: `rgb(${color})` }}>
              <FaCommentAlt />
            </span>{" "}
            Soft Skills
          </span>
          <div>
            <ul className="multi-column">
              <li>Teamwork</li>
              <li>Creativity</li>
              <li>Problem-solving</li>
              <li>Communication</li>
            </ul>
          </div>
          <hr></hr>
          <h2 style={{ marginBottom: "10px" }}>
            <span style={{ color: `rgb(${color})` }}>
              <FaBasketballBall />
            </span>
            <b> Hobbies</b>
          </h2>
          <ul className="multi-column">
            <li>Basketball</li>
            <li>Biking</li>
            <li>Skateboarding</li>
            <li>Watch movies</li>
            <li>Workout</li>
            <li>Gaming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
