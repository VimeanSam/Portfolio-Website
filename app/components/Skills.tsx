import {
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaBrain,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaCss3Alt,
  FaWindows,
  FaLinux,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiAdobephotoshop,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import style from "./grid.module.css";

export type LanguageKey =
  | "react"
  | "rn"
  | "js"
  | "ts"
  | "py"
  | "html"
  | "java"
  | "node"
  | "next.js"
  | "php"
  | "css"
  | "mongo"
  | "psql"
  | "sql"
  | "ps"
  | "ms"
  | "linux"
  | "nginx"
  | "aws";

interface ConfigItem {
  Icon: IconType;
  color: string;
}

interface LanguageItem {
  key: LanguageKey;
  val: string;
}

interface DatabaseItem {
  key: LanguageKey;
  val: string;
}

interface ToolItem {
  key: LanguageKey;
  val: string;
}

// 2. Type the configuration object using Record map
const languageConfig: Record<LanguageKey, ConfigItem> = {
  react: { Icon: FaReact, color: "#6291f5" },
  rn: { Icon: FaReact, color: "#6291f5" },
  js: { Icon: FaJs, color: "#f7df1e" },
  ts: { Icon: SiTypescript, color: "#3178c6" },
  py: { Icon: FaPython, color: "#3776ab" },
  html: { Icon: FaHtml5, color: "#e34f26" },
  java: { Icon: FaJava, color: "#007396" },
  node: { Icon: FaNodeJs, color: "#339933" },
  "next.js": { Icon: TbBrandNextjs, color: "#ffffff" },
  php: { Icon: FaPhp, color: "#777bb4" },
  css: { Icon: FaCss3Alt, color: "#1572b6" },
  sql: { Icon: FaDatabase, color: "#00758f" }, // Deep teal SQL database cylinder
  mongo: { Icon: SiMongodb, color: "#47a248" }, // Official MongoDB leaf green
  psql: { Icon: SiPostgresql, color: "#4169e1" }, // Official PostgreSQL royal blue
  ps: { Icon: SiAdobephotoshop, color: "#31a8ff" }, // Adobe Photoshop cyan/blue
  ms: { Icon: FaWindows, color: "#0078d4" }, // Microsoft Windows blue
  linux: { Icon: FaLinux, color: "#ffc300" },
  aws: { Icon: FaCloud, color: "#6291f5" },
  nginx: { Icon: FaLaptopCode, color: "#6291f5" },
};

// 3. Type your source array
const languages: LanguageItem[] = [
  { key: "react", val: "React" },
  { key: "rn", val: "React Native" },
  { key: "js", val: "JavaScript" },
  { key: "ts", val: "TypeScript" },
  { key: "py", val: "Python" },
  { key: "html", val: "HTML5" },
  { key: "java", val: "Java" },
  { key: "node", val: "Node.js" },
  { key: "next.js", val: "Next.js" },
  { key: "php", val: "PHP" },
  { key: "css", val: "CSS" },
];

const databases: DatabaseItem[] = [
  { key: "mongo", val: "MongoDB" },
  { key: "psql", val: "PostgreSQL" },
  { key: "sql", val: "SQL" },
];

const tools: ToolItem[] = [
  { key: "ps", val: "Photoshop" },
  { key: "aws", val: "AWS" },
  { key: "ms", val: "Microsoft Office" },
  { key: "nginx", val: "NGINX" },
  { key: "linux", val: "Linux / Ubuntu" },
];

const Skills = () => {
  const parentContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // minHeight: "100dvh",
    marginBottom: "2em",
    flexDirection: "column",
  } as const;

  const cardStyles = {
    padding: "1.5em",
    backgroundColor: "#1e1e1f",
    boxShadow: "0 4px 8px 0 rgba(86, 115, 209, 0.2)",
    transition: "0.3s",
    borderRadius: "20px",
    color: "#a1a1aa",
    border: "1px solid #182755",
    width: "100%",
    maxWidth: "1024px",
    boxSizing: "border-box",
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
            <FaBrain />
          </span>
          <h1 style={{ color: "white", fontSize: "2rem" }}>Skills</h1>
        </div>
        <div style={{ ...cardStyles, marginTop: "1em" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
              <FaCode />
            </span>
            <span className="category">Programming Languages</span>
          </div>

          <div
            className={style["inner-grid-container"]}
            style={{ marginTop: "1em" }}
          >
            {languages.map((lang) => {
              // Cast lang.key as LanguageKey
              const config = languageConfig[lang.key as LanguageKey];

              // This safety check is now highly recommended in case a stray string passes through
              if (!config) return null;

              const { Icon, color } = config;

              return (
                <div key={lang.key} className={style["inner-grid-item"]}>
                  <div style={{ display: "flex", gap: "0.5em" }}>
                    <div style={{ color: color }}>
                      <Icon size={20} />
                    </div>
                    <div style={{ color: "white" }}>{lang.val}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ ...cardStyles, marginTop: "1em" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
              <FaDatabase />
            </span>
            <span className="category">Database Languages</span>
          </div>

          <div
            className={style["inner-grid-container"]}
            style={{ marginTop: "1em" }}
          >
            {databases.map((lang) => {
              // Cast lang.key as LanguageKey
              const config = languageConfig[lang.key as LanguageKey];

              // This safety check is now highly recommended in case a stray string passes through
              if (!config) return null;

              const { Icon, color } = config;

              return (
                <div key={lang.key} className={style["inner-grid-item"]}>
                  <div style={{ display: "flex", gap: "0.5em" }}>
                    <div style={{ color: color }}>
                      <Icon size={20} />
                    </div>
                    <div style={{ color: "white" }}>{lang.val}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ ...cardStyles, marginTop: "1em" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
              <FaTools />
            </span>
            <span className="category">Other Tools</span>
          </div>

          <div
            className={style["inner-grid-container"]}
            style={{ marginTop: "1em" }}
          >
            {tools.map((lang) => {
              // Cast lang.key as LanguageKey
              const config = languageConfig[lang.key as LanguageKey];

              // This safety check is now highly recommended in case a stray string passes through
              if (!config) return null;

              const { Icon, color } = config;

              return (
                <div key={lang.key} className={style["inner-grid-item"]}>
                  <div style={{ display: "flex", gap: "0.5em" }}>
                    <div style={{ color: color }}>
                      <Icon size={20} />
                    </div>
                    <div style={{ color: "white" }}>{lang.val}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
