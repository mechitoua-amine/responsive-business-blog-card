/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        title: '1.5rem',
        body: '1rem',
        small: '0.8rem'
      },
      colors: {
        bg: '#F2F5F9',
        darkGray: '#111729',
        lightGray: '#677489'
      },
      width: {
        card: '416px'
      },
      height: {
        card: '533px'
      }
    }
  },
  plugins: []
}
