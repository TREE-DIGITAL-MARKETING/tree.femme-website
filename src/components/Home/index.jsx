/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Timeline from "../ExternalComponents/TimeLine";
import Success from "../ExternalComponents/Success"; 

const Home = () => {
  const formdataFormat = {
    heading: "tree get in touch mail",
    email: "",
  };

  const [formData, setFormData] = useState(formdataFormat);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail(formData);
    setFormData(formdataFormat); // Reset form after submission
  };

  useEffect(() => {
    if (window.location.hash === '#service') {
      const element = document.getElementById('service');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (window.location.hash === '#getintouch') {
      const element = document.getElementById('getintouch');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
return (<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tree information Technology</title>

 {/* Hero Section */}
 <section className="px-4 sm:px-8 md:px-12 lg:pl-36 bg-black py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
   
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

  <div className="text-center lg:text-left flex flex-col justify-center lg:w-[1100px]">
  <h1
  className="font-futuraMedium text-[36px] sm:text-[60px] md:text-[60px] lg:text-[52px] font-[500] leading-tight lg:leading-[65.58px] mb-2 whitespace-normal lg:whitespace-nowrap sm:whitespace-normal text-center sm:text-left bg-gradient-to-r from-custom-blue via-custom-purple to-custom-pink text-transparent bg-clip-text"
>
  A Women-led{" "}
  <span className="block sm:inline text-white sm:bg-transparent sm:text-transparent lg:text-transparent">
    Creative Team
  </span>
</h1>
  <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 justify-start items-center">
  <div className="font-futuraMedium text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-[400] leading-tight lg:leading-[50.52px] text-white lg:w-[80%] xl:w-[85%] 2xl:w-[90%]">
    <p className="whitespace-nowrap">Seamless fusion of Technology &</p>
    <p className="whitespace-nowrap">Creativity</p>
  </div>
</div>
  
<br />
<div className="font-futuraLight font-[300] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px] leading-[28px] sm:leading-[32px] md:leading-[34px] lg:leading-[36.9px] xl:leading-[40px] 2xl:leading-[42px] text-white">
  <p>Helming Future Tech<span class="hidden sm:inline">. . .</span></p>
</div>
 
    <div className="flex justify-center lg:hidden mt-4">
      <img 
        src="./image/homepagegif.png" 
        alt="right side image" 
        className="w-[200px] sm:w-[300px] md:w-[350px] max-w-full h-auto"
      />
    </div>

    <div
  className="hidden sm:block h-[0.5px] w-full sm:w-[200px] md:w-[450px] lg:w-[615px] xl:w-[615px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mt-4 lg:mt-6"
  style={{
    border: "1px solid",
    borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
    borderImageSlice: 1,
  }}
></div>

<br/>
<a href="/howitworks">
<button className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 w-[250px] sm:w-[219px] h-[50px] sm:h-[45.82px] rounded-full font-montserratLight text-[16px] sm:text-[19px] font-[400] leading-[23.16px] bg-black border border-purple-500 text-white transition mt-4 lg:mt-4">
  <span className="flex items-center">
    Get Started
    <img src="./image/right-arrow.png" alt="right arrow image" className="h-[18.64px] ml-4" />
  </span>
</button>

</a>
</div>
  <div className="hidden lg:flex justify-center lg:justify-end">
  <img 
    src="./image/homepagegif.png" 
    alt="right side image" 
    className="w-[200px] sm:w-[300px] md:w-[300px] lg:w-[300px] max-w-full h-[300px] -mt-4 lg:-mt-4 ml-12"
  />
</div>
</section>

{/* Ticker Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-10">
  <div className="flex items-center justify-center col-span-full">
    <img
      src=".\image\ticketsection.gif" 
      alt="Animated GIF description"
      className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-full "
    />
  </div>
</div>

{/* Services Section */}
<section id="service" className="py-12 px-6 sm:px-12 lg:px-20 text-center -mt-10">
  <div
    className="h-[5px] w-[59px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
    style={{
      border: "1px solid",
      borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
      borderImageSlice: 1,
    }}
  ></div>
  <h2 className="font-[700] text-white font-futuraBold text-[32px] sm:text-[40px] lg:text-[56px] leading-[42px] sm:leading-[53px] lg:leading-[73.03px] ">
    Services
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 px-4 lg:px-8">
    {/* Card 1 */}
    <div
      className="w-full max-w-[300px] h-[200px] mx-auto p-4 text-white rounded-[9px] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
      style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card1.png" alt="Web App Development Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[16px] sm:text-[18px] font-[600] font-MontserratRegular text-center">
        Website &amp; Web App <span className="block">Development</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[16px] text-center font-montserratLight whitespace-nowrap">
        Top-notch Web Designs to make your<br />Brand unique
      </p>
    </div>
    {/* Card 2 */}
    <div
      className="w-full max-w-[300px] h-[200px] mx-auto p-6 text-white rounded-[9px] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
      style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card2.png" alt="Digital Marketing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[16px] sm:text-18px] font-[600] font-MontserratRegular text-center whitespace-nowrap">
  Digital Marketing &amp; Marketing <span className="block">Research Service</span>
</h3>
      <p className="mt-4 text-[14px] leading-[16px] text-center font-montserratLight">
        Strengthen Customer Relationship
      </p>
    </div>
    {/* Card 3 */}
    <div
      className="w-full max-w-[300px] h-[200px] mx-auto p-6 text-white rounded-[9px] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
      style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card3.png" alt="Graphic Designing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[16px] sm:text-[18px] font-[600] text-center font-MontserratRegular">
        Creative Graphic <span className="block">Designing</span> 
      </h3>
      <p className="mt-4 text-[14px] leading-[16px] text-center font-montserratLight">
        Showcase your Brand's personality
      </p>
    </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 px-4 lg:px-8">
    {/* Card 4 */}
    <div
      className="w-full max-w-[300px] h-[200px] mx-auto p-6 text-white rounded-[9px] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
      style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card4.png" alt="Video Ads Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[16px] sm:text-[18px] font-[600] text-center font-MontserratRegular">
        Motion Graphics &amp; Video <span className="block"> Ads </span>
      </h3>
      <p className="mt-4 text-[14px] leading-[16px] text-center font-montserratLight">Grab attention instantly</p>
    </div>

    {/* Card 5 */}
    <div
      className=" w-full max-w-[300px] h-[200px] mx-auto p-6 text-white rounded-[9px] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
      style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card5.png" alt="iOS and Android Development Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[16px] sm:text-[18px] font-[600] text-center font-MontserratRegular">
        iOS and Android <span className="block">Development</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[16px] text-center font-montserratLight">Reach a large global market</p>
    </div>
    {/* Logo Card */}
    <div
      className="w-full max-w-[300px] h-[200px] mx-auto p-6 rounded-[9px] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden"
    >
      <div className="flex justify-center">
        <img
          src="./image/logoflip.gif"
          alt="Tree Logo"
          className="w-[219px] h-[152px] object-cover rounded-[9px]"
        />
      </div>
    </div>
  </div>
</section>

  {/* What We Do. */}
  <section className="py-12 text-center px-3 bg-black w-full max-w-[909px] h-auto justify-center gap-12 md:gap-20 lg:gap-60 mx-auto">
  {/* line break */}
  <div className="h-[5px] w-[59px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
       style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
  </div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h2 className="font-futuraBold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-snug md:leading-[73.02px] font-bold mb-4 md:mb-6">
    what we do
  </h2>
  <p className="text-base sm:text-lg md:text-xl lg:text-[20px] mb-3 sm:mb-4 font-MontserratRegular font-medium leading-relaxed md:leading-[39.38px] tracking-wide">
    Save hundreds of hours by just collaborating with us.<span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent"> Sounds bizarre?
    </span>
  </p>
  <p className="text-base sm:text-lg md:text-xl lg:text-[20px] -mt-1 md:-mt-2 font-MontserratRegular font-medium leading-relaxed md:leading-[39.38px] tracking-wide">
    In a world where technology has a say in everything we do, let's kickstart any <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent"> digital marketing project </span> 
    with utmost easiness. As a women-led team, we always keep looking for new challenges digitally (Because we are confident to get things done!). </p>
  <p className="text-base sm:text-lg md:text-xl lg:text-[20px] -mt-1 md:-mt-2 font-MontserratRegular font-medium leading-relaxed md:leading-[39.38px] tracking-wide">
    You give us problems, <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent"> we give you solutions</span>. We are here to ensure your brand's consistency and will help you attract your 
    <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent"> ideal prospects
    </span>. </p>
    {/* .............. Diamond session .............. */}
    <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-8 flex-wrap">
      {["Inclusive", "Dynamic", "Tech Savvy", "Curious", "Creative"].map((text) => (
        <div key={text} className="flex flex-row items-center group hover:scale-105 transition-transform duration-300">
          <div className="w-8 h-8">
            <img src="./image/diamond.png" alt="diamond logo" className="transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p className="ml-4 font-futuraLight font-[300] text-[20px] leading-[25.46px] group-hover:text-white transition-colors duration-300">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/*.......Get in Touch.........*/}
<section id="getintouch" className="flex items-center justify-center min-h-screen sm:h-96 bg-black mt-10 px-3 ">
<div
  className="flex flex-col md:flex-row items-center justify-center text-white text-center p-4 rounded-2xl shadow-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-[1000px] h-auto bg-custom-gradient"
> 
    <div className="flex justify-center md:justify-start mb-4 md:mb-0 md:mr-36">
     {/* Image for larger screens */}
  <img
    src="./image/getintouch.png"
    alt="get in touch image"
    className="hidden sm:block w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto"
  />
  {/* Image for smaller screens */}
  <img
    src="./image/getintouchsmallscreenimage.png"
    alt="get in touch image mobile"
    className="sm:hidden w-[200px] sm:w-[200px] md:w-[250px] lg:w-[20px] h-auto"
  />
    </div>
    <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-3">
    <p
  className="text-white font-futuraLight break-words text-[48px] lg:text-[30px] sm:text-[20px] md:text-[24px] font-[400] leading-tight md:leading-[32px] lg:leading-[38px] text-center md:text-left">
  To set new benchmarks and to bridge <br className="hidden md:block" /> the digital divide
</p>
      {/* Email Input and Button */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row bg-transparent items-center space-y-2 md:space-y-0 md:space-x-4 -ml-3">
      <div className="px-2 relative w-[280px] sm:w-[250px] md:w-[290px] lg:w-[350px] h-[40px]">
  <div className="rounded-full border-[0.78px] bg-transparent border-transparent  bg-custom-gradient">
    <div className="inset-[1px] bg-transparent rounded-full">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your work email"
        className="px-4 py-2 rounded-full font-montserratLight text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] border-none text-white placeholder-white outline-none w-full h-full bg-transparent bg-opacity-35"
        required
      />
    </div>
  </div>
</div>

 <button className="w-[200px] sm:w-[160px] md:w-[180px] lg:w-[190px] h-[40px] rounded-full font-montserratLight text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] bg-black border border-purple-500 text-white flex items-center justify-center space-x-2"
  type="submit">
  <span>Get in touch</span>
  <img src="./image/right-arrow.png" alt="right arrow" className="h-4 sm:h-5 lg:h-6 inline-block" />
</button>   
</form>
    </div>
  </div>
  {isSubmitted && <Success />}
</section>

<br/>
{/* Our Creatives */}
<section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 -mt-3">
  {/* Line Break */}
  <div className="h-[5px] w-[59px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto -mt-14"
    style={{
      border: "1px solid",
      borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
      borderImageSlice: 1
    }}/>
    <br/>
  <div className="max-w-screen-xl mx-auto">
    <div className="text-center">
      <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-MontserratRegular leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[55px] mb-4 sm:mb-6">
        <span className="font-[400]">Our creatives</span><br /><span className="font-[700]">speak volumes</span>
      </h2>
    </div>

<div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
    {/* Left Section */}
    <div>
      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-[600] leading-[28px] sm:leading-[35px] md:leading-[38px] font-MontserratRegular mb-4">
        Join with the right partner
      </h3>
      <p className="text-[16px] sm:text-[18px] font-[400] font-MontserratRegular mb-4 sm:mb-6 leading-[25px] sm:leading-[30px]">
        Having clear digital marketing solutions can help your brand thrive in this digital era.
        We are committed to providing strategies that combine data and creativity to scale up your
        digital presence.
      </p>
      <p className="text-[16px] sm:text-[18px] font-[400] font-MontserratRegular leading-[25px] sm:leading-[30px] mb-4 sm:mb-6">
        We don’t give false 
        <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider"> promises.</span>
        <br />
        For the right solutions, 
        <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider"> let’s meet.</span>
      </p>
      {/* Quote */}
      <div className="flex items-start">
        <div className="h-[87px] w-[6px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
        <blockquote className=" -mt-3 text-[14px] sm:text-[16px] font-MontserratRegular font-[300] italic leading-[25px] sm:leading-[30px] mb-4">
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
            “Digital landscape provides ample opportunities for women to grow and excel. Our team of
            women own their space and it is where they find their empowerment by increasing their
            social and economic value.”
          </span>
        </blockquote>
      </div>
      {/* Author */}
      <div className="flex items-center space-x-4">
        <img src="./image/ShemiSebin.png" alt="Shemi Sebin" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
        <div>
          <p className="font-MontserratRegular font-[400] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px]">SHEMI SEBIN</p>
          <p className="text-[12px] sm:text-[13px] font-[400] font-MontserratRegular leading-[14px] sm:leading-[16px]">CEO</p>
        </div>
      </div>
    </div>

    {/* Right Image Section */}
    <div>
      <img src="./image/ourcreativeimg1.png" alt="Women Working" className="rounded-lg shadow-lg w-full" />
    </div>
  </div>

  {/* Bottom Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
    {/* Left Image Section */}
    <div className="order-last lg:order-none">
      <img src="./image/ourcreativeimg2.png" alt="Women Discussion" className="rounded-lg shadow-lg w-full" />
    </div>

    {/* Right Section */}
    <div>
      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-[600] leading-[28px] sm:leading-[35px] md:leading-[38px] font-MontserratRegular text-right mb-4">
        Deliver exceptional results
      </h3>
      <p className="text-[16px] sm:text-[18px] font-[400] font-MontserratRegular mb-4 sm:mb-6 leading-[25px] sm:leading-[30px] text-right">
        We are a team that is focused on digital presence and visibility. We are growing each
        day with dedicated professionals from all walks of life. We understand what your brand
        needs and what should be done to catalyze your brand's growth. Great content and
        creation is what we boast upon.
      </p>

      <p className="text-[16px] sm:text-[18px] font-[400] leading-[25px] sm:leading-[30px] font-MontserratRegular text-right mb-4 sm:mb-6">
        Contact us to have 
        <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider"> profitable results.</span>
      </p>

      {/* Quote */}
      <div className="flex items-start justify-end">
        <div className="h-[87px] w-[6px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
        <blockquote className=" -mt-3 text-[14px] sm:text-[16px] font-MontserratRegular font-[300] italic leading-[25px] sm:leading-[30px] text-right">
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
            “The advancement of digital technologies has been instrumental in making women understand their
            power. We would like to align with the theme of International Women’s Day 2024: ‘Invest in women: 
            Accelerate progress.’”
          </span>
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex items-center space-x-4 justify-end mt-2">
        <img src="./image/ShenaShaji.png" alt="Shena Shaji" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
        <div>
          <p className="font-MontserratRegular font-[400] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px]">SHENA SHAJI</p>
          <p className="text-[12px] sm:text-[13px] font-[400] font-MontserratRegular leading-[14px] sm:leading-[16px]">INTERNATIONAL CLIENT MANAGER</p>
        </div>
       </div>
     </div>
   </div>
  </div>
 </div>
</section>

  {/* Development Process Section */}
 <section className="flex items-center justify-center min-h-screen bg-black -mt-10">  
  <div className="bg-black text-white py-16 mt-24">
    <div className="h-[5px] w-[69px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
      style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
    </div>
    <br/>
      <div className="text-center mb-12">
        <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-MontserratRegular leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[55px] mb-4 sm:mb-6"><span className="font-[400]">How development </span><br/>
        <span className="font-[700]"> through Tree works</span></h2>
      </div>
      <Timeline/>
    </div>
  </section>
  

{/* Last Section */}
<div className="relative text-white h-screen w-full flex items-center justify-center px-4 lg:px-20 -mt-4">
  {/* Main Grid Wrapper */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center max-w-[85%] mx-auto">
    {/* Image Section */}
    <div className="relative">
    <img
  src=".\image\round.gif"
  alt="last session img"/>

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

</>
)
}

export default Home;