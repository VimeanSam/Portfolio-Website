import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

interface colorProps {
  color: string;
}

const Experience: React.FC<colorProps> = ({ color }) => {
  return (
    <div className="cardTab">
      <div className="zoom-animation">
        <h2>
          <span style={{ color: `rgb(${color})` }}>
            <FaBriefcase />
          </span>
          <b> Work Experience</b>
        </h2>
        <div style={{ padding: "15px" }}>
          <h3>Edduus</h3>
          <img
            src={"Images/edduus.png"}
            height="40px"
            width="40px"
            title="Edduus"
            alt="edduus"
          ></img>
          <h5 style={{ marginTop: "0.5em" }}>
            Founding Full Stack Engineer (Remote)
          </h5>
          <h5 style={{ color: `rgb(${color})` }}>
            <span>
              <FaCalendarAlt />
            </span>{" "}
            May 2022 - Present
          </h5>
          <ul className="bullet-point">
            <li>
              Co-found and developed a cross-platform educational mobile
              application that encourages users to join learning communities to
              interact with like-minded individuals. Main features include live
              streaming, Q/A posting with{" "}
              <b style={{ color: `rgb(${color})` }}>AI </b> assistant using{" "}
              <b style={{ color: `rgb(${color})` }}>OpenAI</b>, articles, video
              uploading, and real-time messaging.
            </li>
            <li>
              Implemented a real-time chat interface in{" "}
              <b style={{ color: `rgb(${color})` }}>React Native</b> and{" "}
              <b style={{ color: `rgb(${color})` }}>Firebase</b> for
              notifications which allows users to communicate with one another
              within the application.
            </li>
            <li>
              Constructed an elegant, responsive and accessible{" "}
              <b style={{ color: `rgb(${color})` }}>React.js</b>{" "}
              <b style={{ color: `rgb(${color})` }}>SaaS </b>
              platform with a small development team for community
              administrators to manage data and create learning contents for
              users manually or with{" "}
              <b style={{ color: `rgb(${color})` }}>AI </b> assistant using{" "}
              <b style={{ color: `rgb(${color})` }}>OpenAI</b>.
            </li>
          </ul>

          <h5 style={{ marginTop: "0.5em" }}>
            Backend Software Engineer (Remote)
          </h5>
          <h5 style={{ color: `rgb(${color})` }}>
            <span>
              <FaCalendarAlt />
            </span>{" "}
            Sep 2020 - May 2022
          </h5>
          <ul className="bullet-point">
            <li>
              Utilized an <b style={{ color: `rgb(${color})` }}>MVC</b>{" "}
              (Model-View-Controller) software design for various server-side
              operations using <b style={{ color: `rgb(${color})` }}>Node.js</b>
              , <b style={{ color: `rgb(${color})` }}>PHP</b> that connects to{" "}
              <b style={{ color: `rgb(${color})` }}>PostgreSQL </b>
              and No-SQL <b style={{ color: `rgb(${color})` }}>MongoDB</b>{" "}
              resulting in code reusability and improved maintenance across all
              applications.
            </li>
            <li>
              Deep understanding of system tools such as{" "}
              <b style={{ color: `rgb(${color})` }}>Git</b>,{" "}
              <b style={{ color: `rgb(${color})` }}>Linux</b>,{" "}
              <b style={{ color: `rgb(${color})` }}>NGINX</b> and{" "}
              <b style={{ color: `rgb(${color})` }}>Stripe</b> API platform.
            </li>
            <li>
              Traversed across all levels of code stack and produce efficient
              solutions for complex problems.
            </li>
          </ul>

          <hr></hr>

          <h3>Ultimo Software Solutions, Inc.</h3>
          <img
            src={"Images/ultimo.png"}
            height="40px"
            width="150px"
            title="UltimoSoft"
            alt="ultimo"
          ></img>
          <h5 style={{ marginTop: "0.5em" }}>Software Engineer Intern</h5>
          <h5 style={{ color: `rgb(${color})` }}>
            <span>
              <FaCalendarAlt />
            </span>{" "}
            Jan 2020 - Mar 2020
          </h5>
          <ul className="bullet-point">
            <li>
              Learned techniques of Software Integrations by using{" "}
              <b style={{ color: `rgb(${color})` }}>MuleSoft </b>
              to implement API flows that connect different web services (
              <b style={{ color: `rgb(${color})` }}>REST</b>,{" "}
              <b style={{ color: `rgb(${color})` }}>SOAP</b>) with various
              systems and databases (mainly{" "}
              <b style={{ color: `rgb(${color})` }}>MySQL</b>).
            </li>
            <li>
              Utilized <b style={{ color: `rgb(${color})` }}>DataWeave</b> to
              transform API data into various content types such as{" "}
              <b style={{ color: `rgb(${color})` }}>JSON</b> and{" "}
              <b style={{ color: `rgb(${color})` }}>XML</b>
            </li>
            <li>
              Connected, retrieved, and modfied data between{" "}
              <b style={{ color: `rgb(${color})` }}>Java</b> client and{" "}
              <b style={{ color: `rgb(${color})` }}>Oracle Netsuite</b>.
            </li>
            <li>
              Used <b style={{ color: `rgb(${color})` }}>Salesforce</b> Platform
              to create, connect, and modify data using Salesforce language of{" "}
              <b style={{ color: `rgb(${color})` }}>Apex Code</b>,{" "}
              <b style={{ color: `rgb(${color})` }}>SOQL</b>, and{" "}
              <b style={{ color: `rgb(${color})` }}>SOSL</b>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
