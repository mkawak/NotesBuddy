import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Frontpage from './pages/Frontpage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import File from "./pages/File";

function App() {
    return (
        <Router>
            <div className="container dark">
                <div className="app">
                    <Routes>
                        <Route path="/" element={<Frontpage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        {/*<Route path="/file" element={<><Header/><File/></>}/>*/}
                        <Route path="/notes" element={<><Header/><NotesListPage/></>}/>
                        <Route path="/notes/:note_number" element={<><Header/><NotePage/></>}/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}

export default App;