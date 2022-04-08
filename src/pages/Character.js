import "../assets/CSS/Character.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Character = ({ apiUrl }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fectchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/comics/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fectchData();
  }, [apiUrl, id]);
  console.log("data==>", data);
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="container">
      <div className="character-block">
        <div className="character-left">
          <div className="character-name">
            <h1>{data.name}</h1>
          </div>

          <div className="character-pic">
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt="character"
            />
          </div>
        </div>
        <div className="character-right">
          <p>{data.description}</p>
          <div className="middle-text">
            <h2>{data.name} appeared in:</h2>
          </div>

          <div className="comics-scroll">
            {data.comics.map((comic, index) => {
              // console.log("comics==>", comic);
              return (
                <div key={comic._id} className="comic">
                  <div className="comic-sub">
                    <img
                      className="comics-scroll-cover"
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div>
        <h1>{data.name} appeared in:</h1>
      </div>
  
      <div className="comics-scroll">
        {data.comics.map((comic, index) => {
          // console.log("comics==>", comic);
          return (
            <div key={comic._id} className="comic">
              <div className="test-two">
                <img
                  className="comics-scroll-cover"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
export default Character;
