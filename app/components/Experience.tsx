import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import styles from "./font.module.css";

const Experience = () => {
  const parentContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // minHeight: "100dvh",
    marginBottom: "2em",
    flexDirection: "column",
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
            <FaBriefcase />
          </span>
          <h1 style={{ color: "white", fontSize: "2rem" }}>Work Experience</h1>
        </div>
        <div style={{ ...card, marginTop: "1em" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
          >
            <h3
              style={{
                marginTop: "0.5em",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Full Stack Engineer (Remote)
            </h3>
            <img
              src={"Images/edduus.png"}
              height="40px"
              width="40px"
              title="Edduus"
              alt="edduus"
            ></img>
            <h5 style={{ fontSize: "1.25rem" }}>Edduus</h5>
            <h3 style={{ color: `#6291f5` }}>
              <span>
                <FaCalendarAlt />
              </span>{" "}
              Sep 2020 - Present
            </h3>
          </div>

          <p className={styles.regular}>
            Architected and launched a cross-platform{" "}
            <b style={{ color: `#6291f5` }}>React Native</b> mobile application
            for real-time peer collaboration through adaptive learning
            materials, a responsive{" "}
            <b style={{ color: `#6291f5` }}>React.js SaaS</b> dashboard for
            content management, and a{" "}
            <b style={{ color: `#6291f5` }}>Node.js</b>/
            <b style={{ color: `#6291f5` }}>Stripe</b>-integrated monetization
            infrastructure that empowers creators to launch subscription-based
            learning communities, host live streams, and commercialize their
            expertise.
          </p>
        </div>
      </div>

      <div style={{ ...card, marginTop: "1em" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
          <h3
            style={{
              marginTop: "0.5em",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Software Engineer Intern
          </h3>
          <img
            src={"Images/ultimo.png"}
            height="40px"
            width="150px"
            title="UltimoSoft"
            alt="ultimo"
          ></img>
          <h5 style={{ fontSize: "1.25rem" }}>
            Ultimo Software Solutions, Inc.
          </h5>
          <h3 style={{ color: `#6291f5` }}>
            <span>
              <FaCalendarAlt />
            </span>{" "}
            Jan 2020 - Mar 2020
          </h3>
        </div>

        <p className={styles.regular}>
          Engineered data pipelines connecting{" "}
          <b style={{ color: `#6291f5` }}>Java</b> clients with{" "}
          <b style={{ color: `#6291f5` }}>Oracle NetSuite</b>, while designing{" "}
          <b style={{ color: `#6291f5` }}>MuleSoft</b> API flows and DataWeave
          transformations to bridge backend systems with{" "}
          <b style={{ color: `#6291f5` }}>REST/SOAP</b> web services and{" "}
          <b style={{ color: `#6291f5` }}>MySQL</b> databases.
        </p>
      </div>
    </div>
  );
};

export default Experience;
