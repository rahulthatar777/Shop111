/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#130f0c",
          "200": "rgba(19, 15, 12, 0.9)",
          "300": "rgba(255, 255, 255, 0.1)",
          "400": "rgba(19, 15, 12, 0.8)",
        },
        peru: "#d29a5a",
        white: "#fff",
        "dark-400": "#3d454b",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        graphik: "Graphik",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      xs: "12px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      base: "16px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
