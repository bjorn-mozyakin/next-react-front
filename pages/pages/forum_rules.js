import React from "react";

import { initializeStore } from "../../srore/reducer";
import { defineDeviceType } from "../../utils/helpers";

import Layout from "../../components/Layout/Layout";

function ForumRulesPage({ deviceType }) {
  return (
    <Layout
      title="Правила пользования форумом Woman.ru."
      deviceType={deviceType}
      needAdScripts={false}
    >
      <div className="service-page">
        <h1>Правила пользования форумом Woman.ru</h1>
        <p>
          Форум Woman.ru представляет собой публичный онлайн-чат, в котором в
          режиме открытого диалога общаются и обмениваются мнениями все
          желающие.
        </p>
        <p>
          Форум создан для комфортного и безопасного общения, строится на
          открытости и взаимном уважении. Каждый участник форума имеет право на
          собственную точку зрения, даже если другим она кажется не верной, при
          этом следует помнить, что переход на личности других участников
          дискуссии или авторов тем заведомо является свидетельством слабой
          позиции в споре. Начиная общение на форуме вы соглашаетесь с
          настоящими Правилами.
        </p>
        <p>
          Прочитайте{" "}
          <a href="/pages/forum_help/">ответы на часто задаваемые вопросы</a> в
          разделе помощи, если у вас есть вопросы по работе форума.
        </p>
        <nav>
          <h2 className="service-page__title">
            Содержание
            <a className="service-page__anchor" name="content_table"></a>
          </h2>
          <ul>
            <li>
              <a href="#registration">Регистрация</a>
            </li>
            <li>
              <a href="#user_functional">Функционал пользователя</a>
            </li>
            <li>
              <a href="#add_content">Правила публикации тем и ответов</a>
            </li>
            <li>
              <a href="#delete_content">
                Удаление тем, ответов и профиля по инициативе пользователя
              </a>
            </li>
            <li>
              <a href="#stop_violation">Меры пресечения нарушений</a>
            </li>
            <li>
              <a href="#moderator">Роль модератора</a>
            </li>
            <li>
              <a href="#feedback">Обратная связь</a>
            </li>
            <li>
              <a href="#legal_info">Правовая информация</a>
            </li>
            <li>
              <a href="#confidentiality">Конфиденциальность</a>
            </li>
          </ul>
        </nav>
        <h2 className="service-page__title">
          Регистрация
          <a className="service-page__anchor" name="registration"></a>
        </h2>
        <p>
          Для создания тем и общения на форуме регистрация не является
          обязательной, но зарегистрированные пользователи имеют ряд привилегий,
          недоступных анонимным пользователям:
        </p>
        <ul>
          <li>
            получение уведомлений об открытии темы или ее отклонении с указанием
            причин;
          </li>
          <li>получение уведомлений о появлении сообщений к открытой теме;</li>
          <li>прикрепление собственного юзерпика;</li>
          <li>
            возможность принимать участие в темах только для зарегистрированных
            пользователей;
          </li>
          <li>
            удаление своих сообщений (тем и ответов). Гости не могут подтвердить
            авторство сообщений и, соответственно, попросить об их удалении;
          </li>
          <li>блокировка пользователей автором в своей теме.</li>
        </ul>
        <p>
          Анонимные пользователи могут также получать уведомления об открытии
          тем и опубликованных комментариях, если оставят при отправке темы
          адрес электронной почты.
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Функционал пользователя
          <a className="service-page__anchor" name="user_functional"></a>
        </h2>
        <p>
          Любой пользователь может создавать темы, не противоречащие Правилам
          публикации.
        </p>
        <p>
          Любой пользователь может оставлять ответы в темах и участвовать в
          дискуссиях (кроме тем, которые ограничены ответами только
          зарегистрированных пользователей).
        </p>
        <p>
          Автор темы или ответа несет ответственность за содержание своего
          сообщения.
        </p>
        <p>
          Администрация оставляет за собой право удалять и/или редактировать
          сообщения пользователей в случае нарушения Правил общения, принятых на
          форуме.
        </p>
        <p>
          Любой пользователь может пожаловаться на содержимое темы и/или
          конкретного ответа, нажав знак “!” рядом с темой или конкретным
          ответом.
        </p>
        <p>
          Мы просим вас жаловаться на ответы пользователей, нарушающих Правила,
          с целью поддержания порядка и здорового климата на форуме. Модераторы
          обрабатывают абсолютно все жалобы.
        </p>
        <p>
          Также пользователи могут оценить содержание темы, нажав “лайк” или
          “дизлайк”. Мы настоятельно рекомендуем активно использовать данный
          функционал, так как на мнении пользователей основываются правила
          модерации тем. Мы хотим, чтобы вам было интересно и не будем
          публиковать темы, вызывающие общественный негатив.
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Правила публикации тем и ответов
          <a className="service-page__anchor" name="add_content"></a>
        </h2>
        <p>
          Чтобы опубликовать новую тему, необходимо войти в раздел “Мой форум” и
          нажать “Добавить новую тему”. Также создать тему можно в меню
          рубрикатора (три горизонтальные полоски).
        </p>
        <p>
          Если пользователь оставил действующий адрес электронной почты при
          регистрации или при создании темы, он получит автоматическое
          уведомление о рассмотрении темы и принятом решении.
        </p>
        <p>
          В случае отклонения темы модератором рекомендуем перечитать Правила
          публикации тем, отредактировать сообщение и отправить его вновь.
        </p>
        <p>
          Срок рассмотрения темы модератором - от 15 минут до 2 часов. Некоторые
          темы, вызвавшие сомнение модераторов, рассматриваются администратором
          форума. В таком случае срок рассмотрения может быть продлен до 12
          часов. Если по истечении этого срока вы не получили письма о
          рассмотрении темы (не забудьте посмотреть в папку “Спам”) - вы можете
          пожаловаться по адресу{" "}
          <a href="mailto:admin@woman.ru" target="_blank" rel="noopener">
            admin@woman.ru
          </a>
        </p>
        <p>
          Темы, в которых осуществляется гадание и обсуждается эзотерика, не
          публикуются в списке новых, при этом их всегда можно найти в разделе
          Гороскоп/Обо всем.
        </p>
        <p>
          Тема может быть опубликована с незначительной коррекцией текста
          модератором без изменения логической составляющей самого сообщения,
          если ее название или содержание имеет некритичное несоответствие
          Правилам, но не нарушает их (например, заголовок темы содержит
          эмодзи).
        </p>
        <p>
          Ответы (комментарии к темам) проходят постмодерацию, т.е. публикуются
          сразу же, при этом позднее могут быть удалены или скорректированы
          модератором в случае нарушений. Для наведения порядка в теме
          необходимо обратить внимание модератора, нажав знак “!”. Достаточно
          прислать 1 жалобу (множественные жалобы на одно и то же сообщение от
          одного пользователя приравнивается к спаму). Жалобы рассматриваются в
          течение 15-20 минут, иногда, при большом объеме жалоб, срок может
          продлиться до 2 часов.
        </p>
        <p>
          В ваших сообщениях не цитируйте ответы, содержащие оскорбления и
          нецензурную брань. Такое сообщение будет удалено модератором в виду
          содержащейся в нем цитаты.
        </p>
        <p>
          <strong>На форуме приветствуется:</strong>
        </p>
        <ul>
          <li>
            доброжелательное, вежливое отношение участников форума друг к другу;
          </li>
          <li>
            взаимопомощь и обмен полезной информацией - если автор создал тему,
            она его волнует и он ждет конструктивных ответов;
          </li>
          <li>
            старайтесь писать грамотно и по делу - качественные ответы читаются
            другими с гораздо большей охотой и вниманием;
          </li>
          <li>
            избегайте излишнего цитирования. Это затрудняет чтение ответа и
            загружает ветку;
          </li>
          <li>позитивное настроение, добрый юмор, самоирония;</li>
          <li>взаимное уважение;</li>
          <li>
            писать можно все, что не нарушает Правила публикации тем и ответов
            на форуме;
          </li>
          <li>
            проходите мимо троллинга, флуда и флейма, не давайте пищу для
            развития. Пользователи форума сами формируют среду для общения. Если
            никто не будет реагировать на провокационные сообщения, рано или
            поздно такие “скучающие” теряют интерес и уходят сами.
          </li>
        </ul>
        <p>
          <strong>Мы не публикуем темы и удаляем ответы:</strong>
        </p>
        <ul>
          <li>
            нарушающие общепринятые моральные и этические нормы, сетевой этикет;
          </li>
          <li>
            содержащие рекламу, в том числе скрытую, ссылки на сторонние ресурсы
            и файлообменники, личные данные (номера телефонов, e-mail и прочее),
            а также предложения, связанные с удаленной работой;
          </li>
          <li>
            содержащие прямые оскорбления, ненормативную и/или обсценную
            лексику;
          </li>
          <li>
            содержащие элементы троллинга (провокация на эмоциональный ответ),
            цель которого вызвать конфликты и/или оскорбить других
            пользователей;
          </li>
          <li>порнографического характера, психосексуальной субкультуры;</li>
          <li>активную пропаганду нетрадиционных сексуальных отношений;</li>
          <li>
            экстремистского характера, целью которых является разжигание
            межнациональной, политической и/или религиозной розни;
          </li>
          <li>
            нарушающие законодательство Российской Федерации и нормы
            международного права;
          </li>
          <li>про намерения, планирование или неудавшиеся попытки суицида;</li>
          <li>направленные на романтические и сексуальные знакомства;</li>
          <li>содержащие просьбы о финансовой помощи, попрошайничество;</li>
          <li>обсуждающие действия модераторов;</li>
          <li>
            написанные капслоком (с использованием клавиши CAPS LOCK),
            транслитом или на иностранном языке (форум находится в России,
            языком общения является русский язык);
          </li>
          <li>
            мы очень любим детей, поэтому не публикуем отправленные
            несовершеннолетними пользователями темы о сексе, а также темы,
            ответы на которые могут нанести вред здоровью, так как не можем
            нести ответственность за качество ответов других пользователей;
          </li>
          <li>
            дубли. Если вы создали тему и отправили ее для публикации - не
            отправляйте тему повторно. Если тема соответствует Правилам, она
            будет опубликована в порядке общей очереди. Многочисленные дубли
            приравниваются к спаму;
          </li>
          <li>
            на усмотрение модератора в случае, если по опыту администрации
            форума тема является провокационной.
          </li>
        </ul>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Удаление тем, ответов и профиля по инициативе пользователя
          <a className="service-page__anchor" name="delete_content"></a>
        </h2>
        <p>
          Форум Woman.ru является публичной площадкой, куда приходят, чтобы
          поделиться своей проблемой или радостью, мыслями или сомнениями, ища
          ответы на свои вопросы. Опубликованные темы и ответы - это кладезь
          информации, потому мы всегда с неохотой удаляем контент.
        </p>
        <p>
          Пользователь может обратиться к администрации с просьбой об удалении
          темы, если его авторство установлено.
        </p>
        <p>
          Исключение составляют темы, где есть ответ эксперта. Эксперты работают
          на форуме абсолютно бесплатно и их вознаграждением является публикация
          их ответа, а также ссылки на их персональную страницу. Удаление темы
          станет ущемление прав эксперта. Будьте внимательны, когда отправляете
          тему с запросом на ответ эксперта.
        </p>
        <p>
          Также не подлежат удалению темы и ответы, которые были использованы
          владельцем ресурса в качестве редакционного материала, согласно пункту{" "}
          <a href="#legal_info">Правовая информация</a>
        </p>
        <p>
          Зарегистрированные пользователи могут удалить свою тему или ответы к
          ней, отправив письмо со ссылкой на тему на адрес{" "}
          <a href="mailto:admin@woman.ru" target="_blank" rel="noopener">
            admin@woman.ru
          </a>{" "}
          с указанием причины удаления, а также с приложением ССЫЛКИ на тему или
          на конкретный ответ (ссылка на тему/ответ копируется автоматически при
          нажатии на цепочку в верхнем правом углу карточки).
        </p>
        <p>
          Незарегистрированный пользователь может удалить свою тему только в
          тому случае, если он оставлял адрес электронной почты при ее создании.
        </p>
        <p>
          Письмо необходимо отправить с того электронного адреса, который был
          указан при регистрации. Такое удаление можно осуществить даже если
          зарегистрированный пользователь выбрал анонимную публикацию темы или
          ответа (поставил галочку в пункте “анонимно”).
        </p>
        <p>
          Полностью анонимные пользователи (не предоставившие никаких данных) не
          могут удалить тему и/или ответ на форуме, т.к. такая тема и/или ответ
          не имеют опознавательных признаков автора.
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Меры пресечения нарушений
          <a className="service-page__anchor" name="stop_violation"></a>
        </h2>
        <ol>
          <li>Удаление темы и/или ответа, нарушающего Правила.</li>
          <li>БАН пользователя.</li>
        </ol>
        <p>
          <strong>
            Если вашу тему и/или ответ удалили/закрыли комментирование к ней
          </strong>
        </p>
        <p>
          Мы крайне не заинтересованы в удалении ваших текстов с форума, при
          этом следить за их качеством и безопасностью на сайте - наша прямая
          обязанность. Мы внимательны и уважительны к общению пользователей,
          поэтому ждем и надеемся на такое же отношение с вашей стороны.
        </p>
        <p>
          Если ваш ответ или тему удалили/запретили к публикации - прочтите
          внимательно Правила во избежании повторных нарушений. Исправьте текст
          и отправьте тему снова - мы будем рады ее одобрить!
        </p>
        <p>
          Если же тема была полностью закрыта модератором – в ней происходили
          недопустимые массовые нарушения Правил пользователями и/или автором
          темы. Такие темы восстановлению не подлежат.
        </p>
        <p>
          <strong>За что полагается БАН</strong>
        </p>
        <p>БАН является жесткой мерой и применяется в самых крайних случаях.</p>
        <p>
          Первая мера, используемая модератором - предупреждение (в виде
          удаления темы или ответа). Если пользователь продолжает нарушать
          Правила общения после трехкратного предупреждения, ему будет
          заблокирован доступ на форум на 3 дня.
        </p>
        <p>
          Множественные (более 3-х) жалобы от одного пользователя на одно и то
          же сообщение или на сообщения, не содержащие нарушений,
          рассматривается как спам и наказываются БАНом на 3 дня. Если такая
          жалоба в своем тексте содержит оскорбление модератора, то за ней сразу
          следует БАН пользователя сроком на 1 месяц.
        </p>
        <p>
          В случае жесткого нарушения Правил публикации (создания темы, имеющей
          противозаконное или оскорбительное содержание, рекламу товаров и
          услуг), пользователь будет забанен сразу.
        </p>
        <p>
          Решение о БАНе не пересматривается и не обсуждается. Многочисленные
          сообщения на почту (или все адреса почты проекта одновременно) мы
          считаем флудом и продляем бан на новый срок. Вы нарушили правила -
          несите ответственность достойно!
        </p>
        <p>
          Незнание настоящих Правил не освобождает от ответственности. Прочтите
          их, несите ответственность за их нарушение и в следующий раз не
          нарушайте.
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Роль модератора
          <a className="service-page__anchor" name="moderator"></a>
        </h2>
        <p>Обращаем внимание на особый статус модераторов на сайте.</p>
        <p>
          Задача модераторов - обеспечивать безопасность на сайте, как следствие
          - модераторы наделены специальными правами.
        </p>
        <p>
          Модераторы имеют право редактировать, переносить, закрывать, удалять
          ответы и темы, нарушающие Правилам форума; ограничивать доступ к
          форуму любым пользователям.
        </p>
        <p>
          Модераторы не вмешиваются в общение пользователей до тех пор, пока
          обсуждение происходит в рамках Правил.
        </p>
        <p>
          Действия модераторов не обсуждаются. Оскорбления в адрес модераторов
          строго наказываются.
        </p>
        <p>
          Модераторы не являются участниками общения на форуме ни в рабочее, ни
          в свободное время (это одно из важнейших условий работы), являются
          третьей, незаинтересованной стороной, поэтому всегда объективны.
        </p>
        <p>
          Если у вас есть претензии к работе модераторов, пожалуйста, напишите
          на почту{" "}
          <a href="mailto:admin@woman.ru" target="_blank" rel="noopener">
            admin@woman.ru
          </a>{" "}
          Каждое сообщение будет рассмотрено. В обращении необходимо дать ссылку
          на тему и/или ответы.
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Обратная связь<a className="service-page__anchor" name="feedback"></a>
        </h2>
        <p>
          Если вы знаете, что можно улучшить на форуме, пишите на{" "}
          <a href="mailto:admin@woman.ru" target="_blank" rel="noopener">
            admin@woman.ru
          </a>
        </p>
        <p>
          Мы очень хотим, чтобы вам было комфортно на форуме, поэтому
          постараемся воплотить в жизнь самые интересные идеи. Ваша идея
          повлияет на миллионы людей!
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Правовая информация
          <a className="service-page__anchor" name="legal_info"></a>
        </h2>
        <p>
          Пользователь сайта Woman.ru понимает и принимает, что он несет полную
          ответственность за все материалы, частично или полностью
          опубликованные с помощью сервиса Woman.ru.
        </p>
        <p>
          Пользователь сайта Woman.ru гарантирует, что размещение представленных
          им материалов не нарушает права третьих лиц (включая, но не
          ограничиваясь авторскими правами), не наносит ущерба их чести и
          достоинству.
        </p>
        <p>
          Пользователь сайта Woman.ru, отправляя материалы, тем самым
          заинтересован в их публикации на сайте и выражает свое согласие на их
          дальнейшее использование владельцами сайта Woman.ru.
        </p>
        <p>
          Все материалы сайта Woman.ru, независимо от формы и даты размещения на
          сайте, могут быть использованы только с согласия владельцев сайта.
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
        <h2 className="service-page__title">
          Конфиденциальность
          <a className="service-page__anchor" name="confidentiality"></a>
        </h2>
        <p>
          Сайт Woman.ru разрешает третьим сторонам, в том числе издателям и
          рекламным сетям, показывать рекламу на Woman.ru. Некоторые из этих
          компаний могут размещать куки-файлы на вашем компьютере, чтобы
          идентифицировать ваш компьютер каждый раз, когда они посылают вам
          онлайн-рекламу. Это дает им возможность понять, где вы или другие
          пользователи вашего компьютера видели их рекламу, и показывать
          рекламу, которую они считают интересной для вас. Мы не контролируем
          использование куки-файлов этими компаниями.
        </p>
        <p>
          Если вы не хотите, чтобы информация о вашем поведении была доступна
          для третьих сторон, вы можете запретить сбор данных. Некоторые из этих
          компаний являются участниками программы «Сетевая рекламная инициатива»
          (Network Advertising Initiative, NAI), предоставляющей возможность
          отказаться от размещения идентифицирующих куки-файлов. Для получения
          дополнительной информации, пожалуйста, посетите веб-сайт программы
          «Сетевая рекламная инициатива» по адресу{" "}
          <a
            href="/redirect/aHR0cDovL3d3dy5uZXR3b3JrYWR2ZXJ0aXNpbmcub3JnL2Nob2ljZXMv/"
            target="_blank"
            rel="noopener nofollow"
          >
            http://www.networkadvertising.org/choices/
          </a>
          .
        </p>
        <p>
          Обратите внимание, что решив отказаться от использования вашей
          информации для распространения рекламы с учетом ваших интересов, вы
          будете продолжать видеть рекламные сообщения на нашем сайте, но эти
          рекламные объявления могут быть не столь актуальны для вас.
        </p>
        <p>
          <a href="#content_table">К содержанию</a>
        </p>
      </div>
    </Layout>
  );
}

export default ForumRulesPage;

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps({ req }) {
  const reduxStore = initializeStore();
  // const { dispatch } = reduxStore
  //
  // dispatch({
  //     type: 'TICK',
  //     light: false,
  //     lastUpdate: Date.now(),
  // })

  return {
    props: {
      initialReduxState: reduxStore.getState(),
      deviceType: defineDeviceType(req.headers["user-agent"])
        ? "mobile"
        : "desktop",
    },
  };
}
