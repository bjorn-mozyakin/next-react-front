import React from "react";

import UserLoggedIn from "./UserLoggedIn";
import UserLoggedOut from "./UserLoggedOut";

export const User = () => {
  // TODO перенести в redux-store
  const user = {
    isLogged: true,
  };
  const { isLogged } = user;
  return (
    <div className="user">
      <div className="user__container">
        {isLogged ? <UserLoggedIn /> : <UserLoggedOut />}
      </div>
    </div>
  );
};

export default User;
