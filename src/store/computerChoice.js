import { create } from 'zustand'
import { getComputerChoice } from '../utils/gameLogic';

const useComputerChoiceStore = create((set) => ({
  computerChoice: '',
  setComputerChoice:      () => set({computerChoice: getComputerChoice() }),
}))
export default useComputerChoiceStore;