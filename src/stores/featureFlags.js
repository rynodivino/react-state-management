import create from 'zustand'

export const useStore = create(set => ({
  is_logo_enabled: false,
  is_some_other_feature_enabled: false,
  setFeatureFlag: (flag, value) => set(state => {
      if (flag in state && state[flag] !== value) {
          return {
              ...state,
              [flag]: value
          }
      }
      return state
  }),
  removeAllBears: () => set({ bears: 0 })
}))