import Post from "./post";
import PostsPage from "./PostsPage";

export default function Main(){
    return(
        <>
        <header>
        <h1>The soldiers' house ✨</h1>
            <img src="https://lh3.googleusercontent.com/drive-storage/AJQWtBOXUVB9l5FxI5zqdrYXbKkRHlSnwyk5yZnuwdSgB44ryCBMtP6VKRH9xeX_TkbZtaPxxAKGS_s-1pR11qpKcer82_rX_RnwFAOwQkXG_xzxJLg=w1920-h889" alt="" />
        </header>
        <main>
            <Post name='cheron cheri'/>
            <PostsPage/>
        </main>
        </>
    )
}