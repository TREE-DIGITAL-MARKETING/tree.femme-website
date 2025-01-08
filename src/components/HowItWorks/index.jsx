import axios from "axios";
import { useState } from "react";
import Success from "../ExternalComponents/Success";
import { Helmet } from "react-helmet";

const formdataFormat = {
  heading: "tree page enquiry",
  name: "",
  email: "",
  phone: "",
  message: "",
};

const HowItWorks = () => {
  const [formData, setFormData] = useState(formdataFormat);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const sendMail = async (Data) => {
    try {
      const response = await axios.post(
        "https://r3cnfgcsbkn2gsvotjss2ocp4a0gwtuj.lambda-url.eu-north-1.on.aws/email/send",
        Data
      );
      if (response.status === 200) {
        setIsSubmitted(true); 
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
      console.error("Failed to submit: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail(formData);
    setFormData(formdataFormat); 
  };
  if (isSubmitted) {
    return <Success />;
  }

     <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google-site-verification" content="OYDP6yGpHq8aVPQSTZuKzFCenb5_QevXVCBUH_xTb3I" />
      <title>How It Works </title>
      </Helmet>
  return (
    <div className="relative bg-black text-white px-4 lg:px-16 py-10 ">
      
      {/* WhatsApp Floating Icon */}
      <div className="fixed right-0 bottom-12 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 w-[60px] sm:w-[60px] md:w-[70px] lg:w-[80px] xl:w-[90px] h-[60px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px] -mr-5 z-10">
  <a href="https://wa.me/9074429360">
    <img
      src="image/whatsapplogo.png"
      alt="whatsapplogo"
      className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] xl:w-[50px] xl:h-[50px] -mt-14"
    />
  </a>
</div>

      {/* Main Section */}
      <main className="relative flex flex-col items-start text-left py-10 lg:py-24 max-w-4xl ml-4 md:ml-12 lg:ml-20 xl:ml-96 -mt-16">
  <div className="w-full">
    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight font-futuraMedium mb-2">
      Amplify your market reach,{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-pink-800">
        let's grow digitally
      </span>
    </h1>
  </div>

  <p className="font-futuraLight text-base sm:text-lg md:text-xl lg:text-2xl mt-4 mb-4 max-w-full lg:max-w-3xl">
    Thanks for your interest in working with us. Please complete the details below, and we'll get back to you within one business day.
  </p>

  {/* Contact Form */}
  <form className="w-full max-w-3xl mt-10 relative z-10" onSubmit={handleSubmit}>
    <p className="mb-6 -mt-6 text-lg font-medium text-gray-400">Required</p>

    <div className="mb-6">
      <label className="block mb-2 text-lg font-medium text-gray-200">
        Name
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-800"> *</span>
      </label>
      <input
        className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-500"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="mb-6">
      <label className="block mb-2 text-lg font-medium text-gray-200">
        Phone No
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-800"> *</span>
      </label>
      <input
        className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-500"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="mb-6">
      <label className="block mb-2 text-lg font-medium text-gray-200">
        Email
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-800"> *</span>
      </label>
      <input
        className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-500"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="mb-8">
      <label className="block mb-2 text-lg font-medium text-gray-200">
        Message
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-800"> *</span>
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-purple-500"
        rows="3"
        required
      />
    </div>

    <button
      type="submit"
      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 px-10 rounded-md text-lg font-semibold"
    >
      SUBMIT
    </button>
  </form>
</main>


      
{/* Last Section */}
<div className="relative text-white h-screen w-full flex items-center justify-center px-4 lg:px-20 -mt-4">
  {/* Main Grid Wrapper */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center max-w-[85%] mx-auto">
    {/* Image Section */}
    <div className="relative">
  <img
    src="./image/round.gif"
    alt="last session img"
    className="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto"
  />
  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-6">
    <h1 className="text-[22px] md:text-[36px] lg:text-[40px] font-[700] leading-tight md:leading-[48px] lg:leading-[52.16px] font-futuraBold">
      DISCUSS A PROJECT
    </h1>
    <p className="font-futuraLightFont text-[14px] md:text-[20px] lg:text-[26px] leading-snug md:leading-[30px] lg:leading-[33.62px] mt-4">
      We know how to mold your project
      <br />
      Let's put the words into action
    </p>
  </div>
</div>

    {/* Button Section */}
    <div className="flex justify-center lg:justify-end">
      <a href="/howitworks">
        <button className="py-3 px-5 w-[200px] sm:w-[200px] md:w-[220px] lg:w-[290px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[65px] rounded-xl border-[3px] border-[#622bba] text-white font-futuraBold text-[12px] sm:text-[12px] md:text-[18px] lg:text-[20px] font-bold leading-[14px] sm:leading-[16px] md:leading-[20px] lg:leading-[24px] mt-4 sm:mt-6 md:mt-8 text-center">
          GET CONSULTATION
        </button>
      </a>
    </div>
  </div>
</div>
</div>
    
    
  );
};

export default HowItWorks;
