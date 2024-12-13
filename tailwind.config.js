/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuraMedium: ['futura medium bt', 'sans-serif'],
        MontserratRegular:['Montserrat-Regular', 'sans-serif'],
        inter:['inter','sans-serif'],
        futuraLight: ['Futura Light BT', 'sans-serif'],
        montserratLight: ['Montserrat Light', 'sans-serif'],
        futuraLightFont: ['Futura Light Font', 'sans-serif'],
        futuraBold: ['futura bold', 'sans-serif'],
        interlight: ['Inter_18pt-Light', 'sans-serif'],
        robotoBold: ['Roboto-Bold', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#00F0FF',
        'custom-purple': '#5200FF',
        'custom-pink': '#FF2DF7',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      },
    },
  },
  variants: {},
  plugins: [],
}
   