import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";
import { routes, url } from "./routes/routes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<ProtectedRoute isAuthRoute={true} />}>
            <Route path={routes.auth.login} element={<Login />} />
            <Route path={routes.auth.register} element={<Register />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path={routes.home} element={<Home />}></Route>
            <Route path={routes.posts.create} element={<CreatePost />} />
            <Route path={url(routes.posts.edit)} element={<EditPost />} />
            <Route path="*" element={<>404 Not found</>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
