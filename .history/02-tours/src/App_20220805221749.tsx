import React, { useState } from "react";
import Tour, { TourType } from "./components/Tour";

import "./App.css";
import axios, { AxiosResponse } from "axios";

function App() {
  const [tours, setTours] = useState<TourType[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response: AxiosResponse<TourType[]> = await axios(url);
      setTours(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return <h1>thais</h1>;
}

export default App;
