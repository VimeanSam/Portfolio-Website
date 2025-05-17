"use client";
import { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface projectProps {
  color: string;
  bg: string;
  setSlideshow: (value: Array<any>) => void;
}

const Projects: React.FC<projectProps> = ({ color, bg, setSlideshow }) => {
  const [page, setPage] = useState(1);
  const [projects, setProjects] = useState<any[]>([]);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(2);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects", {
        headers: { Accept: "application/json", method: "GET" },
      });

      if (res) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const previousPage = () => {
    let prev = page - 1;
    if (prev > 0) {
      setPage(prev);
      let start = (prev - 1) * 3;
      let stop = start + 2;
      if (stop >= projects.length) {
        stop = projects.length;
      }
      setStart(start);
      setStop(stop);
    }
  };

  const nextPage = () => {
    let next = page;
    let overallLength = Math.ceil(projects.length / 3);
    if (next < overallLength) {
      let newPage = next + 1;
      setPage(newPage);
      let start = (newPage - 1) * 3;
      let stop = start + 2;
      if (stop >= projects.length) {
        stop = projects.length;
      }
      setStart(start);
      setStop(stop);
    }
  };

  const list = projects.map(
    (data, index) =>
      index >= start &&
      index <= stop && (
        <div className="fade-animation" key={index}>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  className="card-img projectImg"
                  id={data.title}
                  src={`/projectPics/${data.mainpic}.jpg`}
                  onClick={() => {
                    setSlideshow(data.pics);
                  }}
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {data.link === "" ? (
                    <h4>
                      <a
                        target="_blank"
                        href={data.githubLink}
                        rel="noopener noreferrer"
                      >
                        {data.title}
                      </a>
                    </h4>
                  ) : (
                    <h4>
                      <a
                        target="_blank"
                        href={data.githubLink}
                        rel="noopener noreferrer"
                      >
                        {data.title}
                      </a>{" "}
                      <a
                        className="linkIcon"
                        style={{ color: `rgb(${color})` }}
                        target="_blank"
                        href={data.link}
                        rel="noopener noreferrer"
                      >
                        <FaGlobe />
                      </a>
                    </h4>
                  )}
                  <p style={{ fontSize: "19px" }}>
                    Stack:{" "}
                    <b style={{ color: `rgb(${color})` }}>{data.skills}</b>
                  </p>
                  <details style={{ fontSize: "19px" }}>
                    <summary>More information</summary>
                    <div className="fade-animation">
                      <p>{data.description}</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  );

  return (
    <div className="cardTab">
      <div className="zoom-animation">
        <h2>
          <span style={{ color: `rgb(${color})` }}>
            <FaLaptopCode />
          </span>
          <b> Projects</b>
        </h2>
        <p style={{ fontSize: "19px" }}>
          The GitHub repo of the project is accessible by clicking the title.
          <b> The globe icon </b> contains a link to the live demo of the
          project.
        </p>
        {list}
        <div className="control">
          {page - 1 > 0 ? (
            <span
              className="arrow round"
              style={{
                textDecoration: "none",
                backgroundColor: `rgb(${color})`,
              }}
              onClick={previousPage}
            >
              <FaChevronLeft />
            </span>
          ) : (
            <span
              className="arrowDisabled round"
              style={{ textDecoration: "none" }}
            >
              <FaChevronLeft />
            </span>
          )}

          <span style={{ fontSize: "19px", padding: "0 1em" }}>
            {" "}
            Page <b>{page}</b> of {Math.ceil(projects.length / 3)}{" "}
          </span>
          {page + 1 <= Math.ceil(projects.length / 3) ? (
            <span
              className="arrow round"
              style={{
                textDecoration: "none",
                backgroundColor: `rgb(${color})`,
              }}
              onClick={nextPage}
            >
              <FaChevronRight />
            </span>
          ) : (
            <span
              className="arrowDisabled round"
              style={{ textDecoration: "none" }}
            >
              <FaChevronRight />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
