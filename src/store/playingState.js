import { create } from 'zustand'

const usePlayStore = create((set) => ({
  playStatus: 'placeholder',
  showPlaceholder:  () => set({ playStatus: "placeholder" }),
  showComputerChoice: () => set({playStatus: "revealing"}),
}))
export default usePlayStore;