import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const useDataStore = defineStore("pautas", {
  state: () => ({
    pautas: [],
    coga: [],
    heuristics: [],
  }),
  actions: {
    async fetchPautas() {
      const querySnapshot = await getDocs(collection(db, "PautasWCAG"));
      this.pautas = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },

    async fetchCoga() {
      const querySnapshot = await getDocs(collection(db, "COGA"));
      this.coga = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },

    async fetchHeuristics() {
      const querySnapshot = await getDocs(collection(db, "Heuristics"));
      this.heuristics = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },

    async fetchAll() {
      await Promise.all([this.fetchPautas(), this.fetchCoga(), this.fetchHeuristics()]);
      console.log("Todos los datos cargados.");
    }
  }
});

