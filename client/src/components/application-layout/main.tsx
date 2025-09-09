import PostsPage from "../PostsPage";
import Header from "./header";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <PostsPage />
      </main>
    </>
  );
}
