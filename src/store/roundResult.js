import { create } from 'zustand'

const useRoundResultStore = create((set) => ({
  roundResult: '',
  setWin:      () => set({roundResult: "Win" }),
  setLoss:     () => set({roundResult: "Loss"}),
  setDraw:     () => set({roundResult: "Draw"}),
}))
export default useRoundResultStore;