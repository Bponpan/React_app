import './App.css';

function Navbar() {
  return (
    <div classname="nav-contener">
      <ul classname="nav">
      <a id="nav-text">Home</a>
      <a id="nav-text">Mood</a>
      <a id="nav-text">Profile</a>
      </ul>

    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>


    </div>
  )
}
