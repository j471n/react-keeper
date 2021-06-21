import React from "react";
import { MdDelete } from "react-icons/md";


const Note = ({ id, heading, content, deleteNote }) => {
    return (
        <article className="note">
            <h3 className="note__title">{heading}</h3>
            <p className="note__content">{content}</p>
            <button className="btn delete" onClick={() => deleteNote(id)}>
               <MdDelete className=""/>
            </button>
        </article>
    );
};

export default Note;
