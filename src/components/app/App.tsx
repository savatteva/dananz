import { useTranslation } from "react-i18next"
import styles from "./styles.module.css"

function App() {
  const { t } = useTranslation("mainPage");
  return (
    <>
      <p className={styles.test}>{t("test")}</p>
    </>
  )
}

export default App
