export default () => ({
  login: ({ username, password }) => {
    return new Promise((resolve, reject) => {
      if (username.trim().length !== 0 && password.trim().length !== 0) {
        resolve({
          userId: "USR001",
          accessToken: "THISISACCESSTOKENDONTEVERCOPYITNORCHANGEIT",
        });
      } else {
        reject({ message: "Credential is not provided" });
      }
    });
  },
  register: ({ firstName, username, password }) => {},
  logout: () => {},
});
