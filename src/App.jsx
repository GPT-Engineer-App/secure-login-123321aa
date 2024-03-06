import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Notes from "./pages/Notes.jsx";
import Contacts from "./pages/Contacts.jsx";
import Calendar from "./pages/Calendar.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      import Notes from "./pages/Notes.jsx"; import Contacts from "./pages/Contacts.jsx"; import Calendar from "./pages/Calendar.jsx"; import Navigation from "./components/Navigation.jsx";
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
