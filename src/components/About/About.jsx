import React from "react";
import { Typewriter } from "react-simple-typewriter"; // Typewriter effect
import Tilt from "react-parallax-tilt"; // Tilt effect
import HeroImage from "../../assets/HeroImage.png"; // Profile Image

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-12 font-sans mt-16 md:mt-24 lg:mt-32 text-white"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-6xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shruti Dubey
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight">
            <span className="text-white">I am a</span>
            <Typewriter
              words={[
                "  Software Engineer",
                "   Web Developer",
                "   Tech Enthusiast",
                "   Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate software engineer with a strong foundation in web
            development and a keen interest in exploring new technologies. I
            thrive on challenges and enjoy solving complex problems through
            innovative solutions. My goal is to create impactful applications
            that enhance user experiences and drive positive change.
          </p>

          <a
            href="https://drive.google.com/file/d/1ZJcHY0P6_-OmEB31Z3vgqg6rCpdDjaDk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-8 rounded-full mt-2 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 4px 20px rgba(130, 69, 236, 0.5)",
            }}
          >
            Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:-translate-x-6">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            tiltReverse={true}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[20rem] md:h-[20rem] rounded-full border-4 border-purple-700 overflow-hidden"
          >
            <img
              src={HeroImage}
              alt="Shruti Dubey"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About;
