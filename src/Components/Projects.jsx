import  { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Newspaper FullStack Website",
      image: "https://as2.ftcdn.net/v2/jpg/06/15/39/73/1000_F_615397357_nG7ZK98NnvHYPzJRMYLvMw2nazNNCPAO.jpg",
      description: " This project is designed to deliver trending news, offer premium features, and ensure a seamless user experience.",
      stack: ["React", "Node.js", "Express.js","MongoDB", "Stripe"],
      challenges: "Handling concurrent users during checkout and optimizing performance.",
      improvements: "Add AI-powered product recommendations.",
      liveLink: "https://newspaper-website-iota.vercel.app/",
      githubLink: "https://github.com/Imamasharmeen/Newspaper-client-side",
    },
    {
      id: 2,
      name: "Group Study App",
      image: "https://www.tigercampus.com.my/wp-content/uploads/2021/12/study-skills-assessments.jpg",
      description: "This assignment involves building a web application for collaborative online group study. ",
      stack: ["React","Node.js", "MongoDB","Express.js", "Tailwind CSS"],
      challenges: "Responsive design for different screen sizes.",
      improvements: "Add a dark mode feature and animations.",
      liveLink: "https://assignment-11-client-rouge.vercel.app/",
      githubLink: "https://github.com/Imamasharmeen/Group-Study-client-side",
    },
    {
      id: 3,
      name: "Crowd Funding",
      image: "https://annamrita.org/wp-content/uploads/2023/02/Why-should-you-donate-to-the-education-of-impoverished-children_.jpg",
      description: "A web-based platform that allows individuals to raise funds for various projects, ideas, or causes by inviting financial contributions from others.",
      stack: ["React", "React-Router-Dom", "Firebase"],
      challenges: "Implementing real-time updates using Firebase.",
      improvements: "Include analytics for task performance.",
      liveLink: "https://tourmaline-liger-2775f4.netlify.app/",
      githubLink: "https://github.com/Imamasharmeen/Crowd-Funding-client-side",
    },
  ];

  return (
    <div id="projects" className="bg-gray-50 py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-5">Projects</h2>
        <p className="text-gray-600 text-lg mb-10">
          Some of my best projects showcasing my skills and creativity.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button
                className="w-full md:w-auto text-white bg-orange-500 mt-4 px-4 py-2 rounded"
                onClick={() => setSelectedProject(project)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-10/12 lg:max-w-4xl p-5 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
        {selectedProject.name}
      </h2>
      
      <img
        src={selectedProject.image}
        alt={selectedProject.name}
        className="h-40 sm:h-52 md:h-60 w-full object-cover rounded-lg mt-4"
      />
      
      <p className="text-gray-700 mt-4 text-sm sm:text-base">
        {selectedProject.description}
      </p>
      
      <h3 className="text-lg font-semibold mt-6">Main Technology Stack:</h3>
      <ul className="list-disc ml-5 text-gray-700 text-sm sm:text-base">
        {selectedProject.stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-6">Challenges:</h3>
      <p className="text-gray-700 text-sm sm:text-base">{selectedProject.challenges}</p>

      <h3 className="text-lg font-semibold mt-6">Improvements:</h3>
      <p className="text-gray-700 text-sm sm:text-base">{selectedProject.improvements}</p>

      <div className="flex flex-wrap justify-center sm:justify-between mt-6 gap-3">
        <a
          href={selectedProject.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto btn bg-orange-500 text-white px-4 py-2 rounded text-center"
        >
          Live Site
        </a>
        <a
          href={selectedProject.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto btn bg-gray-800 text-white px-4 py-2 rounded text-center"
        >
          GitHub Repo
        </a>
      </div>

      {/* Close Button - Always Visible */}
      <div className="flex justify-center mt-6">
        <button
          className="w-full sm:w-auto btn bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setSelectedProject(null)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default Projects;
