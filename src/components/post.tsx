import { useState } from "react";

export default function Post(props: any) {
  const [count, setCount] = useState(0);
  const date = new Date().toLocaleString("he-IL");
  return (
    <>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9w9V3UCoL0C83Zn_n8YMhmrUTjrq83SHg6Q&s"
        alt="image to Charon Sheri"
      />
      <figcaption>the account of cheron sheri</figcaption>
      <button onClick={() => setCount((count) => count + 1)}>
        {count} Like
      </button>
      <p>name: {props.name}</p>
      <p>Uploaded at: {date}</p>
    </>
  );
}
