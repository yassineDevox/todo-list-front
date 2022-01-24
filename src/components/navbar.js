import { Link } from "react-router-dom";

export default function NavBar() {
    return <nav>
      <ul>
        <li><Link to="/" >Dashboard</Link></li>
        <li><Link to="/checkpoints" >Checkpoints</Link></li>
        <li><Link to="/workshops" >Workshops</Link></li>
      </ul>
    </nav >
  }