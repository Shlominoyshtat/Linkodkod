import { useRef } from "react";
import { useNavigate } from "react-router";
import { namesArray } from "./nameArray";

export default function Login() {
  let navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)
  return (
    <>
    <h1 id="logH1">welcome to Log in</h1>
      <input type="text" placeholder="enter your name:" className="input" ref={nameRef}/>
      <input type="text" placeholder="enter password" className="input" ref={passRef}/>
      <button id="btnInput" onClick={() =>{ 
        if(namesArray.find(p => p.name === nameRef.current?.value && p.password === passRef.current?.value)){
        navigate('/')}}}>entry</button>
    </>
  );
}
