import {
  FaEnvelope,
  FaHome,
  FaPhone,
  FaGithub,
  FaInfoCircle,
  FaLinkedin,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";
import styles from "./font.module.css";

const About = () => {
  const parentContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // minHeight: "100dvh",
    marginBottom: "2em",
  } as const;

  const card = {
    padding: "1em",
    backgroundColor: "#1e1e1f",
    boxShadow: "0 4px 8px 0 rgba(86, 115, 209, 0.2)",
    transition: "0.3s",
    borderRadius: "20px",
    color: "#a1a1aa",
    border: "1px solid #182755",
    width: "100%",
    maxWidth: "1024px",
  } as const;

  const image = {
    height: "100%",
    width: "220px",
    borderRadius: "50%",
  } as const;

  return (
    <div style={parentContainer}>
      <div style={{ marginTop: "1em" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5em",
          }}
        >
          <span
            style={{
              color: `#6291f5`,
              fontSize: "1.8em",
              marginTop: "0.2em",
            }}
          >
            <FaInfoCircle />
          </span>
          <h1 style={{ color: "white", fontSize: "2rem" }}>About me</h1>
        </div>
        <div style={{ ...card, marginTop: "1em" }}>
          <div className="flexBox" style={{ marginTop: "1em" }}>
            <div>
              <img src={"Images/Me.jpg"} alt="vs" style={image}></img>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <span style={{ color: `#6291f5` }}>
                  <FaHome />
                </span>
                <div className={styles.regular}>San Francisco Bay Area</div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <span style={{ color: `#6291f5` }}>
                  <FaEnvelope />
                </span>
                <a
                  target="_blank"
                  href="mailto:vimeansam2017@gmail.com"
                  rel="noopener noreferrer"
                  style={{ color: "#0d6efd" }}
                  className={styles.regular}
                >
                  vimeansam2017@gmail.com
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <span style={{ color: `#6291f5` }}>
                  <FaPhone />
                </span>
                <div className={styles.regular}>(209)-968-8736</div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <span style={{ color: `#6291f5` }}>
                  <FaGithub />
                </span>
                <a
                  target="_blank"
                  href="https://github.com/VimeanSam"
                  rel="noopener noreferrer"
                  style={{ color: "#0d6efd" }}
                  className={styles.regular}
                >
                  GitHub
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                }}
              >
                <span style={{ color: `#6291f5` }}>
                  <FaLinkedin />
                </span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/vimean-sam-4040a713a/"
                  rel="noopener noreferrer"
                  style={{ color: "#0d6efd" }}
                  className={styles.regular}
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "1em" }} className={styles.regular}>
            Greetings! My name is Vimean Sam. I am a versatile, creative
            software engineer with full-stack web and mobile expertise. Notably,
            I contributed to the development of a knowledge-monetization
            platform from the ground up, leveraging real-time peer collaboration
            and AI-driven adaptive learning materials to foster continuous
            personal and organizational development.
          </p>

          <p className={styles.regular}>
            When the laptop closes, I focus on staying active and staying
            moving. My favorite ways to recharge include playing basketball,
            biking, and skateboarding.
          </p>
        </div>
      </div>

      <div style={{ ...card, marginTop: "1em" }}>
        <h2 style={{ fontSize: "1.5rem" }}>
          <span style={{ color: "#6291f5" }}>
            <FaGraduationCap />
          </span>{" "}
          <b style={{ color: "white" }}>Education</b>
        </h2>
        <h2 style={{ fontSize: "1.5rem", marginTop: "0.5em" }}>
          San Francisco State University
        </h2>
        <div style={{ fontSize: "1.25rem", margin: "0.5em 0", color: "white" }}>
          Bachelors of Science, Computer Science
        </div>
        <img
          src={"Images/sfsu.png"}
          height="40px"
          width="150px"
          title="SFSU"
          alt="SFSU"
        ></img>
        <h3 style={{ color: "#6291f5", marginTop: "0.5em" }}>
          <span>
            <FaCalendarAlt />
          </span>{" "}
          Aug 2015 - Jul 2019
        </h3>
        <p className={styles.regular}>
          3.69 / 4.00 GPA <br></br>Academic Achievement Award
        </p>
      </div>
    </div>
  );
};

export default About;
