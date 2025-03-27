import { Route, Routes } from "react-router";
import styles from "./styles.module.css";
import { MainPage } from "../../pages";
import { Header } from "../header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
