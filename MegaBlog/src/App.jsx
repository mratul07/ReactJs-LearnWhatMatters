import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    first;
  }, [third]);

  return (
    <>
      <h1>App with appwrite</h1>
    </>
  );
}

export default App;
