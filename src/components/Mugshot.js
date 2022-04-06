import "../assets/CSS/Mugshot.css";
import { Link } from "react-router-dom";
const Mugshot = ({ results }) => {
  const noThumbnail =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
  const noExtension = ".gif";
  //   console.log("character==>", characters);
  console.log("results==>", results);
  return (
    <div className="characters-block">
      {results.map((character, index) => {
        if (
          character.thumbnail.path !== noThumbnail &&
          character.thumbnail.extension !== noExtension
        ) {
          return (
            <div key={character._id}>
              <Link to={`/character/${character._id}`}>
                <div className="mugshot-block">
                  <div className="mugshot-sub-block">
                    <div className="left">
                      <div>{character.name}</div>
                      <div className="mugshot-pic-block">
                        <img
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                          alt="character-picture"
                        />
                      </div>
                    </div>
                    <div className="description">
                      {character.description === "" ? (
                        <p className="secret">
                          Unfortunatly we do not have enough information
                          concerning
                          <span> {character.name}</span>'s identity.
                        </p>
                      ) : (
                        <p className="secret">{character.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Mugshot;
