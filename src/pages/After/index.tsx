import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Users } from "../../types/users";
import "./styles.css";
import axios from "axios";
import { BASE_URL } from "../../util/request";
import ResultCard from "../../components/ResultCard";
import { useParams } from "react-router-dom";
import { ForData } from "../../types/ForData";

const After = () => {
  const { username } = useParams<ForData>();

  const [usuario, setUsuario] = useState<Users>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${username}`)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error("erro na requisição", error);
      });
  }, [username]);

  return (
    <>
      <Navbar />

      {usuario && (
        <ResultCard
          login={`${usuario.login}`}
          id={`${usuario.id}`}
          avatar_url={usuario.avatar_url}
          html_url={usuario.html_url}
          followers={usuario.followers}
          location={usuario.location}
          name={usuario.name}
        />
      )}
    </>
  );
};

export default After;
