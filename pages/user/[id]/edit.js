import { useRouter } from "next/router";
import React from "react";

import Layout from "../../../components/Layout/Layout";

function ProfileEditPage() {
  const router = useRouter();
  const { contentType } = router.query;

  let template;
  switch (contentType) {
    case "about":
      template = "<div>Вкладка Обо мне</div>";
      break;
    case "access":
      template = "<div>Вкладка Доступ</div>";
      break;
    case "privacy":
      template = "<div>Вкладка Конфиденциальность</div>";
      break;
    case "expert":
      template = "<div>Вкладка Эксперт</div>";
      break;
    case "subscriptions":
      template = "<div>Вкладка Подписки</div>";
      break;
    default:
      template = "<div>Нет такой страницы</div>";
  }

  return (
    <Layout>
      Редактирование Профиля пользователя <br />
      {template}
    </Layout>
  );
}

export default ProfileEditPage;
