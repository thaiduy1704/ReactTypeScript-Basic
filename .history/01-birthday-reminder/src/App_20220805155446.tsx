import { useState } from "react";
import { Card } from "./components/Card";
import { data } from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return <Card />;
}

export default App;
