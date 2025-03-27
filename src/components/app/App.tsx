import { useTranslation } from "react-i18next"
import styles from "./styles.module.css"
import { Typography } from "../typography";

function App() {
  const { t } = useTranslation("mainPage");
  return (
    <>
      <p className={styles.test}>{t("test")}</p>

      <Typography text="jib"/>
    </>
  )
}

export default App
