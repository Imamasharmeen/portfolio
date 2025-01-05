

const Contacts = () => {
    const handleEmailClick = () => {
      window.location.href = "mailto:your-email@example.com";
    };
  
    const handleWhatsAppClick = () => {
      window.open("https://wa.me/1234567890", "_blank");
    };
  
    return (
      <div className="bg-gray-50 py-10 px-5 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-5">Get In Touch</h2>
          <p className="text-gray-600 text-lg mb-10">
            Feel free to reach out to me via email, phone, or WhatsApp. I’d love to hear from you!
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Email Option */}
          <div
            className="bg-white shadow-md rounded-lg flex items-center justify-center p-5 cursor-pointer hover:shadow-lg transition"
            onClick={handleEmailClick}
          >
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-3">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Email</h3>
              <p className="text-gray-600">imamasharmeen@gmail.com</p>
            </div>
          </div>
  
          {/* Phone Option */}
          <div className="bg-white shadow-md rounded-lg flex items-center justify-center p-5">
            <div className="text-center">
              <div className="text-4xl text-green-500 mb-3">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Phone</h3>
              <p className="text-gray-600">+358417425675</p>
            </div>
          </div>
  
          {/* WhatsApp Option */}
          <div
            className="bg-white shadow-md rounded-lg flex items-center justify-center p-5 cursor-pointer hover:shadow-lg transition"
            onClick={handleWhatsAppClick}
          >
            <div className="text-center">
              <div className="text-4xl text-green-500 mb-3">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">WhatsApp</h3>
              <p className="text-gray-600">+358417425675</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contacts;
  