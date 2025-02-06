

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information and communication technology",
      institution: "Omnia, Espoon seudun koulutuskuntayhtymä ",
      year: "2022 - Present",
      details: "Completed some course with a focus on software engineering, My SQL and web development.",
    },
    {
      degree: "Bachelor of Science in Electrical and Electronics Engineering",
      institution: "University of Information Technology and Sciences",
      year: "2013 - 2017",
      details: "Completed with major subjects including Communication Theory and Lab, Wireless and satellite communication, Telecommunication engineering, Signal and system.",
    },

  ];

  return (
    <div className="bg-[#FFF3EA] py-10 px-5 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-5">Education</h2>
        <p className="text-gray-600 text-lg mb-10">
          A summary of my academic achievements and qualifications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 mb-6 border-l-4 border-orange-500"
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
            <p className="text-gray-600 italic">{item.institution}</p>
            <p className="text-gray-600">{item.year}</p>
            <p className="text-gray-700 mt-2">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
