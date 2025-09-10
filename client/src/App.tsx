import "./style/post.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./components/application-layout/main";
import Layout from "./components/Layout";
import Navbar from "./components/application-layout/Navbar.tsx";
import Login from "./components/application-layout/login.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/post" element={<Navbar />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
