import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", level: "90%", icon: <FaHtml5 size={24} className="text-orange-500" /> },
        { name: "CSS", level: "85%", icon: <FaCss3Alt size={24} className="text-blue-500" /> },
        { name: "JavaScript", level: "80%", icon: <FaJsSquare size={24} className="text-yellow-500" /> },
        { name: "React", level: "75%", icon: <FaReact size={24} className="text-cyan-500" /> },
        { name: "Tailwind CSS", level: "85%", icon: <FaCode size={24} className="text-teal-500" /> },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "70%", icon: <FaNodeJs size={24} className="text-green-500" /> },
        { name: "Express.js", level: "65%", icon: <FaNodeJs size={24} className="text-gray-700" /> },
        { name: "MongoDB", level: "60%", icon: <FaDatabase size={24} className="text-green-700" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: "80%", icon: <FaGitAlt size={24} className="text-red-500" /> },
        { name: "VS Code", level: "90%", icon: <FaGithub size={24} className="text-blue-700" /> },
        { name: "Postman", level: "70%", icon: <FaCode size={24} className="text-orange-600" /> },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handlePagination = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="bg-gray-50 py-10 px-5 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-5">My Skills</h2>
        <p className="text-gray-600 text-lg mb-10">
          Here’s an overview of my technical skills, categorized and displayed visually for better understanding.
        </p>
      </div>

      {/* Grid Layout for Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <div
            key={index}
            className={`card w-full bg-[#FFF3EA] p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer ${currentPage === index ? "scale-105 shadow-xl" : "scale-100"}`}
            onClick={() => handlePagination(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center justify-between text-gray-700 mb-3">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6">
        {skills.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentPage === index ? "bg-orange-500" : "bg-gray-300"}`}
            onClick={() => handlePagination(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
