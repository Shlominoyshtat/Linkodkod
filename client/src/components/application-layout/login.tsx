import { useNavigate } from "react-router";

export default function Login() {
  let navigate = useNavigate();
  return (
    <>
    <h1 id="logH1">welcome to Log in</h1>
      <input type="text" placeholder="enter your name:" className="input"/>
      <input type="text" placeholder="enter password" className="input"/>
      <button id="btnInput">entry</button>
    </>
  );
}
