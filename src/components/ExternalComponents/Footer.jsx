
function Footer() {
  return (
<footer className="bg-black text-white py-6 -mt-5">
  <div className="container mx-auto px-4">
    {/* Centered Logo, Links, and Social Icons for Smaller Screens */}
    <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:justify-between">
      {/* Logo Section */}
      <div className="flex justify-center md:justify-start">
        <img
          src="./image/treelogonew3.png"
          alt="Logo"
          className="w-[125px] h-[125px] -mt-4 hidden sm:block "
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-4 text-[18px] font-montserratLight font-[400] leading-[27px] md:flex-row md:space-y-0 md:space-x-20 md:-ml-32 mt-4 md:mt-10">
        <a href="/" className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          Home
        </a>
        <a href="/about" className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          About
        </a>
        <a href="/howitworks" className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          How It Works
        </a>
        <a href="/#service" className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          Services
        </a>
        <a href="/#getintouch" className="group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-6 md:mt-0">
        <a href="https://www.linkedin.com/company/tree-information-technology/" className="flex justify-center items-center">
          <img src="./image/linkidinicon.png" className="w-10 h-10" alt="LinkedIn Icon" />
        </a>
        <a href="https://www.instagram.com/tree_information_technology?igsh=bGwzamN5ZHNqb2ls" className="flex justify-center items-center">
          <img src="./image/instaicon.png" className="w-10 h-10" alt="Instagram Icon" />
        </a>
        <a href="https://www.facebook.com/treeinformationtechnologycompany?mibextid=8HI2vyzhxhZ0rFJs" className="flex justify-center items-center">
          <img src="./image/facebookicon.png" className="w-10 h-10" alt="Facebook Icon" />
        </a>
      </div>
    </div>

    {/* Bottom Section */}
    <div
      className="flex flex-col items-center mt-6 pt-4 border-t border-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 text-center md:flex-row md:justify-between md:w-full md:-mt-6"
      style={{
        borderTop: '1px solid',
        borderImageSource: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
        borderImageSlice: 1,
      }}
    >
      <p className="text-[15px] md:text-[19.41px] font-montserratLight font-[400] leading-[23.67px] mt-4 md:mt-0">
        © tree.femme 2024 , All rights reserved.
      </p>
      <a href="#" className="text-[15px] md:text-[19.41px] font-montserratLight font-[400] leading-[23.67px] mt-2 md:mt-0">
        Terms of Use & Privacy Policy
      </a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
