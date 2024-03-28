import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./styles.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-context">
          <h1>Desafio GitHub API</h1>
          <p>DevSuperior - Escola de programação</p>
          <Link to="/before">
            <button>Começar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
