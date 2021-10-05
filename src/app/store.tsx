import { configureStore } from '@reduxjs/toolkit'
import BurgerReducer from '../features/Burger/BurgerSlice'

export const store = configureStore({
  reducer: {
    burger: BurgerReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch