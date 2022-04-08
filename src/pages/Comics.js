import "../assets/CSS/Comics.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Comic from "../components/Comic";

const Comics = ({ apiUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/comics`);
        setData(response.data);
        setIsLoading(false);
        // console.log("response.data 2=>", response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="container">{data && <Comic results={data.results} />}</div>
  );
};
export default Comics;
