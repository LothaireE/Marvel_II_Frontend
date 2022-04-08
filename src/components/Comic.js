import "../assets/CSS/Comic.css";

const Comic = ({ results }) => {
  const noThumbnail =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

  return (
    <div className="comics-block">
      {results.map((comic, index) => {
        console.log("comic==>", comic);
        <div key={index}></div>;
        if (comic.thumbnail.path !== noThumbnail) {
          return (
            <div key={comic._id}>
              <div className="comic-block">
                <img
                  className="comic-cover"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt="comic"
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Comic;
