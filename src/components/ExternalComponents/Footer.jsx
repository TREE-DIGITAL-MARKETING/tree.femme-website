
function Footer() {
  return (
<footer className="bg-black text-white py-10 -mt-3 ">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:justify-between"> 
      <div className="flex justify-center lg:justify-start">
        <img
          src="./image/treelogonew3.png"
          alt="Logo"
            className="w-[5.938rem] h-[7.188rem] -mt-4 hidden sm:block md:hidden lg:block"
        />
      </div>

      <div className="flex flex-col items-center space-y-4 text-[18px] font-montserratLight font-[400] leading-[27px] lg:flex-row lg:space-y-0 lg:space-x-20 lg:-ml-32 mt-4 lg:mt-10">
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

      <div className="flex space-x-4 mt-6 lg:mt-0">
        <a href="https://www.linkedin.com/company/102002711/admin/dashboard/" className="flex justify-center items-center">
          <img src="./image/linkidinicon.png" className="w-10 h-10" alt="LinkedIn Icon" />
        </a>
        <a href="https://www.instagram.com/tree_femme/" className="flex justify-center items-center">
          <img src="./image/instaicon.png" className="w-10 h-10" alt="Instagram Icon" />
        </a>
        <a href="https://www.facebook.com/tree.femme" className="flex justify-center items-center">
          <img src="./image/facebookicon.png" className="w-10 h-10" alt="Facebook Icon" />
        </a>
      </div>
    </div>

    <div
      className="flex flex-col items-center mt-6 pt-4 border-t border-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 text-center lg:flex-row lg:justify-between lg:w-full lg:-mt-6"
      style={{
        borderTop: '1px solid',
        borderImageSource: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
        borderImageSlice: 1,
      }}
    >
      <p className="text-[0.938rem] lg:text-[1.213rem] font-montserratLight font-[400] leading-[1.479rem] mt-4 lg:mt-0">
        © tree.femme 2024 , All rights reserved.
      </p>
      <a href="#" className="text-[0.938rem] lg:text-[1.213rem] font-montserratLight font-[400] leading-[1.479rem] mt-2 lg:mt-0">
        Terms of Use & Privacy Policy
      </a>
    </div>
  </div>
</footer>


  );
}

export default Footer;
