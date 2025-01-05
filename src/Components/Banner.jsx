import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import picture from "../assets/Imama.png";

const Banner = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 via-white to-[#FFF3EA] py-16">
      <div className="flex flex-col md:flex-row w-10/12 mx-auto items-center md:items-start gap-12">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-orange-300">
          <img
            src={picture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Text & Buttons */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg text-orange-500 font-semibold tracking-wider">
            I'M GLAD YOU'RE HERE.
          </p>
          <h1 className="text-4xl md:text-6xl font-bold py-4 text-gray-800 leading-tight">
            Full Stack Developer
          </h1>
          <p className="text-lg md:text-2xl py-4 text-gray-600">
          With a blend of creativity and technical expertise, I specialize in building scalable, dynamic, and beautiful digital solutions. Let's create something amazing together!
          </p>

          {/* Social Links */}
          <div>
            <p className="py-3 text-gray-500 text-sm font-medium">FIND ME ON</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/Imamasharmeen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharmeen-akter-imama-6a970620b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="mt-6">
            <button
              onClick={handleDownload}
              className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
