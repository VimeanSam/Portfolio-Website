import { TypeAnimation } from "react-type-animation";
import styles from "./font.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";

interface MyComponentProps {
  greet: string;
}
export default function Welcome({ greet }: MyComponentProps) {
  const container = {
    display: "flex",
    color: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100dvh",
    flex: 1,
  } as const;

  const buttonStyle = {
    padding: "0.45em 1em",
    cursor: "pointer",
    alignSelf: "center",
    textAlign: "center",
    borderRadius: "6px",
    fontWeight: "500",
    backgroundColor: "#6291f5",
    fontSize: "1em",
    borderColor: "#6291f5",
    color: "white",
  } as const;

  const handleResume = () => {
    window.open(
      "/Files/vimeansamresume2026.pdf",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div style={container}>
      <span className={styles.big}>{greet}</span>
      <span className={styles.big}>I am</span>
      <span className={styles.jumbo}>Vimean Sam</span>
      <TypeAnimation
        className={`${styles.medium} ${styles.typer}`}
        sequence={[
          (el) => el?.classList.add("type"),
          "Creative",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Aspiring",
          1000,
          "Versatile",
          1000,
          "Full Stack Engineer",
          1000,
          (el) => el?.classList.remove("type"),
        ]}
        wrapper="span"
        speed={50}
        style={{ fontWeight: "600" }}
        repeat={0}
        cursor={false}
      />

      <div style={{ marginTop: "1em" }}>
        <button style={buttonStyle} onClick={handleResume}>
          <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
            <FaCloudDownloadAlt />
            <div>View Resume</div>
          </div>
        </button>
      </div>
    </div>
  );
}
