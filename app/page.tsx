"use client";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  useEffect(() => {
    tick();
  }, []);

  const [data, setData] = useState({
    colorTheme: "",
    variant: "",
    backgroundImg: "",
    greet: "",
  });

  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<object[]>([]);

  const tick = () => {
    var getdate = new Date();
    var currentTime = getdate.getHours();
    if (currentTime < 12) {
      setData({
        colorTheme: "#EADCD1",
        variant: "191,98,4",
        greet: "Good Morning,",
        backgroundImg: "Images/sfmorning.jpg",
      });
    } else if (currentTime < 18) {
      setData({
        colorTheme: "#D5E6F5",
        variant: "4,129,191",
        greet: "Good Afternoon,",
        backgroundImg: "/Images/sfday.jpg",
      });
    } else {
      setData({
        ...data,
        colorTheme: "#282c34",
        variant: "0,32,96",
        greet: "Good Evening,",
        backgroundImg: "/Images/sf.jpg",
      });
    }
    setLoaded(true);
  };

  const setSlideshow = (slides: Array<object>) => {
    setOpen(true);
    setSlides(slides);
  };

  return loaded ? (
    <>
      <Banner bannerImage={data.backgroundImg} greet={data.greet} />
      <div className="portfolioContainer">
        <div className="cardContainer">
          <Info color={data.variant} />
          <div className="column-3">
            <Experience color={data.variant} />
            <br></br>
            <Education color={data.variant} />
            <br></br>
            <Projects
              color={data.variant}
              bg={data.colorTheme}
              setSlideshow={setSlideshow}
            />
          </div>
        </div>
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides.map((pic, index) => ({
            src: `/projectPics/${pic}.jpg`,
          }))}
        />
      )}
      <br></br>
      <footer>
        <br></br>
        <p style={{ fontSize: "19px" }}>
          Simple static portfolio website created by Vimean Sam using Next.js
          TypeScript and powered by Vercel
        </p>
        <br></br>
      </footer>
    </>
  ) : (
    <></>
  );
}
