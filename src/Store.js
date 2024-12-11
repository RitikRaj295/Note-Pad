import { configureStore } from '@reduxjs/toolkit'
import noteReducer from  './Redux/NoteSlice'


console.log(noteReducer);

const Store = configureStore({
  reducer: {
    note:noteReducer,
  },
})



export default Store;