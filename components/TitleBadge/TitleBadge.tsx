import React from "react";

export const TitleBadge = () => {
  // TODO перенести в redux-store
  const user = {
    isExpert: false,
    statusAuto: "Гуру форума",
    statusEditorial: null,
  };
  const { isExpert, statusAuto, statusEditorial } = user;

  return (
    <>
      {isExpert && (
        <div className="title-badge title-badge_size_small title-badge_g-purple">
          Эксперт
        </div>
      )}
      {statusEditorial && (
        <div className="title-badge title-badge_size_small title-badge_maltese-500">
          {statusEditorial}
        </div>
      )}
      {statusAuto && (
        <div className="title-badge title-badge_size_small title-badge_bahamas-500">
          {statusAuto}
        </div>
      )}
    </>
  );
};

export default TitleBadge;
