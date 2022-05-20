import React from "react";
import logo from "../image/logo.svg";
import { Route, Link } from "react-router-dom";

export default function Header({ email, onSignOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />

      <Route exact path="/">
        <div className="header__container">
          <p className="header__email">{email}</p>
          <Link className="header__link" to="/sign-in" onClick={onSignOut}>
            Выйти
          </Link>
        </div>
      </Route>
      <Route exact path="/sign-up">
        <Link className="header__link" to="/sign-in">
          Войти
        </Link>
      </Route>
      <Route exact path="/sign-in">
        <Link className="header__link" to="/sign-up">
          Регистрация
        </Link>
      </Route>
    </header>
  );
}
