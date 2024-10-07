import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import categoryReducer from "./features/category/categorySlice";
import filterReducer from "./features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    category: categoryReducer,
    filters: filterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
