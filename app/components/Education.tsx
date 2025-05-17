import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

interface colorProps {
  color: string;
}

const Education: React.FC<colorProps> = ({ color }) => {
  return (
    <div className="cardTab">
      <div className="zoom-animation">
        <h2>
          <span style={{ color: `rgb(${color})` }}>
            <FaGraduationCap />
          </span>{" "}
          <b>Education</b>
        </h2>
        <div style={{ padding: "15px" }}>
          <h3>San Francisco State University</h3>
          <h5>Bachelors of Science, Computer Science</h5>
          <img
            src={"Images/sfsu.png"}
            height="40px"
            width="150px"
            title="SFSU"
            alt="SFSU"
          ></img>
          <h5 style={{ color: `rgb(${color})`, marginTop: "10px" }}>
            <span>
              <FaCalendarAlt />
            </span>{" "}
            Aug 2015 - Jul 2019
          </h5>
          <p style={{ fontSize: "19px" }}>
            3.69 / 4.00 GPA <br></br>Academic Achievement Award
          </p>
          <p style={{ fontSize: "19px" }}>
            <b>Relavant coursework: </b> Data Structures, Software Development
            in Java, Software Engineering, Database Systems, Internet
            Applications Design and Development.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
