import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Note from "./components/Note";
import React from "react";
import "./App.css";
// import data from "./data";

function App() {
    var data = JSON.parse(localStorage.getItem("keeper"));

    if (data === null) {
        localStorage.setItem("keeper", JSON.stringify([]));

        data = JSON.parse(localStorage.getItem("keeper"));
    }
    const [notes, setNotes] = React.useState(data);
    var isEmpty = false;

    if (data.length === 0) {
        isEmpty = true;
    }

    function deleteNote(id) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        localStorage.setItem("keeper", JSON.stringify(newNotes));

        console.log(newNotes.length);
        if (newNotes.length === 0) {
            isEmpty = true;
        }
    }
    return (
        <React.Fragment>
            <Navbar />
            <section className="notes">
                {notes.map((note) => {
                    return (
                        <Note
                            key={note.id}
                            id={note.id}
                            heading={note.heading}
                            content={note.content}
                            deleteNote={deleteNote}
                        ></Note>
                    );
                })}
            </section>
            {isEmpty && <h1 className="empty">No Notes</h1>}
            <Footer />
        </React.Fragment>
    );
}

export default App;
