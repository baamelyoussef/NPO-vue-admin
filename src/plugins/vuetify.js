import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: ["~/assets/sass/variables.scss"],
  treeShake: true,
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#F58840",
        wall: "#0f172a",
        text: "#4f4c56",
        revertText: "#ccc",
        secondary: "#94a3b8",
        accent: "#f2f5f9",
        error: "#ff4c51",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
