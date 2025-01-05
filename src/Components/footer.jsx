const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-5">
        <div className="container mx-auto px-5 md:px-20">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            {/* Brand Section */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Imama's Portfolio</h3>
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div className="flex space-x-5 text-sm">
              <a
                href="https://github.com/Imamasharmeen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sharmeen-akter-imama-6a970620b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  