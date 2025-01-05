import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "A Crowd Funding Application",
      image: "https://www.taxslayer.com/blog/wp-content/uploads/2024/03/special-rules-tax-deduction-donating-clothing-household-items-cars-boats.jpg",
      description: "An innovative platform empowering individuals and organizations to raise funds for impactful projects and causes.",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      challenges: "Handling concurrent users during checkout and optimizing performance.",
      improvements: "Add AI-powered product recommendations.",
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/yourusername/ecommerce",
    },
    {
      id: 2,
      name: "Coffee Book App",
      image: "https://tesseractry.fi/wp-content/uploads/2024/01/coffee-brain-caffeine-neuroscincces.webp",
      description: "A digital space for coffee enthusiasts to explore, learn, and track their favorite brews.",
      stack: ["React", "Tailwind CSS"],
      challenges: "Responsive design for different screen sizes.",
      improvements: "Add a dark mode feature and animations.",
      liveLink: "https://portfolio-demo.com",
      githubLink: "https://github.com/yourusername/portfolio",
    },
    {
      id: 3,
      name: "Job portal",
      image: "https://news.umanitoba.ca/wp-content/uploads/2021/11/Career-Month-3-UM-Today-.png",
      description: "A task management tool with drag-and-drop functionality.",
      stack: ["React", "Redux", "Firebase"],
      challenges: "Implementing real-time updates using Firebase.",
      improvements: "Include analytics for task performance.",
      liveLink: "https://taskmanager-demo.com",
      githubLink: "https://github.com/yourusername/task-manager",
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
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-5 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800">{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="h-60 w-full object-cover rounded-lg mt-4"
            />
            <p className="text-gray-700 mt-4">{selectedProject.description}</p>
            <h3 className="text-lg font-semibold mt-6">Main Technology Stack:</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {selectedProject.stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-6">Challenges:</h3>
            <p className="text-gray-700">{selectedProject.challenges}</p>
            <h3 className="text-lg font-semibold mt-6">Improvements:</h3>
            <p className="text-gray-700">{selectedProject.improvements}</p>
            <div className="flex flex-wrap justify-between mt-6 gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn bg-orange-500 text-white px-4 py-2 rounded"
              >
                Live Site
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn bg-gray-800 text-white px-4 py-2 rounded"
              >
                GitHub Repo
              </a>
            </div>
            <button
              className="w-full sm:w-auto btn bg-red-500 text-white mt-6 px-4 py-2 rounded"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
