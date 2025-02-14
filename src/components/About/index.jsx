import React from 'react';
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
    <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="OYDP6yGpHq8aVPQSTZuKzFCenb5_QevXVCBUH_xTb3I" />
        <title>About Us</title>

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6480P1K4WT"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6480P1K4WT');
          `}
        </script>
      </Helmet>
 <div> 
  {/* Hero Section */}
  <section
  className="relative w-full overflow-hidden text-center py-10 sm:py-10 md:py-20"
>
  {/* Background Image Container */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url(./image/Aboutbg.png)',
    }}
  ></div>

  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col items-center justify-center sm:justify-start sm:mt-[-10vh] px-48 sm:px-8 lg:px-40 xl:px-96 w-full max-w-[90rem] h-auto sm:h-[85vh] md:h-screen md:items-center md:text-center md:pr-0.5 lg:pr-3 xl:pr-5 xxl:pr-5">
    {/* WhatsApp Floating Icon */}
    <div className="fixed right-4 bottom-8 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12  xxl:bottom-14 w-[3.125rem] sm:w-[3.75rem] md:w-[4.375rem] lg:w-[5rem] xl:w-[5.625rem]  xxl:w-[5.896rem] h-[3.125rem] sm:h-[3.75rem] md:h-[4.375rem] lg:h-[5rem] xl:h-[5.625rem] xxl:h-[6rem] z-10">
      <a href="https://wa.me/9074429360">
        <img
          src="image/whatsapplogo.png"
          alt="whatsapplogo"
          className="w-[1.875rem] h-[1.875rem] sm:w-[2.188rem] sm:h-[2.188rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[2.813rem] lg:h-[2.813rem] xl:w-[3.125rem] xl:h-[3.125rem] xxl:w-[3.534rem] xxl:h-[3.565rem]"
        />
      </a>
    </div>

    {/* Heading and Paragraph Container */}
    <div className="mt-auto sm:mt-[2rem] lg:mt-[-2rem] xl:mt-[-4rem] 2xl:mt-[-6rem] md:mt-0 md:flex md:flex-col md:items-center md:justify-center sm:h-[60vh] md:h-[80vh] lg:h-[100vh] xl:h-[120vh] xxl:h-[140vh] ml:auto xl:-ml-72 2xl:-ml-14">
  <h1
    className="text-[1.875rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] font-[500] text-white font-futuraLight leading-[2.5rem] sm:leading-[3.125rem] md:leading-[3.947rem]"
    style={{
      textUnderlinePosition: 'from-font',
      textDecorationSkipInk: 'none',
    }}
  >
    Hello there!
    <br />
    <span
      className="whitespace-nowrap bg-clip-text text-transparent font-[500] text-[1.5rem] sm:text-[1.875rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] 2xl:text-[3rem] font-futuraLight leading-[1.75rem] sm:leading-[2.5rem] md:leading-[2.75rem] lg:leading-[3rem] xl:leading-[3.5rem] xxl:leading-[3.75rem]"
      style={{
        backgroundImage:
          'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      }}
    >
      Leading digitally, for a better future
    </span>
  </h1>
  <p className="mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl xxl:max-w-2xl text-white text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.5rem] 2xl:text-[1.75rem] font-[300] leading-relaxed text-center">
    We are a women-led team of millennials and Gen Z who excel at strategic thinking.
    Give your vision, we will turn it into reality. Let the world notice your brand
    with goosebumps!
  </p>
</div>
</div>


</section>




{/* About Section */}
<section className="px-4 sm:px-8 md:px-12 lg:pl-36 py-8 sm:py-12 flex justify-center mt-12 sm:mt-12 z-10">
  <div
    className="relative py-6 px-6 border-2 rounded-xl max-w-[55.25rem] w-full mx-auto"
    style={{
      borderImageSource: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)',
      borderImageSlice: 1,
    }}
  >
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="relative lg:absolute lg:-ml-36 top-4 md:top-12 md:left-8 mb-4 md:mb-0">
        <img
          src="./image/aboutimage.png"
          alt="Team"
          className="w-[15.625rem] -mt-3 sm:w-[18.75rem] h-[13.75rem] sm:h-[16.563rem] rounded-tl-[0.625rem] rounded-tr-[0rem] rounded-br-[0rem] rounded-bl-[0rem]"
        />
      </div>
      <div className="flex-1 mt-4 md:mt-0 md:ml-52 text-center md:text-left">
        <h2 className="sm:whitespace-nowrap font-futuraMedium font-[500] text-[2.5rem] sm:text-[1.25rem] md:text-[1.875rem] lg:text-[2.5rem] leading-[3.158rem] sm:leading-[3.158rem] md:leading-[3.158rem]  lg:leading-[3.158rem] mb-2 sm:mb-3 md:mb-4">
          Achieve success with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5200FF] to-[#00F0FF]">
            grit & grace
          </span>
        </h2>
        <p className="text-white font-futuraLight text-[1rem] sm:text-[1.125rem] md:text-[1.5rem] lg:text-[1.5rem] font-[300] leading-[1.75rem] sm:leading-[1.75rem] md:leading-[1.909rem] lg:leading-[1.909rem] mb-2 sm:mb-3 md:mb-4">
          We have a knack for understanding your audience as we excel at
          strategic thinking. Our team crafts innovative strategies through our
          data-driven approach. Let’s connect with the audience on a deeper
          level and engage with them authentically for long.
        </p>
        <br />
        <p className="font-futuraMedium text-[1.625rem] sm:text-[1.625rem] md:text-[1.625rem] lg:text-[1.625rem] leading-[2.053rem] sm:leading-[1.75rem] md:leading-[2.053rem] lg:leading-[2.053rem] font-[500]">
          Craft creatives that align with your goals.
        </p>
      </div>
    </div>
  </div>
</section>
       

{/* Last Section */}
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
        <button className="py-3 px-5 w-[12.5rem] sm:w-[12.5rem] md:w-[13.75rem] lg:w-[18.125rem] h-[3.5rem] sm:h-[2.813rem] md:h-[3.125rem] lg:h-[4.063] rounded-xl border-[0.188rem] border-[#622bba] text-white font-futuraBold text-[0.75rem] sm:text-[0.75rem] md:text-[1.125rem] lg:text-[1.25rem] font-bold leading-[0.875rem] sm:leading-[1rem] md:leading-[1.25rem] lg:leading-[1.5rem] mt-4 sm:mt-6 md:mt-8 text-center">
          GET CONSULTATION
        </button>
      </a>
    </div>
  </div>

</div>
</div>                                                                                                                                               
    </>
  );
};

export default About;
