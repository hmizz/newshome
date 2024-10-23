import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
const Navbar = () => {
  return (
    <nav class="Navbar">
      <img src={logo} alt="logo" />
      <ul>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">New</a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Trending</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
export default Navbar;
