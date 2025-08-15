import { FC, useState } from "react";
import { NavLink } from "react-router";
import styles from "./styles.module.css";

import { useTranslation } from "react-i18next";

import { Button, Typography } from "@components";

const Header: FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const { t } = useTranslation("mainPage");

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <NavLink to="/">
            <img src="/assets/logo.svg" alt="dananz's logo" />
          </NavLink>
          <div className={isOpenBurger ? styles.burgerMenu : styles.rightMenu}>
            <NavLink to="/">
              <Typography text={t("home")} size="size16" />
            </NavLink>
            <NavLink to="/">
              <Typography text={t("about_us")} size="size16" />
            </NavLink>
            <NavLink to="/">
              <Typography text={t("services")} size="size16" />
            </NavLink>
            <NavLink to="/">
              <Button variant="primary">
                <Typography
                  text={t("contact_us")}
                  color="white"
                  size="size16"
                />
              </Button>
            </NavLink>
          </div>

          <div className={styles.mobileMenu}>
            <Button
              variant="solid"
              onClick={() => setIsOpenBurger(!isOpenBurger)}
            >
              {isOpenBurger ? (
                <img src="/assets/svg/close.svg" alt="" />
              ) : (
                <img src="/assets/svg/menu.svg" alt="" />
              )}
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
