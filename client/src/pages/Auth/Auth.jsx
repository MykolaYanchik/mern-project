import React from "react";
import { useTitle } from "../../utils/hooks";
import Tabs from "./components/Tabs";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm"

const tabs = {
  label: ["Зареєструватися", "Увійти"],
  content: [<RegistrationForm />, <LoginForm />],
};

export default function Auth() {
  useTitle("Авторизація");

  return (
    <div className="centred-container">
      <div className="form-container">
        <h2 className="form-container-title">
          Вітаємо вас!
          <span>
            для подальших дій вам потрібно зареєструватися, або увійти (якщо ви
            вже зареєстровані)
          </span>
        </h2>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
