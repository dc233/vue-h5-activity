import storage from "good-storage";
const TOKEN = "token";
export const token = {
  getToken() {
    return storage.get(TOKEN, "");
  },

  setToken(token) {
    return storage.set(TOKEN, token);
  },
  clearToken() {
    return storage.remove(TOKEN);
  }
};
