import { create } from 'zustand'

const useScoreResultStore = create((set) => ({
  scoreResult: 0,
  setWin:   () => set((state)=>({scoreResult: state.scoreResult+1 })),
  setLoss:  () => set((state)=>({scoreResult: state.scoreResult-1 })),
  setDraw:  () => set((state)=>({scoreResult: state.scoreResult })),
}))
export default useScoreResultStore;