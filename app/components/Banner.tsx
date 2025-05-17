import { TypeAnimation } from "react-type-animation";

interface BannerProps {
  bannerImage: string;
  greet: string;
}

const Banner: React.FC<BannerProps> = ({ bannerImage, greet }) => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${bannerImage})`, color: "white" }}
    >
      <h1>{greet}</h1>
      <TypeAnimation
        className={"type"}
        sequence={[
          (el) => el?.classList.add("type"),
          // Same substring at the start will only be typed out once, initially
          "I am a web developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I am a software engineer",
          1000,
          "I am an aspiring individual",
          1000,
          "I am Vimean Sam.",
          1000,
          (el) => el?.classList.remove("type"),
        ]}
        wrapper="span"
        speed={50}
        style={{ fontWeight: "600" }}
        repeat={0}
        cursor={false}
      />
      <p>Welcome to my website</p>
    </div>
  );
};

export default Banner;
