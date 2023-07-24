import React from "react";
import "./Compte.css";

export default function PageLogin() {
  return (
    <div className="container-global">
      <form className="container-form-login">
        <h1 className="h1-title-connexion">Connexion</h1>
        <div className="label-login">
          <label htmlFor="email">Email :</label>
          <input
            // className="input-login"
            type="email"
            name="email"
            placeholder="Veuillez rentrer votre email..."
            required
          />

          <label htmlFor="password">Mot de passe : </label>
          <input
            // className="input-login"
            type="password"
            name="password"
            placeholder="Veuillez rentrer votre mot de passe..."
            required
          />
        </div>

        <div className="container-btn-validate">
          <button type="submit" className="btn-validate-login">
            VALIDER
          </button>
        </div>
      </form>
    </div>
  );
}
