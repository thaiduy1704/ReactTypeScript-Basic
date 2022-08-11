import { useState } from "react";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const clearPeople = () => {
    setPeople([]);
  };

  const restartPeople = () => {
    setPeople(data);
  };

  return (
    <Card
      people={people}
      clearPeople={clearPeople}
      restartPeople={restartPeople}
    />
  );
}

export default App;
