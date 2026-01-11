import { NavBar } from "./components/NavBar";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import "./styles/App.css";
import { TaskList } from "./components/TasksList";
import { HomePage } from "./pages/HomePage";
import { Scheduling } from "./pages/employesPages/EmployeScheduling";
import { New } from "./pages/employesPages/EmployeNew";
import { Edit } from "./pages/employesPages/EmployeEdit";
import { StorePage } from "./pages/StorePage";

function App() {
  return (
    <div className="container-main flex">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/newList" element={<TaskList />} />
          <Route path="/employes" element={<Scheduling />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
