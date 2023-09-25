module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: '#1b1b1b',
        second: '#333333',
        third: '#525252',
        fourth: '#23fff4',
        fifth: '#d3d6db',
        sixth: '#f1f1f1',
      },
      screens: {
        'tablet': '640px',   // Custom breakpoint for tablets
        'pc': '1024px',      // Custom breakpoint for PCs
        'mobile': '375px',   // Custom breakpoint for mobile devices
      },
    },
  },
  plugins: [],
};