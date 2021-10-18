import { createContext, useContext, useReducer } from 'react'

const FeatureFlagContext = createContext()
const DispatchFeatureFlagContext = createContext()

const featureFlagReducer = (state, action) => {
    if (action.feature in state && state[action.feature] !== action.value) {
        let newState =  {
            ...state,
            [action.feature]: action.value
        }
        return newState
    }

    return state
}

export const FeatureFlagStore = ({ initialState = {}, children }) => {
    const [state, dispatch] = useReducer(featureFlagReducer, initialState)
    return (
        <DispatchFeatureFlagContext.Provider value={dispatch}>
            <FeatureFlagContext.Provider value={state}>
                {children}
            </FeatureFlagContext.Provider>
        </DispatchFeatureFlagContext.Provider>
    )
}

export const useFeatureFlags = () => useContext(FeatureFlagContext)
export const useDispatchFeatureFlag = () => useContext(DispatchFeatureFlagContext)
