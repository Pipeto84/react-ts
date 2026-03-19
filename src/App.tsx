import { NavBar } from "./components/NavBar";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import "./styles/App.css";
import { TaskList } from "./components/TasksList";
import { ErrorUser } from "./components/ErrorUser";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { Scheduling } from "./pages/employesPages/EmployeScheduling";
import { New } from "./pages/employesPages/EmployeNew";
import { Edit } from "./pages/employesPages/EmployeEdit";
import { StorePage } from "./pages/StorePage";
import { CarPage } from "./pages/CarPage";
import { SearchPage } from "./pages/SearchPage";
import { User } from "./pages/User";
import { Map } from "./pages/Map";

function App() {
  return (
    <div className="container-main flex">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/newList" element={<TaskList />} />
          <Route path="/editList/:id" element={<TaskList />} />
          <Route path="/employes" element={<Scheduling />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/car" element={<CarPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/errorUser" element={<ErrorUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<Map />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
