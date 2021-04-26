import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleGame = {
  state: () => ({
    room: {
      code: "XOJF",
    },
    self: {
      username: "TomSka",
      role: "thinker", //|| "guesser",
      team: {
        name: "red",
        color: {
          faint: "#f4aca4",
          light: "#E36B6B",
          solid: "#D92E42",
          dark: "#98222A",
        },
      },
      enabled: true,
    },
    thinker: {
      cards: {
        "Your current set": [
          "christmas",
          "flat",
          "wool",
          "hamburger",
          "tank",
          "biscuit",
          "cable",
        ],
        "Remaining cards": [
          "christmas",
          "flat",
          "wool",
          "hamburger",
          "tank",
          "biscuit",
          "cable",
          "christmas",
          "flat",
          "wool",
          "hamburger",
          "tank",
          "biscuit",
          "cable",
          "christmas",
          "flat",
          "wool",
          "hamburger",
          "tank",
          "biscuit",
          "cable",
          "christmas",
          "flat",
          "wool",
          "hamburger",
          "tank",
          "biscuit",
          "cable",
        ],
      },
    },
  }),
  mutations: {},
  actions: {},
  getters: {},
};

const moduleForm = {
  state: () => ({
    global: {
      code: {
        value: "",
      },
    },
    login: {
      username: {
        value: "",
      },
      team: {
        value: "",
        options: [
          { name: "red", color: "red" },
          { name: "orange", color: "orange" },
          { name: "blue", color: "blue" },
          { name: "red", color: "red" },
          { name: "orange", color: "orange" },
          { name: "blue", color: "blue" },
          { name: "red", color: "red" },
          { name: "orange", color: "orange" },
          { name: "blue", color: "blue" },
        ],
      },
      role: {
        value: "",
        options: [
          { name: "thinker", color: "white" },
          { name: "guesser", color: "white" },
        ],
      },
    },
    setup: {
      teams: {
        value: "",
      },
      cardType: {
        options: [
          { name: "Word", color: "white" },
          { name: "Picture", color: "white" },
        ],
        value: "",
      },
      boardSize: {
        options: [
          { name: "5x5", color: "white" },
          { name: "4x5", color: "white" },
        ],
        value: "",
      },
      deck: {
        options: [
          {
            pack: "Official",
            decks: ["Original", "Duet", "Deep Undercover [MA]"],
          },
          {
            pack: "Exclusive",
            decks: ["Semi-Official", "Christmas", "Christmas Emoji"],
          },
          {
            pack: "Brightful",
            decks: ["Easy", "Medium", "Moderate/random", "Hard"],
          },
          { pack: "RandomLists", decks: ["All"] },
        ],
        value: [],
      },
    },
  }),
  mutations: {
    setLoginField(state, { field, value }) {
      state.login[field].value = value;
    },
    setGlobalField(state, { field, value }) {
      state.global[field].value = value;
    },
    setSetupField(state, { field, value }) {
      state.setup[field].value = value;
    },
  },
  actions: {},
};

export default new Vuex.Store({
  modules: {
    game: {
      namespaced: true,
      ...moduleGame,
    },
    form: {
      namespaced: true,
      ...moduleForm,
    },
  },
});
