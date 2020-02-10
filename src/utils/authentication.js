const LOGGED_USER_KEY = "LOGGED_USER_KEY";
const ALL_USERS_KEY = "ALL_USERS_KEY";

export const getLoggedUserFromStorage = () => {
  return (
    JSON.parse(localStorage.getItem(LOGGED_USER_KEY)) || {
      id: -1,
      userName: ""
    }
  );
};

export const getAllUsersFromStorage = () => {
  const allUsers = JSON.parse(localStorage.getItem(ALL_USERS_KEY));
  return (allUsers && allUsers.users) || [];
};

const getUserIdFromStorage = () => {
  const parsedUser = getLoggedUserFromStorage();
  return parsedUser.id;
};

export const isUserSigned = (id = getUserIdFromStorage()) => {
  // return id !== null && id !== "";
  return typeof id === "number" && id > -1;
};

const validateUser = ({ email, password }, allUsers) => {
  return (
    allUsers &&
    allUsers.find(user => user.email === email && user.password === password)
  );
};

const lower = str => {
  return str.toLocaleLowerCase();
};

const checkUser = ({ email, userName }, allUsers) => {
  return (
    allUsers &&
    allUsers.find(
      user =>
        lower(user.email) === lower(email) ||
        lower(user.userName) === lower(userName)
    )
  );
};

export const findUserById = id => {
  const users = getAllUsersFromStorage();
  return users.find(user => user.id === id);
};

export const signInUser = user => {
  const users = getAllUsersFromStorage();
  const validUser = validateUser(user, users);

  if (validUser) {
    const loggedUser = { id: validUser.id, userName: validUser.userName };
    const jsonUser = JSON.stringify(loggedUser);
    localStorage.setItem(LOGGED_USER_KEY, jsonUser);
    return loggedUser;
  } else {
    return null;
  }
};

const addUserToStorage = (user, allUsers) => {
  const newUser = {
    ...user,
    id: new Date().getTime()
  };
  allUsers.push(newUser);
  const jsonUsers = JSON.stringify({ users: allUsers });
  localStorage.setItem(ALL_USERS_KEY, jsonUsers);
  return newUser;
};

export const signUpUser = user => {
  const users = getAllUsersFromStorage();
  const checkedUser = checkUser(user, users);
  console.log("Sign up user: ", checkedUser);
  if (!checkedUser) {
    return addUserToStorage(user, users);
  } else {
    return null;
  }
};

export const signOutUser = () => {
  localStorage.removeItem(LOGGED_USER_KEY);
};
