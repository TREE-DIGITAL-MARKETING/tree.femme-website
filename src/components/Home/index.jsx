/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Timeline from "../ExternalComponents/TimeLine";
import Success from "../ExternalComponents/Success"; 
import { Helmet } from "react-helmet";

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
  <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>tree.femme</title>
        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6480P1K4WT"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6480P1K4WT');
          `}
        </script>
      </Helmet>

 {/* Hero Section */}
 <section className="px-6 sm:px-10 md:px-16 lg:pl-40 bg-black py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* WhatsApp Floating Icon */}
  <div className="fixed right-0 bottom-12 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 w-[3.75rem] sm:w-[3.75rem] md:w-[4.375rem] lg:w-[5rem] xl:w-[5.625rem] h-[5.625rem] sm:h-[3.75rem] md:h-[4.375rem] lg:h-[5rem] xl:h-[5.625rem] -mr-5 z-10">
    <a href="https://wa.me/9074429360">
      <img
        src="image/whatsapplogo.png"
        alt="whatsapplogo"
        className="w-[1.875rem] h-[1.875rem] sm:w-[2.188rem] sm:h-[2.188rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.813rem] lg:h-[2.813rem]] xl:w-[3.125rem] xl:h-[3.125rem] -mt-14"
      />
    </a>
  </div>

  {/* Text Content */}
  <div className="text-center lg:text-left flex flex-col justify-center items-center sm:items-center lg:items-start mx-auto lg:mx-20 xl:-mx-72 2xl:mx-6">
    <h1
      className="font-futuraMedium text-[2.25rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[3.25rem] xl:text-[3.75rem] xxl:text-[4rem] font-[500] leading-tight lg:leading-[4.099rem] sm:leading-[3.5rem] md:leading-[3.75rem] xl:leading-[4.235rem] xxl:leading-[4.534rem] mb-4 bg-gradient-to-r from-custom-blue via-custom-purple to-custom-pink text-transparent bg-clip-text whitespace-nowrap"
    >
      A Women-led{" "}
      <span className="block sm:inline text-white sm:bg-transparent sm:text-transparent lg:text-transparent whitespace-nowrap">
        Creative Team
      </span>
    </h1>

    <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:justify-start">
      <div className="font-futuraMedium text-[1.375rem] sm:text-[1.75rem] md:text-[2.125rem] lg:text-[2.5rem] xl:text-[2.75rem] xxl:text-[3rem] font-[400] leading-tight lg:leading-[3.158rem] text-white sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] 2xl:w-[90%] whitespace-nowrap">
        <p>Seamless fusion of Technology &</p>
        <p>Creativity</p>
      </div>
    </div>

    <div className="font-futuraLight font-[300] text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] xl:text-[2rem] 2xl:text-[2.125rem] leading-[1.75rem] sm:leading-[2rem] md:leading-[2.125rem] lg:leading-[2.306rem] xl:leading-[2.5rem] 2xl:leading-[2.625rem] text-white mt-4">
      <p>Helming Future Tech<span className="hidden sm:inline">. . .</span></p>
    </div>

    <div className="flex justify-center lg:hidden mt-4">
      <img
        src="./image/shape.gif"
        alt="right side image"
        className="w-[12.5rem] sm:w-[18.75rem] md:w-[21.875rem] lg:w-[24.678rem] xl:w-[29.765rem] xxl:w-[32.56rem] max-w-full h-auto"
      />
    </div>

    <div
      className="hidden sm:block h-[0.031rem] w-full sm:w-[12.5rem] md:w-[28.125rem] lg:w-[38.438rem] xl:w-[38.438rem] xxl:w-[40.345rem] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mt-4 lg:mt-6"
      style={{
        border: "0.063rem solid",
        borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
        borderImageSlice: 1,
      }}
    ></div>

    <a href="/howitworks">
      <button className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3  lg:px-4 lg:py-2 md:px-6 md:py-3 xl:px-4 xl:py-2 xxl:px-4 xxl:px-2 w-[15.625rem] sm:w-[13.688rem] h-[3.125rem] sm:h-[2.864rem] rounded-full font-montserratLight text-[1rem] sm:text-[1.188rem] font-[400] leading-[1.448rem] bg-black border border-purple-500 text-white transition mt-4 lg:mt-4">
        <span className="flex items-center">
          Get Started
          <img src="./image/right-arrow.png" alt="right arrow image" className="h-[1.165rem] ml-4" />
        </span>
      </button>
    </a>
  </div>

  {/* Right-Side Image */}
  <div className="hidden lg:flex justify-center lg:justify-end">
    <img
      src="./image/shape.gif"
      alt="right side image"
      className="
        w-[9.375rem] sm:w-[12.5rem] md:w-[18.75rem] lg:w-[21.875rem] xl:w-[25rem] 2xl:w-[28.125rem]
        max-w-full
        h-auto
      "
    />
  </div>
</section>



{/* Ticker Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-5 gap-4 -mt-10">
  <div className="flex items-center justify-center col-span-full">
    <img
      src=".\image\ticketsection.gif" 
      alt="Animated GIF description"
      className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-full xxl:max-w-full"
    />
  </div>
</div>

{/* Services Section */}
<section id="service" className="py-12 px-6 sm:px-12 lg:px-20 md:px-28 xl:px-32 xxl:px-32 text-center -mt-10">
  <div
    className="h-[.313rem] w-[3.688rem] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
    style={{
      border: "0.063rem solid",
      borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
      borderImageSlice: 1,
    }}
  ></div>
  <h2 className="font-[700] text-white font-futuraBold text-[2.25rem] sm:text-[2.5rem] lg:text-[3.5rem] md:text-[4.5rem] xl:text-[5.5rem] xxl:text-[6.5 rem] leading-[2.625rem] sm:leading-[3.313rem] lg:leading-[4.564rem] ">
    Services
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 px-4 lg:px-8">
    {/* Card 1 */}
    <div
  className="w-full max-w-[18.75rem] md:max-w-[21.875rem] lg:max-w-[25rem] h-[12.5rem] md:h-[15.625rem] lg:h-[18.75rem] mx-auto p-4 text-white rounded-[0.563rem] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
  style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
>
  <div className="flex justify-center mb-4">
    <img src="./image/card1.png" alt="Web App Development Icon" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
  </div>
  <h3 className="text-[1rem] sm:text-[1.125remx] md:text-[1.25rem] lg:text-[1.375rem] font-[600] font-MontserratRegular text-center">
    Website &amp; Web App <span className="block">Development</span>
  </h3>
  <p className="mt-4 text-[0.875rem] leading-[1rem] md:text-[1rem] md:leading-[1.125rem] lg:text-[1.125rem] lg:leading-[1.25rem] text-center font-montserratLight whitespace-nowrap">Top-notch Web Designs to make your
    <br />
    Brand unique
  </p>
</div>

    {/* Card 2 */}
    <div
  className="w-full max-w-[18.75rem] md:max-w-[21.875rem] lg:max-w-[25rem] h-[12.5rem] md:h-[15.625rem] lg:h-[18.75rem] mx-auto p-6 text-white rounded-[0.563rem] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
  style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
>
  <div className="flex justify-center mb-4">
    <img
      src="./image/card2.png"
      alt="Digital Marketing Icon"
      className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    />
  </div>
  <h3 className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] font-[600] font-MontserratRegular text-center whitespace-nowrap">
    Digital Marketing &amp; Marketing <span className="block">Research Service</span>
  </h3>
  <p className="mt-4 text-[0.875rem] leading-[1rem] md:text-[1rem] md:leading-[0.875rem] lg:text-[0.875rem] lg:leading-[1.375rem] text-center font-montserratLight">
    Strengthen Customer Relationship
  </p>
</div>

    {/* Card 3 */}
    <div
  className="w-full max-w-[18.75rem] md:max-w-[21.875rem] lg:max-w-[25rem] h-[12.5rem] md:h-[15.625rem] lg:h-[18.75rem] mx-auto p-6 text-white rounded-[0.563rem] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
  style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
>
  <div className="flex justify-center mb-4">
    <img
      src="./image/card3.png"
      alt="Digital Marketing Icon"
      className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    />
  </div>
  <h3 className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] font-[600] font-MontserratRegular text-center whitespace-nowrap">
    Creative Graphic <span className="block">Designing</span>
  </h3>
  <p className="mt-4 text-[0.875rem] leading-[1rem] md:text-[1rem] md:leading-[1.125rem] lg:text-[1.125rem] lg:leading-[1.375rem] text-center font-montserratLight">
    Showcase your Brand's personality
  </p>
</div>
    {/* Card 4 */}
    <div
  className="w-full max-w-[18.75rem] md:max-w-[21.875rem] lg:max-w-[25rem] h-[12.5rem] md:h-[15.625rem] lg:h-[18.75rem] mx-auto p-6 text-white rounded-[0.563rem] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
  style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
>
  <div className="flex justify-center mb-4">
    <img
      src="./image/card4.png"
      alt="Digital Marketing Icon"
      className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    />
  </div>
  <h3 className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] font-[600] font-MontserratRegular text-center whitespace-nowrap">
    Motion Graphics &amp; Video <span className="block"> Ads </span>
  </h3>
  <p className="mt-4 text-[0.875rem] leading-[1rem] md:text-[1rem] md:leading-[1.125rem] lg:text-[1.125rem] lg:leading-[1.375rem] text-center font-montserratLight">
    Grab attention instantly</p>
</div>

    {/* Card 5 */}
    <div
  className="w-full max-w-[18.75rem] md:max-w-[21.875rem] lg:max-w-[25rem] h-[12.5rem] md:h-[15.625rem] lg:h-[18.75rem] mx-auto p-6 text-white rounded-[0.563rem] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden border"
  style={{ borderImage: "linear-gradient(to left, #00F0FF, #5200FF, #FF2DF7) 1" }}
>
  <div className="flex justify-center mb-4">
    <img
      src="./image/card5.png"
      alt="Digital Marketing Icon"
      className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
    />
  </div>
  <h3 className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] font-[600] font-MontserratRegular text-center whitespace-nowrap">
    iOS and Android <span className="block"> Development </span>
  </h3>
  <p className="mt-4 text-[0.875rem] leading-[1rem] md:text-[1rem] md:leading-[1.125rem] lg:text-[1.125rem] lg:leading-[1.375rem] text-center font-montserratLight">
    Reach a large global market </p>
</div>
    {/* Logo Card */}
    <div
  className="w-full max-w-[18.75rem] md:max-w-[21.875rem] lg:max-w-[25rem] h-[12.5rem] md:h-[15.625rem] lg:h-[18.75rem] mx-auto p-6 md:p-8 lg:p-10 rounded-[0.563rem] shadow-lg bg-transparent transition-transform transform hover:scale-110 overflow-hidden"
>
  <div className="flex justify-center">
    <img
      src="./image/purple logo.gif"
      alt="Tree Logo"
      className="w-[13.688rem] h-[9.5rem] md:w-[15.625rem] md:h-[10.938rem] lg:w-[18.75rem] lg:h-[12.5rem] object-cover rounded-[0.563rem]"
    />
  </div>

    </div>
  </div>
</section>

  {/* What We Do. */}
  <section className="py-12 text-center px-3 bg-black w-full max-w-[56.813rem] h-auto justify-center gap-12 md:gap-20 lg:gap-60 mx-auto">
  {/* line break */}
  <div className="h-[0.313rem] w-[3.688rem] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
       style={{
              border: "0.063rem solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
  </div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h2 className="font-futuraBold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-snug md:leading-[4.564rem] font-bold mb-4 md:mb-6">
    what we do
  </h2>
  <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] mb-3 sm:mb-4 font-MontserratRegular font-medium leading-relaxed md:leading-[2.461rem] tracking-wide">
    Save hundreds of hours by just collaborating with us.<span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent"> Sounds bizarre?
    </span>
  </p>
  <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] -mt-1 md:-mt-2 font-MontserratRegular font-medium leading-relaxed md:leading-[2.461rem] tracking-wide">
    In a world where technology has a say in everything we do, let's kickstart any <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent"> digital marketing project </span> 
    with utmost easiness. As a women-led team, we always keep looking for new challenges digitally (Because we are confident to get things done!). </p>
  <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] -mt-1 md:-mt-2 font-MontserratRegular font-medium leading-relaxed md:leading-[2.461rem] tracking-wide">
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
          <p className="ml-4 font-futuraLight font-[300] text-[1.25rem] leading-[1.591rem] group-hover:text-white transition-colors duration-300">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/*.......Get in Touch.........*/}
<section id="getintouch" className="flex items-center justify-center min-h-screen sm:h-96 bg-black mt-10 px-3 md:-mt-48">
<div
  className="flex flex-col md:flex-row items-center justify-center text-white text-center p-4 rounded-2xl shadow-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-[62.5rem] h-auto bg-custom-gradient"
> 
    <div className="flex justify-center md:justify-start mb-4 md:mb-0 md:mr-36">
     {/* Image for larger screens */}
  <img
    src="./image/pink cube.gif"
    alt="get in touch image"
    className="hidden sm:block w-[7.5rem] sm:w-[8.75rem] md:w-[10rem] lg:w-[11.25rem] h-auto"
  />
  {/* Image for smaller screens */}
  <img
    src="./image/pinkyy.gif"
    alt="get in touch image mobile"
    className="sm:hidden w-[12.5rem] sm:w-[12.5rem] md:w-[15.625rem] lg:w-[1.25rem] h-auto"
  />
    </div>
    <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-3">
    <p
  className="text-white font-futuraLight break-words text-[3rem] lg:text-[1.875rem] sm:text-[1.25] md:text-[1.5rem] font-[400] leading-tight md:leading-[2rem] lg:leading-[2.375rem] text-center md:text-left">
  To set new benchmarks and to bridge <br className="hidden md:block" /> the digital divide
</p>
      {/* Email Input and Button */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row bg-transparent items-center space-y-2 md:space-y-0 md:space-x-4 -ml-3">
      <div className="px-2 relative w-[17.5rem] sm:w-[15.625rem] md:w-[18.125rem] lg:w-[21.875rem] h-[2.5rem]">
  <div className="rounded-full border-[0.049rem] bg-transparent border-transparent  bg-custom-gradient">
    <div className="inset-[0.063rem] bg-transparent rounded-full">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your work email"
        className="px-4 py-2 rounded-full font-montserratLight text-[0.875rem] sm:text-[0.938rem] md:text-[1rem] lg:text-[1.063rem] leading-[1.25rem] border-none text-white placeholder-white outline-none w-full h-full bg-transparent bg-opacity-35"
        required
      />
    </div>
  </div>
</div>

 <button className="w-[12.5rem] sm:w-[10rem] md:w-[11.25rem] lg:w-[11.875rem] h-[2.5rem] rounded-full font-montserratLight text-[0.875rem] sm:text-[0.938rem] md:text-[1rem] lg:text-[1.063rem] leading-[1.25rem] bg-black border border-purple-500 text-white flex items-center justify-center space-x-2"
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
<section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 -mt-3 md:-mt-48">
  {/* Line Break */}
  <div className="h-[0.313rem] w-[3.688rem] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto -mt-14"
    style={{
      border: "0.063rem solid",
      borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
      borderImageSlice: 1
    }}/>
    <br/>
  <div className="max-w-screen-xl mx-auto">
    <div className="text-center">
      <h2 className="text-white text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.188rem] font-MontserratRegular leading-[1.875rem] sm:leading-[2.5rem] md:leading-[2.813rem] lg:leading-[3.438rem] mb-4 sm:mb-6">
        <span className="font-[400]">Our creatives</span><br /><span className="font-[700]">speak volumes</span>
      </h2>
    </div>

<div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
    {/* Left Section */}
    <div>
      <h3 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] font-[600] leading-[1.75rem] sm:leading-[2.188rem] md:leading-[2.375rem] font-MontserratRegular mb-4">
        Join with the right partner
      </h3>
      <p className="text-[1rem] sm:text-[1.125rem] font-[400] font-MontserratRegular mb-4 sm:mb-6 leading-[1.563rem] sm:leading-[1.875rem]">
        Having clear digital marketing solutions can help your brand thrive in this digital era.
        We are committed to providing strategies that combine data and creativity to scale up your
        digital presence.
      </p>
      <p className="text-[1rem] sm:text-[1.125rem] font-[400] font-MontserratRegular leading-[1.563rem] sm:leading-[1.875rem] mb-4 sm:mb-6">
        We don’t give false 
        <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider"> promises.</span>
        <br />
        For the right solutions, 
        <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider"> let’s meet.</span>
      </p>
      {/* Quote */}
      <div className="flex items-start">
        <div className="h-[5.438rem] w-[0.375rem] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
        <blockquote className=" -mt-3 text-[0.875rem] sm:text-[1rem] font-MontserratRegular font-[300] italic leading-[1.563rem] sm:leading-[1.875rem] mb-4">
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
          <p className="font-MontserratRegular font-[400] text-[0.875rem] sm:text-[1rem] leading-[1.125rem] sm:leading-[1.25rem]">SHEMI SEBIN</p>
          <p className="text-[0.75rem] sm:text-[0.813rem] font-[400] font-MontserratRegular leading-[0.875rem] sm:leading-[1rem]">CEO</p>
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
      <h3 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] font-[600] leading-[1.75rem] sm:leading-[2.188rem] md:leading-[2.375rem] font-MontserratRegular text-right mb-4">
        Deliver exceptional results
      </h3>
      <p className="text-[1rem] sm:text-[1.125rem] font-[400] font-MontserratRegular mb-4 sm:mb-6 leading-[1.563rem] sm:leading-[1.875rem] text-right">
        We are a team that is focused on digital presence and visibility. We are growing each
        day with dedicated professionals from all walks of life. We understand what your brand
        needs and what should be done to catalyze your brand's growth. Great content and
        creation is what we boast upon.
      </p>

      <p className="text-[1rem] sm:text-[1.125rem] font-[400] leading-[1.563rem] sm:leading-[1.875rem] font-MontserratRegular text-right mb-4 sm:mb-6">
        Contact us to have 
        <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider"> profitable results.</span>
      </p>

      {/* Quote */}
      <div className="flex items-start justify-end">
        <div className="h-[5.438rem] w-[0.375rem] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
        <blockquote className=" -mt-3 text-[0.875rem] sm:text-[1rem] font-MontserratRegular font-[300] italic leading-[1.563rem] sm:leading-[1.875rem] text-right">
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
            “The advancement of digital technologies has been instrumental in making women understand their
            power. We would like to align with the theme of International Women’s Day 2024: ‘Invest in women: 
            Accelerate progress.’”
          </span>
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex items-center space-x-4 justify-end mt-2">
        <div>
          <p className="font-MontserratRegular font-[400] text-[0.875rem] sm:text-[1rem] leading-[1.125rem] sm:leading-[1.25rem] text-right ">SHENA SHAJI</p>
          <p className="text-[0.75rem] sm:text-[0.813rem] font-[400] font-MontserratRegular leading-[0.875rem] sm:leading-[1rem]">INTERNATIONAL CLIENT MANAGER</p>
        </div>
        <img src="./image/ShenaShaji.png" alt="Shena Shaji" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
       
       </div>
     </div>
   </div>
  </div>
 </div>
</section>

  {/* Development Process Section */}
 <section className="flex items-center justify-center min-h-screen bg-black -mt-10">  
  <div className="bg-black text-white py-16 mt-24">
  <div className="h-[0.313rem] w-[3.688rem] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto -mt-14"
    style={{
      border: "0.063rem solid",
      borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
      borderImageSlice: 1
    }}/>
    <br/>
      <div className="text-center mb-12">
        <h2 className="text-white text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.188rem] font-MontserratRegular leading-[1.875rem] sm:leading-[2.5rem] md:leading-[2.813rem] lg:leading-[3.438rem] mb-4 sm:mb-6"><span className="font-[400]">How development </span><br/>
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
    src="./image/round.gif"
    alt="last session img"
    className="w-full sm:w-3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto"
  />
  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-6">
    <h1 className="text-[1.375rem] md:text-[2.25rem] lg:text-[2.5rem] font-[700] leading-tight md:leading-[3rem] lg:leading-[3.26rem] font-futuraBold">
      DISCUSS A PROJECT
    </h1>
    <p className="font-futuraLightFont text-[0.875rem] md:text-[1.25rem] lg:text-[1.625rem] leading-snug md:leading-[1.875rem] lg:leading-[2.101rem] mt-4">
      We know how to mold your project
      <br />
      Let's put the words into action
    </p>
  </div>
</div>

    {/* Button Section */}
    <div className="flex justify-center lg:justify-end">
      <a href="/howitworks">
        <button className="py-3 px-5 w-[12.5rem] sm:w-[12.5rem] md:w-[13.75rem] lg:w-[18.125rem] h-[2.5rem] sm:h-[2.813rem] md:h-[3.125rem] lg:h-[4.063] rounded-xl border-[0.188rem] border-[#622bba] text-white font-futuraBold text-[0.75rem] sm:text-[0.75rem] md:text-[1.125rem] lg:text-[1.25rem] font-bold leading-[0.875rem] sm:leading-[1rem] md:leading-[1.25rem] lg:leading-[1.5rem] mt-4 sm:mt-6 md:mt-8 text-center">
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