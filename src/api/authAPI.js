import API from './API';

const AuthAPI = {
  async login(data) {
    return API.post('/login', data);
  },

  async logout() {
    return API.post('/logout');
  },
};

export default AuthAPI;