import { configureStore } from '@reduxjs/toolkit'
import noteReducer from  './Redux/NoteSlice'

// Comment 
console.log(noteReducer);

const Store = configureStore({
  reducer: {
    note:noteReducer,
  },
})



export default Store;