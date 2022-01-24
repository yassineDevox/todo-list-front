import { Link } from "react-router-dom";

export default function NavBar() {
    return <nav className="border p-3">
      <ul>
        <li><Link to="/" >Dashboard</Link></li>
        <li><Link to="/checkpoints" >Checkpoints</Link></li>
        <li><Link to="/workshops" >Workshops</Link></li>
        <li><Link to="/store" >Store</Link></li>
      </ul>
    </nav >
  }