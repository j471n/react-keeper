import { func } from "prop-types";
import React from "react";
import { Link, Redirect } from "react-router-dom";
// import data from "../data";
import { AiFillPlusCircle } from "react-icons/ai";

const AddNote = () => {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [redirect, setRedirect] = React.useState(false);

    var data = JSON.parse(localStorage.getItem("keeper"));
    // console.log("data", data.length);
    //     const lastID = data[len - 1].id + 1;
    // console.log(lastID );
    
    function submitButton() {
        if (title === "" || content === "") {
            alert("All Fields Are required.");
        } else {
            let len = data.length;
            let newId = 0;
            if (len === 0) {
                newId = 1;
            } else {
                newId = data[len - 1].id + 1
            }
            let newNote = {
                id: newId,
                heading: title,
                content: content,
            };
            data.push(newNote);

            localStorage.setItem("keeper", JSON.stringify(data));
            setRedirect(true);
        }
    }

    function changeTitle(e) {
        setTitle(e.target.value);
        e.preventDefault;
    }
    function changeContent(e) {
        setContent(e.target.value);
        e.preventDefault;
    }

    return (
        <div className="popup">
            <div className="popup__inner">
                <div className="inner__title">
                    <h2>Add Note</h2>
                    <button
                        type="submit"
                        className="btn"
                        onClick={submitButton}
                    >
                        <AiFillPlusCircle className="plus__icon" />
                    </button>
                </div>
                <input
                    className="add_title"
                    type="text"
                    placeholder="Add Title"
                    value={title}
                    onChange={changeTitle}
                />
                <textarea
                    className="add_content"
                    type="text"
                    placeholder="Add Content"
                    value={content}
                    onChange={changeContent}
                />
            </div>
            {redirect && <Redirect push="/" />}
        </div>
    );
};

export default AddNote;
