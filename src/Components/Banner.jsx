import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "./Navbar";
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
    <div className=" bg-[#FFF3EA] py-8">
     <Navbar></Navbar>
      <div className="flex w-8/12 mx-auto my-20">
        <div className="w-5/12  ">
          <img src={picture}></img>
        </div>
        <div className="mt-8 w-7/12">
          <p>I'M GLAD YOU'RE HERE.</p>
          <h1 className="text-6xl text-bold py-4">Frontend Developer</h1>
          <p className="text-3xl py-4">
            I design and develop high-end web experiences for design-driven
            companies that value attention to detail.
          </p>
          <div>
            <p className="py-3">FIND WITH ME</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 border rounded-full flex text-center bg-orange-500 p-3">
                {/* GitHub */}
                <a
                  href="https://github.com/Imamasharmeen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-3xl transition duration-300"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="w-10 h-10 border rounded-full flex text-center bg-orange-500 p-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sharmeen-akter-imama-6a970620b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-3xl transition duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div>
              <button
                onClick={handleDownload}
                className="btn text-white bg-orange-500"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
