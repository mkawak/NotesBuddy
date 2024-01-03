import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = () => {
    let {note_number} = useParams();
    let navigate = useNavigate();
    let [note, setNote] = useState(null)
    let [isNoteChanged, setIsNoteChanged] = useState(false);

    useEffect(() => {
        getNote()
    }, [note_number])

    useEffect(() => {
        if (note) {
            setIsNoteChanged(true);
        }
    }, [note]);

    let getNote = async () => {
        if (note_number === 'new') return;
        let token = localStorage.getItem('token');
        let response = await fetch(`/server/notes/${note_number}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        let data = await response.json();
        setNote(data);
    }
    let updateNote = async () => {
        if (isNoteChanged) {
            let token = localStorage.getItem('token');
            fetch(`/server/notes/${note_number}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(note),
            }).then((response) => {
                if (response.ok) {
                    setIsNoteChanged(false);
                }
            });
        }
    };

    let deleteNote = async () => {
        let token = localStorage.getItem('token');
        fetch(`/server/notes/${note_number}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        navigate('/notes');
        console.log("Note deleted");
    }

    let createNote = async () => {
        let token = localStorage.getItem('token');
        fetch(`/server/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(note)
        });
    }

    let handleSubmit = () => {
        if (note_number !== 'new' && !note.body) {
            deleteNote()
        } else if (note_number !== 'new') {
            updateNote()
        } else if (note_number === 'new' && note !== null) {
            createNote()
        }
        navigate('/notes')
    }


    return (
        <div className="note">
            <div className="notes-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit}/>
                </h3>
                {note_number !== 'new' ? (<button onClick={deleteNote}>Delete</button>) :
                    <button onClick={handleSubmit}>Done</button>}
            </div>
            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note?.body}></textarea>
        </div>
    );
};

export default NotePage;
