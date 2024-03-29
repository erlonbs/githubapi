import { Users } from "../../types/users";
import "./styles.css";

const ResultCard = ({
  login,
  avatar_url,
  html_url,
  followers,
  location,
  name,
}: Users) => {
  return (
    <div className="after-container">
      <section className="after-context">
        <h1>Encontre um perfil Github</h1>
        <input
          type="text"
          placeholder="Usuário Github"
          name="login"
          value={login}
        />
        <button>Encontrar</button>
      </section>
      <section className="result-search">
        <div className="img-result">
          <img src={avatar_url} alt="Imagem do Github" />
        </div>
        <div className="result-form">
          <form className="formulario" action="">
            <h1>Informações</h1>
            <input
              className="perfil-user"
              type="text"
              name="perfil"
              value={html_url}
              placeholder="Perfil"
            />
            <input
              type="text"
              name="seguidores"
              value={followers}
              placeholder="Seguidores"
            />
            <input
              type="text"
              placeholder="Localidade"
              name="localidade"
              value={location}
            />
            <input type="text" placeholder="Nome" name="nome" value={name} />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ResultCard;
