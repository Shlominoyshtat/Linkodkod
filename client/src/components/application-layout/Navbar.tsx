import { useNavigate } from "react-router"

export default function Navbar() {
    let navigate = useNavigate()
  return (
    <>
      <button className='link' onClick={() => navigate('/')}>home</button>
      <button className='link' onClick={() => navigate('/login')}>Login</button>
      <button className='link' onClick={() => navigate('/post')}>get post</button>
    </>
  );
}

