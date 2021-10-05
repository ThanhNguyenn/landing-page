import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BurgerState {
    value: boolean
}

const initialState : BurgerState = {
    value: false
}

export const BurgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        isclicked: (state) => {
            state.value = !state.value;
        }
    }
})


export const {isclicked} = BurgerSlice.actions

export default BurgerSlice.reducer