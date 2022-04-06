import "../assets/CSS/Characters.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Mugshot from "../components/Mugshot";

const Characters = ({ apiUrl }) => {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/characters`);
        setData(response.data);
        setIsLoading(false);
        console.log("response.data=>", response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [apiUrl]);

  // console.log("data==>", data);
  // console.log("apiUrl==>", apiUrl);
  return isLoading ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <div className="container">
      <h1>Characters</h1>

      <Mugshot results={data.results} />
    </div>
  );
};
export default Characters;
