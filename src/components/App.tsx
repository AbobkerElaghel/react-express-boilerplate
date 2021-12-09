import { useEffect, useState } from "react";
import { getHelloWorld } from "../API/api";

const App: React.FC = (): JSX.Element => {


  const [state, setstate] = useState<string>('')
  useEffect(() => {
    getHelloWorld()
      .then(({data}) => {
        setstate(data)
      })
      .catch(() => {

      })
  }, [])

  return (
    <main>
      <div>{state}</div>
    </main>
  );
};

export default App;