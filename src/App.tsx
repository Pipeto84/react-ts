import { NavBar } from "./components/NavBar";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import "./styles/App.css";
import { TaskList } from "./components/TasksList";
import {HomePage} from './pages/HomePage'

function App() {
  return (
    <div className="container-main flex">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/newList" element={<TaskList />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
