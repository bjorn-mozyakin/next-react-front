// Styles
// import styles from './Sidebar.module.scss';

import React from "react";
import { useDispatch } from "react-redux";

import { toggleSidebarVisibility } from "../../srore/actions";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleCloseBtnClick = () => {
    dispatch(toggleSidebarVisibility());
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__topbar">
          <div
            className="sidebar__close btn-round btn-round_volume_flat btn-round_size_content btn-round_states_crimson-100 icon-before_close-18-crimson"
            onClick={() => handleCloseBtnClick()}
          ></div>
        </div>
        <div className="sidebar__content">
          <div className="sidebar__maindata">
            <div className="sidebar__user">
              <div className="user">
                <div className="user__container">
                  <div className="user__main">
                    <div className="user__pic user__pic_size_small user__pic_crimson-100"></div>
                    <div className="user__info">
                      <div className="user__name">Test</div>
                      <div className="user__metadata">
                        Анонимный пользователь
                      </div>
                    </div>
                  </div>
                  <div className="user__sign-in btn-flat btn-flat_size_tiny btn-flat_color_crimson-500 btn-flat_states_crimson-100">
                    Войти
                  </div>
                </div>
              </div>
            </div>
            <button
              className="sidebar__add-thread btn-flat btn-flat_size_content btn-flat_icon_yes btn-flat_color_crimson-500 btn-round_states_crimson-100 icon-before_edit-18-crimson"
              type="button"
            >
              Добавить новую тему
            </button>
          </div>
          <div className="sidebar__my-rubrics-block">
            <h3 className="sidebar__title">Мои рубрики</h3>
            <ul className="sidebar__my-rubrics-list relative">
              <ul className="sidebar__my-rubrics-list-half">
                <li className="sidebar__my-rubrics-item">
                  <a
                    className="sidebar__my-rubrics-link"
                    href="/psycho/medley6/forum/"
                    title="Обо всем"
                  >
                    <div className="sidebar__my-rubric">Я и общество</div>
                    <div className="sidebar__my-subrubric">Обо всем</div>
                  </a>
                </li>
                <li className="sidebar__my-rubrics-item">
                  <a
                    className="sidebar__my-rubrics-link"
                    href="/living/entertainment/forum/"
                    title="Развлекательный портал"
                  >
                    <div className="sidebar__my-rubric">Жизнь форума</div>
                    <div className="sidebar__my-subrubric">
                      Развлекательный портал
                    </div>
                  </a>
                </li>
                <li className="sidebar__my-rubrics-item">
                  <a
                    className="sidebar__my-rubrics-link"
                    href="/relations/men/forum/"
                    title="Мы и мужчины"
                  >
                    <div className="sidebar__my-rubric">Отношения</div>
                    <div className="sidebar__my-subrubric">Мы и мужчины</div>
                  </a>
                </li>
              </ul>
              <ul className="sidebar__my-rubrics-list-half">
                <li className="sidebar__my-rubrics-item">
                  <a
                    className="sidebar__my-rubrics-link"
                    href="/home/medley9/forum/"
                    title="Обо всем"
                  >
                    <div className="sidebar__my-rubric">Дом</div>
                    <div className="sidebar__my-subrubric">Обо всем</div>
                  </a>
                </li>
                <li className="sidebar__my-rubrics-item">
                  <a
                    className="sidebar__my-rubrics-link"
                    href="/health/medley7/forum/"
                    title="Обо всем"
                  >
                    <div className="sidebar__my-rubric">Здоровье</div>
                    <div className="sidebar__my-subrubric">Обо всем</div>
                  </a>
                </li>
                <li className="sidebar__my-rubrics-item">
                  <a
                    className="sidebar__my-rubrics-link"
                    href="/health/woman-health/forum/"
                    title="Женское здоровье"
                  >
                    <div className="sidebar__my-rubric">Здоровье</div>
                    <div className="sidebar__my-subrubric">
                      Женское здоровье
                    </div>
                  </a>
                </li>
              </ul>
              <div className="dialog dialog_type_context dialog_side_bottom">
                <div className="dialog__container">
                  <div className="dialog__message">
                    <div className="dialog__pointer"></div>

                    <div className="dialog__text">
                      Здесь те рубрики, темы из которых ты чаще читаешь
                    </div>

                    <div className="dialog__btn-block">
                      <div className="dialog__btn-ok btn-flat btn-flat_size_content btn-flat_color_caribbean-500 btn-flat_bg_transparent btn-flat_states_white-100">
                        Понятно
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div className="sidebar__all-rubrics-block">
            <div className="sidebar__title">Все рубрики</div>
            <div className="sidebar__all-rubrics-list">
              <ul className="sidebar__all-rubrics-list-half">
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/relations/forum/"
                  >
                    Отношения{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/relations/men/forum/"
                        data-section="Отношения"
                      >
                        Мы и мужчины{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/relations/sex/forum/"
                        data-section="Отношения"
                      >
                        Секс{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/relations/wedding/forum/"
                        data-section="Отношения"
                      >
                        Свадьба{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/relations/marriage/forum/"
                        data-section="Отношения"
                      >
                        Брак{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/relations/medley4/forum/"
                        data-section="Отношения"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/psycho/forum/"
                  >
                    Я и общество{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/psycho/personality/forum/"
                        data-section="Я и общество"
                      >
                        Я - личность{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/psycho/friendship/forum/"
                        data-section="Я и общество"
                      >
                        Дружба{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/psycho/career/forum/"
                        data-section="Я и общество"
                      >
                        Карьера{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/psycho/medley6/forum/"
                        data-section="Я и общество"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/psycho/finance/forum/"
                        data-section="Я и общество"
                      >
                        Финансы{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/health/forum/"
                  >
                    Здоровье{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/health/diets/forum/"
                        data-section="Здоровье"
                      >
                        Диеты{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/health/woman-health/forum/"
                        data-section="Здоровье"
                      >
                        Женское здоровье{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/health/Pregnancy/forum/"
                        data-section="Здоровье"
                      >
                        Беременность{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/health/health-fitness/forum/"
                        data-section="Здоровье"
                      >
                        Фитнес{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/health/medley7/forum/"
                        data-section="Здоровье"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a className="sidebar__all-rubrics-link" href="/kids/forum/">
                    Дети{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/deti-ot-3-do-6/forum/"
                        data-section="Дети"
                      >
                        Дети от 3 до 6 лет{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/deti-ot-6-do-12/forum/"
                        data-section="Дети"
                      >
                        Дети от 6 до 12 лет{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/deti-ot-goda-do-3-let/forum/"
                        data-section="Дети"
                      >
                        Дети от 1 до 3 лет{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/newborns/forum/"
                        data-section="Дети"
                      >
                        Новорожденные и малыши до года{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/infant/forum/"
                        data-section="Дети"
                      >
                        Малыши до 3-х лет{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/feeding/forum/"
                        data-section="Дети"
                      >
                        Питание{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/healthy/forum/"
                        data-section="Дети"
                      >
                        Здоровье{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/evolution/forum/"
                        data-section="Дети"
                      >
                        Психология и развитие{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/Nursery/forum/"
                        data-section="Дети"
                      >
                        Детские сады и школы{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/teens/forum/"
                        data-section="Дети"
                      >
                        До 16 и старше{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/vacationss/forum/"
                        data-section="Дети"
                      >
                        Семейный отдых{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/medley5/forum/"
                        data-section="Дети"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/kids/baby/forum/"
                        data-section="Дети"
                      >
                        Груднички{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a className="sidebar__all-rubrics-link" href="/home/forum/">
                    Дом{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/home/culinary/forum/"
                        data-section="Дом"
                      >
                        Рецепты{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/home/hobby/forum/"
                        data-section="Дом"
                      >
                        Хобби{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/home/fancy-work/forum/"
                        data-section="Дом"
                      >
                        Рукоделие{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/home/Interior/forum/"
                        data-section="Дом"
                      >
                        Интерьер{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/home/animal/forum/"
                        data-section="Дом"
                      >
                        Домашние животные и звери{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/home/facilities/forum/"
                        data-section="Дом"
                      >
                        Бытовая техника{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/home/medley9/forum/"
                        data-section="Дом"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/beauty/forum/"
                  >
                    Красота{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/face/forum/"
                        data-section="Красота"
                      >
                        Лицо{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/body/forum/"
                        data-section="Красота"
                      >
                        Тело{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/cosmetics/forum/"
                        data-section="Красота"
                      >
                        Макияж{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/hair/forum/"
                        data-section="Красота"
                      >
                        Волосы{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/nails/forum/"
                        data-section="Красота"
                      >
                        Ногти{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/perfume/forum/"
                        data-section="Красота"
                      >
                        Ароматы{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/plastic/forum/"
                        data-section="Красота"
                      >
                        Пластика и косметология{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/beauty-spa/forum/"
                        data-section="Красота"
                      >
                        SPA уход{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/beauty/medley2/forum/"
                        data-section="Красота"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/fashion/forum/"
                  >
                    Мой образ{" "}
                  </a>
                </li>
              </ul>
              <ul className="sidebar__all-rubrics-list-half">
                <li className="sidebar__all-rubrics-item">
                  <a className="sidebar__all-rubrics-link" href="/rest/forum/">
                    Развлечения{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/rest/freetime/forum/"
                        data-section="Развлечения"
                      >
                        Свободное время{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/rest/travel/forum/"
                        data-section="Развлечения"
                      >
                        Путешествия{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/rest/auto/forum/"
                        data-section="Развлечения"
                      >
                        Автомобили{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/rest/gadget/forum/"
                        data-section="Развлечения"
                      >
                        Гаджеты{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/rest/music/forum/"
                        data-section="Развлечения"
                      >
                        Музыка{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/rest/medley8/forum/"
                        data-section="Развлечения"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a className="sidebar__all-rubrics-link" href="/stars/forum/">
                    Звёзды{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/stars/events/forum/"
                        data-section="Звёзды"
                      >
                        Новости{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/stars/show-golos/forum/"
                        data-section="Звёзды"
                      >
                        Шоу «Голос»{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/stars/paparazzi/forum/"
                        data-section="Звёзды"
                      >
                        Папарацци{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/stars/backstage/forum/"
                        data-section="Звёзды"
                      >
                        Светская хроника{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/stars/life/forum/"
                        data-section="Звёзды"
                      >
                        Интервью{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/stars/medley1/forum/"
                        data-section="Звёзды"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/horoscope/forum/"
                  >
                    Гороскоп{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/horoscope/medley10/forum/"
                        data-section="Гороскоп"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/living/forum/"
                  >
                    Жизнь форума{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/living/about-users/forum/"
                        data-section="Жизнь форума"
                      >
                        Форумчане о форумчанах{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/living/administration/forum/"
                        data-section="Жизнь форума"
                      >
                        Общение с модераторами{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/living/entertainment/forum/"
                        data-section="Жизнь форума"
                      >
                        Развлекательный портал{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/living/blog/forum/"
                        data-section="Жизнь форума"
                      >
                        Блог форума{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a
                    className="sidebar__all-rubrics-link"
                    href="/writing/forum/"
                  >
                    Клуб Woman.ru{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/writing/literature/forum/"
                        data-section="Клуб Woman.ru"
                      >
                        Проба пера{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/writing/connexion/forum/"
                        data-section="Клуб Woman.ru"
                      >
                        Будем знакомы{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <a className="sidebar__all-rubrics-link" href="/club/forum/">
                    Клуб по интересам{" "}
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </a>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/club/club-medley/forum/"
                        data-section="Клуб по интересам"
                      >
                        Обо всем{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__all-rubrics-item">
                  <div className="sidebar__all-rubrics-link">
                    Архив
                    <span className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"></span>
                  </div>
                  <ul className="sidebar__all-subrubrics-list">
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2018/"
                        data-section="Клуб по интересам"
                      >
                        2018 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2017/"
                        data-section="Клуб по интересам"
                      >
                        2017 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2016/"
                        data-section="Клуб по интересам"
                      >
                        2016 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2015/"
                        data-section="Клуб по интересам"
                      >
                        2015 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2014/"
                        data-section="Клуб по интересам"
                      >
                        2014 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2013/"
                        data-section="Клуб по интересам"
                      >
                        2013 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2012/"
                        data-section="Клуб по интересам"
                      >
                        2012 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2011/"
                        data-section="Клуб по интересам"
                      >
                        2011 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2010/"
                        data-section="Клуб по интересам"
                      >
                        2010 год{" "}
                      </a>
                    </li>
                    <li className="sidebar__all-subrubrics-item">
                      <a
                        className="sidebar__all-subrubrics-link"
                        href="/forum/archive_2009/"
                        data-section="Клуб по интересам"
                      >
                        Ранее{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar__actionbar actionbar actionbar_left">
            <a
              className="actionbar__link icon-before_script-18-crimson"
              href="/pages/forum_rules/"
            >
              Правила форума
            </a>
            <a
              className="actionbar__link icon-before_info-18-crimson"
              href="/pages/forum_help/"
            >
              Помощь
            </a>
            <a
              className="actionbar__link icon-before_mail-18-crimson"
              href="mailto:admin@woman.ru"
            >
              Для связи: admin@woman.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
