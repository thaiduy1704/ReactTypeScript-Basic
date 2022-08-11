import React, { useState } from "react";
import Tour, { TourType } from "./components/Tour";

import "./App.css";

function App() {
  const [tours, setTours] = useState<TourType[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);


  const fetchData =async (ur:type) => {
    
  }

  return <h1>thais</h1>;
}

export default App;
