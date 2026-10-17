import { create } from 'zustand'

const usePlayerChoiceStore = create((set) => ({
  playerChoice: '',
  setPaper:     () => set({playerChoice: "Paper"}),
  setRock:      () => set({playerChoice: "Rock" }),
  setScissors:  () => set({playerChoice: "Scissors"}),
}))
export default usePlayerChoiceStore;