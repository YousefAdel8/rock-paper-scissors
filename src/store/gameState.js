import { create } from 'zustand'

const useGameStore = create((set) => ({
  gameStatus: 'ready',
  startGame:  () => set({ gameStatus: "playing" }),
  showResult: () => set({gameStatus: "result"}),
  playAgain: () => set({gameStatus: "ready"}),
}))
export default useGameStore;