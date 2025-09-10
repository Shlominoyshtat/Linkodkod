import Header from "./application-layout/header";
import Navbar from "./application-layout/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header>
        <Header />
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}
