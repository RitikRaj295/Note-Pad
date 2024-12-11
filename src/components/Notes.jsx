import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './styles/Notes.css'
import { removeFromNotes } from "../Redux/NoteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import {FaEdit} from 'react-icons/fa';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";





const Notes = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState("");

  const notes = useSelector((state) => state.note.notes);
  
  
  //array.flat() is a flatten method which  basically Flattening an array means converting a nested array (an array of arrays) into a single-level array.
  const flattenNotes=notes.flat()
  const filterNotes = flattenNotes.filter((note) => {
    return(
     note.title?.toLowerCase().includes(searchItem?.toLowerCase()));
  });

  function handleDelete(noteId){
       dispatch(removeFromNotes(noteId));
  }

  return (
    <div className="Notes-Container" >
      <input
       className="searchBar"
        type="text"
        placeholder="Search Title"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <div className="notes-cards" >
         {filterNotes.length > 0 && 
          filterNotes.map((note)=>{
            return(
              <div className="notes-card" key={note.id} > 
              <div className="content">
              <div className="title-box">{note.title.toUpperCase().substring(0,18)
              }</div>
              <div className="content-box">{note.content.toLowerCase().substring(0,60)}</div></div>
              <div className="content-two">
                <div className="Buttons">
                <button>
                  <Link to={`/?noteId=${note?.id}`} className="Link-style"><FaEdit /></Link></button>
                <button>
                  <Link to={`/notes/${note.id}`} className="Link-style"><GrView />
                  </Link>
                </button>
                <button onClick={() => {
                  navigator.clipboard.writeText(note.content) 
                  toast.success('Copy to Clipboard'); 
}
              }
                ><FaCopy/></button>
                <button onClick={() => handleDelete(note?.id)}><RiDeleteBin5Fill/></button>
                
                </div>
                <div className="date">
                 <FaCalendar/> {note.createdAt} 
                </div>
              </div>
          
              </div>
            )
          })

         }
      </div>
    </div>
  );
};

export default Notes;
