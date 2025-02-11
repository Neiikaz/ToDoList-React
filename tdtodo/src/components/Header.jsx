import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <h1>TO DO LIST</h1>
      <div>
        <FontAwesomeIcon icon="fas fa-tasks" />
        <span>2 / 3</span>
      </div>
    </header>
  );
}
export default Header;
