import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [gradient, setGradient] = useState('bg-gradient-to-r from-purple-600 to-cyan-400');
  const [menuOpen, setMenuOpen] = useState(false);

  const changeGradient = (text) => {
    let newGradient;
    switch (text) {
      case 'Home':
        newGradient = 'bg-gradient-to-r from-purple-600 to-cyan-400';
        break;
      case 'About':
        newGradient = 'bg-gradient-to-r from-orange-500 to-yellow-400';
        break;
      case 'How It Works':
        newGradient = 'bg-gradient-to-r from-green-500 to-green-700';
        break;
      case 'Services':
        newGradient = 'bg-gradient-to-r from-blue-500 to-blue-800';
        break;
      case 'Contact':
        newGradient = 'bg-gradient-to-r from-purple-700 to-purple-900';
        break;
      default:
        newGradient = 'bg-gradient-to-r from-purple-600 to-cyan-400';
    }
    setGradient(newGradient);
  };

  return (
    <div className='bg-black flex justify-between items-center px-4 -ml-5 bg-transparent' >
      {/* Logo */}
      <div className="text-2xl font-bold ml-2">
        <img
          src={'./image/treelogonew3.png'}
          alt="Company Logo"
          className="w-auto h-24 object-contain sm:ml-5" 
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center ml-auto">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX className="text-white text-3xl" /> : <HiMenu className="text-white text-3xl" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div
        className={"p-[1px] w-[625px] h-[43px] rounded-[20px] mr-16 hidden lg:flex"}
        style={{
          background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
        }}
      >
        <nav
          className="flex justify-normal items-center p-[15px] bg-black  text-white w-full h-full rounded-[19px]"
          style={{
            backgroundClip: "padding-box",
          }}
        >
          <ul className="flex space-x-14 ml-2 font-MontserratRegular font-[700] text-[18px] leading-[27px]">
            <li>
              <a
                href="/"
                className={`group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 font-inter text-[18px] font-[700] leading-[27px] ${
                  window.location.pathname === '/' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400' : 'text-white'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`font-inter text-[18px] font-[700] leading-[27px]  group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
                  window.location.pathname === '/about' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400' : 'text-white'
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/howitworks"
                className={`font-inter text-[18px] font-[700] leading-[27px]  group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
                  window.location.pathname === '/howitworks' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400' : 'text-white'
                }`}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="/#service"
                className={`font-inter text-[18px] font-[700] leading-[27px] group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
                  window.location.pathname === '/service' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400' : 'text-white'
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#getintouch"
                className={`font-inter text-[18px] font-[700] leading-[27px] group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
                  window.location.pathname === '/contact' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400' : 'text-white'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contact Button for Desktop */}
      <a
        href="/howitworks"
        className=" font-inter text-[14px] leading-[14px] font-[600] group text-white hidden lg:block"
      >
        <button className="px-4 py-2 w-[124px] h-[42px] bg-[linear-gradient(225deg,_#6675F7_0%,_#57007B_100%)] hover:bg-[linear-gradient(225deg,_#7E8BFF_0%,_#6A008B_100%)] text-white font-[600] font-MontserratRegular text-[14px] leading-[14px] rounded-lg mr-16">
          Contact Us
        </button>
      </a>

      {/* Mobile Menu */}
      <div
  className={`${
    menuOpen ? 'flex' : 'hidden'
  } fixed inset-0 z-50 flex flex-col justify-start items-center bg-black bg-opacity-100 backdrop-blur-md p-4`}
>
  {/* Company Logo */}
  <div className="absolute top-4 left-4">
    <img src="./image/treelogonew3.png" alt="Company Logo" className="h-12 w-auto" />
  </div>

  {/* Close Button */}
  <button
    className="absolute top-4 right-4 text-white p-2 rounded-full shadow-lg"
    onClick={() => {
      setMenuOpen(false); // Close the menu
      document.body.classList.remove('overflow-hidden'); // Re-enable scrolling
    }}
  >
    ✕
  </button>

  {/* Menu Items */}
  <ul className="flex flex-col items-center space-y-8 mt-16 font-inter font-[700] text-[18px] leading-[27px] text-white sm:flex-row sm:space-y-0 sm:space-x-8 sm:mt-8">
  <li>
    <a
      href="/"
      className={`group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 font-inter text-[18px] font-[700] leading-[27px] ${
        window.location.pathname === '/'
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400'
          : 'text-white'
      }`}>
      Home
    </a>
  </li>
  <li>
    <a
      href="/about"
      className={`font-inter text-[18px] font-[700] leading-[27px] group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
        window.location.pathname === '/about'
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400'
          : 'text-white'
      }`}>
      About
    </a>
  </li>
  <li>
    <a
      href="/howitworks"
      className={`font-inter text-[18px] font-[700] leading-[27px] group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
        window.location.pathname === '/howitworks'
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400'
          : 'text-white'
      }`}>
      How It Works
    </a>
  </li>
  <li>
    <a
      href="/#service"
      className={`font-inter text-[18px] font-[700] leading-[27px] group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
        window.location.pathname === '/service'
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400'
          : 'text-white'
      }`}>
      <button onClick={() => setMenuOpen(false)}>Services</button>
    </a>
  </li>
  <li>
    <a
      href="/#getintouch"
      className={`font-inter text-[18px] font-[700] leading-[27px] group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 ${
        window.location.pathname === '/contact'
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400'
          : 'text-white'
      }`}>
      <button onClick={() => setMenuOpen(false)}>Contact</button>
    </a>
  </li>
</ul>


  {/* Button */}
  <a href="/howitworks">
  <button className="mt-8 px-8 py-2 bg-gradient-to-r from-purple-950 to-blue-600 text-white font-inter font-bold text-[11px] leading-[14px] rounded-full shadow-lg hover:scale-105 transition-transform ">
    Send request
  </button>
  </a>

  {/* Contact Details */}
  <div className="mt-12 text-center mb-12">
    <p className="text-gray-300 text-[14px] font-MontserratRegular mb-2">+91-9074429360</p>
    <p className="text-gray-300 text-[14px] font-MontserratRegular">info@tree.it.com</p>
  </div>

  {/* Separator */}
  <div
    className="h-[0.5px] w-full sm:w-[200px] md:w-[450px] lg:w-[615px] xl:w-[615px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 lg:mt-6"
    style={{
      border: '1px solid',
      borderImageSource: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      borderImageSlice: 1,
    }}
  ></div>

  {/* Social Links */}
  <div className="w-full flex justify-between pt-4">
    <a href="https://wa.me/9074429360" className="text-gray-500 text-[14px] font-inter ml-20">
      WhatsApp
    </a>
    <a
      href="https://www.instagram.com/tree_femme/"
      className="text-gray-500 text-[14px] font-inter mr-20"
    >
      Instagram
    </a>
  </div>
</div>

</div>
  );
}

export default Navbar;
