import { token } from "../until/cache";
import * as types from "./mutation-types";

// token
export const setToken = function({ commit }, k) {
  commit(types.TOKEN, token.setToken(k));
};
export const clearToken = function({ commit }) {
  commit(types.TOKEN, token.clearToken());
};
