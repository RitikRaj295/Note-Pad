import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const initialState = {
    notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes")) : []
  }

// Slice is basically the collection of Reducer in which there are actions, initial state of state and the name of slice


export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
   addToNotes: (state,actions)=>{
        // add a condition for alreay exist noteId cannot create the same
        const note = actions.payload;
        state.notes.push(note);
        console.log("notes"+JSON.stringify(state.notes));
        localStorage.setItem("notes",JSON.stringify(state.notes))
        toast.success("Your Note is added")
   },
   updateToNotes: (state,actions)=>{
     const note=actions.payload;
     const index= state.notes.findIndex((item)=> item.id==item.id)
     if(index>=0){
      state.notes[index]=note;
      localStorage.setItem('notes',JSON.stringify(state.notes))  
      toast.success('note updated');   }
   },
   resetAllNotes: (state,actions)=>{
    state.notes=[];
    localStorage.clear('notes')
    toast.success('Notes Reset Successful');
    

   },
   removeFromNotes: (state,actions)=>{
       const noteId = actions.payload;

       const index= state.notes.findIndex((item)=> item.id==noteId)
       if(index >=0 ){
        state.notes.splice(index,1);
        localStorage.setItem('notes',JSON.stringify(state.notes));
        toast.success('Note has been deleted');
       }
   },
  },
})

export const { addToNotes, updateToNotes, resetAllNotes,removeFromNotes} = noteSlice.actions


export default noteSlice.reducer