import React from "react";
import { Typewriter } from "react-simple-typewriter"; // Typewriter effect for dynamic typing
import Tilt from "react-parallax-tilt"; // Tilt effect for image
import HeroImage from "../../assets/HeroImage.png"; // Import your image

function About() {
  return (
    // Main section with minimal horizontal padding
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-12 font-sans mt-16 md:mt-24 lg:mt-32 text-white"
    >
      {/* Flex container for layout: text on left, image on right (on desktop) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left side: Text content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-6xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shruti Dubey
          </h2>

          {/* Dynamic typing title */}
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

          {/* Short description */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate software engineer with a strong foundation in web
            development and a keen interest in exploring new technologies. I
            thrive on challenges and enjoy solving complex problems through
            innovative solutions. My goal is to create impactful applications
            that enhance user experiences and drive positive change.
          </p>

          {/* Resume Button */}
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

        {/* Right side: Profile image with tilt effect */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            tiltReverse={true}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full border-4 border-purple-700 overflow-hidden"
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
  );
}

export default About;
