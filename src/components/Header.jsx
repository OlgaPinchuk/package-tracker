// Project files
import logo from "../assets/images/logo.png";

export default function Header() {

  return (
    <header className="header container">
      <img className="logo" src={logo} alt="InstaPacket logo" title="InstaPacket logo" />
      <h1>Just Stay Home - <span>We Deliver For You</span></h1>
    </header>
  )
}