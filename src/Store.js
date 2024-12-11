import { configureStore } from '@reduxjs/toolkit'
import noteReducer from  './Redux/NoteSlice'

 const Store = configureStore({
  reducer: {
    note:noteReducer,
  },
})



export default Store;