import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./styles.css";

import { useState } from "react";

import { ForData } from "../../types/ForData";

const Before = () => {
  const [ForData, setForData] = useState<ForData>({
    username: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setForData({ ...ForData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="before-container">
        <div className="before-context">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={ForData?.username}
              placeholder="Usuario do Github"
              className="user-search"
              onChange={handleChange}
            />
            <Link to={`/after/${ForData.username}`}>
              <button type="submit">Encontrar</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Before;
