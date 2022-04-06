import "../assets/CSS/Comics.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Comics = ({ apiUrl }) => {
  console.log(apiUrl);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/comics`);
        setData(response.data);
        setIsLoading(false);
        console.log("response.data=>", response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="container">
      <h1>Comics</h1>
    </div>
  );
};
export default Comics;
