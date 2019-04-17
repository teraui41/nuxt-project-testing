import NuxtConfiguration from "@nuxt/config-edge";
const pkg = require("./package");

const config: NuxtConfiguration = {
  mode: "universal",
  srcDir: "src",
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: "#fff"},

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/bootstrap-vue",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  },

  server: {
    port: 8099,
    host: "0.0.0.0",
  },
};

export default config;
