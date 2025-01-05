

const Navbar = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: "smooth",
      });
    }
  };

  return (
<div className="sticky top-0 z-50 bg-[#FFF3EA] py-10">
<div className="  border rounded-full px-5 py-1 md:w-9/12 lg:w-6/12 mx-auto bg-[#FFFFFF] text-bold shadow-md ">
      <div className="navbar bg-[#FFFFFF]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div>Imama</div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#262626] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => handleScrollTo("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => handleScrollTo("about-me")}>About Me</a>
              </li>
              <li>
                <a onClick={() => handleScrollTo("projects")}>Projects</a>
              </li>
            </ul>
          </div>
          <a className="text-xl hidden lg:flex">Imama</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={() => handleScrollTo("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleScrollTo("about-me")}>About Me</a>
            </li>
            <li>
              <a onClick={() => handleScrollTo("projects")}>Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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
  );
};

export default Navbar;
