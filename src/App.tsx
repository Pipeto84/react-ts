import { NavBar } from "./components/NavBar";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import "./styles/App.css";
import { TaskList } from "./components/TasksList";

function App() {
  return (
    <div className="container-main flex">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/newList" element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
