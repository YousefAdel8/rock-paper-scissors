import { create } from 'zustand'

const useComputerChoiceStore = create((set) => ({
  ComputerChoice: '',
  setRock:      () => set({ComputerChoice: "Rock" }),
  setPaper:     () => set({ComputerChoice: "Paper"}),
  setScissors:  () => set({ComputerChoice: "Scissors"}),
}))
export default useComputerChoiceStore;