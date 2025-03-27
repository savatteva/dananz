import { Route, Routes } from "react-router";
import styles from "./styles.module.css";
import { MainPage } from "../../pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
