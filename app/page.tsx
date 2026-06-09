"use client";
import { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Lightbox } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/styles.css";
import Navbar from "./components/Navbar/NavBar";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";

export default function Home() {
  const [data, setData] = useState({
    greet: "",
  });

  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<object[]>([]);
  const [animationDuration, setAnimationDuration] = useState(200);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] = useState(100);
  const [scrollToZoom, setScrollToZoom] = useState(false);

  //sections
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  //animation
  const [visibleSections, setVisibleSections] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    tick();
  }, []);

  useEffect(() => {
    if (loaded) {
      // 3. Set up the observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              if (id) {
                // Mark section as visible
                setVisibleSections((prev) => ({ ...prev, [id]: true }));
                // Stop observing this section so animation only runs once
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }, // Triggers when 10% of the section is visible
      );

      // 4. Observe all your section elements
      const targets = [
        aboutRef.current,
        experienceRef.current,
        projectRef.current,
        skillsRef.current,
      ];
      targets.forEach((target) => {
        if (target) observer.observe(target);
      });

      return () => observer.disconnect();
    }
  }, [loaded]);

  const scrollTo = (where: string) => {
    switch (where) {
      case "about":
        if (aboutRef.current) {
          aboutRef.current?.scrollIntoView({
            behavior: "smooth", // Animates the scroll smoothly
            block: "start", // Aligns the top of the element to the top of the viewport
          });
        }
        break;
      case "experience":
        if (experienceRef.current) {
          experienceRef.current?.scrollIntoView({
            behavior: "smooth", // Animates the scroll smoothly
            block: "start", // Aligns the top of the element to the top of the viewport
          });
        }
        break;
      case "projects":
        if (projectRef.current) {
          projectRef.current?.scrollIntoView({
            behavior: "smooth", // Animates the scroll smoothly
            block: "start", // Aligns the top of the element to the top of the viewport
          });
        }
        break;
      case "skills":
        if (skillsRef.current) {
          skillsRef.current?.scrollIntoView({
            behavior: "smooth", // Animates the scroll smoothly
            block: "start", // Aligns the top of the element to the top of the viewport
          });
        }
        break;
    }
  };

  const tick = () => {
    var getdate = new Date();
    var currentTime = getdate.getHours();
    if (currentTime < 12) {
      setData({
        greet: "Good Morning,",
      });
    } else if (currentTime < 18) {
      setData({
        greet: "Good Afternoon,",
      });
    } else {
      setData({
        greet: "Good Evening,",
      });
    }
    setLoaded(true);
  };

  const setSlideshow = (slides: Array<object>) => {
    setOpen(true);
    setSlides(slides);
  };

  console.log(visibleSections);

  return loaded ? (
    <>
      <Navbar scrollTo={scrollTo} />
      <main style={{ marginTop: "68px" }}>
        <section
          id="home"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          className="fade-animation"
        >
          <Welcome greet={data.greet} />
        </section>

        <section
          id="about"
          ref={aboutRef}
          className={visibleSections.about ? "fade-animation" : "hidden"}
        >
          <About />
        </section>

        <section
          id="experience"
          ref={experienceRef}
          className={visibleSections.experience ? "fade-animation" : "hidden"}
        >
          <Experience />
        </section>

        <section
          id="projects"
          ref={projectRef}
          className={visibleSections.projects ? "fade-animation" : "hidden"}
        >
          <Projects setSlideshow={setSlideshow} />
        </section>

        <section
          id="skills"
          ref={skillsRef}
          className={visibleSections.skills ? "fade-animation" : "hidden"}
        >
          <Skills />
        </section>
      </main>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides.map((pic, index) => ({
            src: `/projectPics/${pic}.jpg`,
            height: 771,
            width: 1456,
            srcSet: [
              { src: `/projectPics/${pic}.jpg`, width: 2048, height: 1365 },
            ],
          }))}
          plugins={[Zoom]}
          animation={{ zoom: animationDuration }}
          zoom={{
            maxZoomPixelRatio,
            zoomInMultiplier,
            doubleTapDelay,
            doubleClickDelay,
            doubleClickMaxStops,
            keyboardMoveDistance,
            wheelZoomDistanceFactor,
            pinchZoomDistanceFactor,
            scrollToZoom,
          }}
        />
      )}
      <br></br>
      <footer>
        <br></br>
        <p>
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
