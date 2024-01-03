import React, {useState, useEffect} from 'react';
import Listitem from "../components/Listitem";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
    let [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        const token = localStorage.getItem('token');
        const headers = new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        });

        try {
            let response = await fetch('server/notes/', { headers: headers });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            let data = await response.json();
            setNotes(data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className="notes-list">
                {notes.map((note, index) =>
                    <Listitem key={index} note={note}/>)}
            </div>
            <AddButton/>
        </div>
    )
}
export default NotesListPage