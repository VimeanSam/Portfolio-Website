import { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./card.module.css";
import fontSize from "./font.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

interface projectProps {
  setSlideshow: (value: Array<any>) => void;
}

const Projects: React.FC<projectProps> = ({ setSlideshow }) => {
  const [page, setPage] = useState(1);
  const [projects, setProjects] = useState<any[]>([]);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(2);

  // Track an array of open project titles to support multiple open cards across pages
  const [openProjectTitles, setOpenProjectTitles] = useState<string[]>([]);

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

  // Helper function to handle toggling open states
  const toggleProjectDetails = (title: string, isOpen: boolean) => {
    setOpenProjectTitles((prev) => {
      if (isOpen) {
        return prev.includes(title) ? prev : [...prev, title];
      } else {
        return prev.filter((t) => t !== title);
      }
    });
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

  const parentContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
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

  // 1. Filter out the items that belong to the current page view
  const currentPageProjects = projects.filter(
    (_, index) => index >= start && index <= stop,
  );

  // 2. Map only the active projects to JSX elements
  const list = currentPageProjects.map((data, index) => {
    const isCurrentlyOpen = openProjectTitles.includes(data.title);

    return (
      <div style={card} key={index}>
        <div className={styles.projectContainer}>
          <div className={styles.side}>
            <img
              className="projectImg"
              style={{ width: "100%" }}
              id={data.title}
              src={`/projectPics/${data.mainpic}.jpg`}
              onClick={() => {
                setSlideshow(data.pics);
              }}
              alt=""
            />
          </div>
          <div className={styles.main}>
            <h2>
              <a
                target="_blank"
                href={data.githubLink}
                rel="noopener noreferrer"
                style={{ color: "#0d6efd" }}
              >
                {data.title}
              </a>
            </h2>
            <p className={fontSize.regular}>
              Stack: <b style={{ color: `#6291f5` }}>{data.skills}</b>
            </p>
            <details
              className={fontSize.regular}
              open={isCurrentlyOpen}
              onToggle={(e) => {
                toggleProjectDetails(data.title, e.currentTarget.open);
              }}
            >
              <summary>More information</summary>
              <div className="fade-animation">
                <p>{data.description}</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    );
  });

  // 3. Calculate missing items to fill up to 3 slots
  const totalSlotsNeeded = 3;
  const missingSlotsCount = Math.max(
    0,
    totalSlotsNeeded - currentPageProjects.length,
  );

  // 4. Generate ghost placeholders if projects are loaded but are less than 3
  const placeholders =
    projects.length > 0
      ? Array.from({ length: missingSlotsCount }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            style={{
              ...card,
              visibility: "hidden",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            <div
              className={styles.projectContainer}
              style={{ minHeight: "150px" }}
            >
              <h2>&nbsp;</h2>
              <p>&nbsp;</p>
            </div>
          </div>
        ))
      : null;

  return (
    <div style={parentContainer}>
      <div
        style={{
          marginTop: "1em",
          width: "100%",
          maxWidth: "1024px",
        }}
      >
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
            <FaLaptopCode />
          </span>
          <h1 style={{ color: "white", fontSize: "2rem" }}>Projects</h1>
        </div>

        {/* 🛠️ This wrapper holds the list and maintains structural height continuity */}
        {/* Adjusted to use minHeight to stabilize pagination controller positions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            marginTop: "1em",
            minHeight: "620px",
          }}
        >
          {list}
          {placeholders}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5em",
          marginTop: "2em",
        }}
      >
        {/* Left Arrow Button */}
        <button
          disabled={page === 1}
          onClick={previousPage}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #182755",
            backgroundColor: page === 1 ? "gray" : "#6291f5",
            color: "white",
            cursor: page === 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <IoArrowBack size={20} />
        </button>

        {/* Page Indicator Text */}
        <span
          style={{
            color: "white",
            fontSize: "0.95rem",
            letterSpacing: "0.5px",
          }}
        >
          Page <b style={{ color: "#6291f5" }}>{page}</b> of{" "}
          {Math.max(1, Math.ceil(projects.length / 3))}
        </span>

        {/* Right Arrow Button */}
        <button
          disabled={page >= Math.ceil(projects.length / 3)}
          onClick={nextPage}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #182755",
            backgroundColor:
              page >= Math.ceil(projects.length / 3) ? "gray" : "#6291f5",
            color: "white",
            cursor:
              page >= Math.ceil(projects.length / 3)
                ? "not-allowed"
                : "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <IoArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
