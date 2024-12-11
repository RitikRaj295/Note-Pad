import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToNotes, updateToNotes } from "../Redux/NoteSlice";
import "./styles/Home.css";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("noteId");
  const dispatch = useDispatch();

  const allNotes = useSelector((state) => {
    return state.note.notes;
  });
  
  useEffect(() => {
    if (noteId) {
      const note = allNotes.flat().find((n) => n.id === noteId);
      console.log(note);
      console.log("AllNotes:",allNotes);
      setTitle(note.title);
      setContent(note.content);
    }
  }, [allNotes.noteId]);

  //here this function allow create a note obj and send it to the slice action as a payload amd some more functionality as below
  // Date.now() returns a timeStamp in millisecond and toString(35) conver the timestamp in string in base-35 string for more readable  the current timestamp is 1700000000000, id will be something like "p4iuyz60".
  // new Date().toISOString() means  The current date and time in ISO 8601 format, which is a standard way of representing date and time;
  function handleCreation() {
    const note = {
      title: title,
      content: content,
      id: noteId || crypto.randomUUID(),
      createdAt: new Date().toLocaleDateString("en-In", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    };


    if(content === ""){
      toast.error("Please Add Content");
      return;
    }

    if (noteId) {
      dispatch(updateToNotes(note));
    } else {
      dispatch(addToNotes(note));
    }

    setTitle("");
    setContent("");
    setSearchParams({});
  }

  return (
    <div className="container">
     
        <div className="box-one">
          <input
            type="text"
            placeholder="Enter your Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button  onClick={handleCreation}>
            {noteId ? <Link to="/notes" className="LinkAtHome">Update Note</Link> : "Create Note"}
          </button>
        </div>

        <div className="box-two">
          <textarea
            type="text"
            placeholder="Enter your Content......"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
   
    </div>
  );
};

export default Home;
