import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
import './styles/Notes.css'
import toast from "react-hot-toast";


const ViewNote = () => {
  const { id } = useParams();

  const allNotes = useSelector((state) => {
    return state.note.notes;
  });

  const note =allNotes.find((n)=> n.id==id) ;
  console.log(note)

  return (
    <div className="container">
      <div className="box-one">
        <input
          type="text"
          placeholder="Enter your Title"
          value={note.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="copyBtn" onClick={() => {
                  navigator.clipboard.writeText(note.content) 
                  toast.success('Copy to Clipboard'); 
}
              }
                ><FaCopy/></button>
      </div>


      <div className="box-two">
        <textarea
          type="text"
          placeholder="Enter your Content......"
          value={note.content}
          disabled
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ViewNote;
