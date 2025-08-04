import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    id: null,
    name: null,
    email: null,
    access: null,
    refresh: null,
  }),
  actions: {
    initStore() {
      if (localStorage.getItem('user.access')) {
        console.log('User has access!');

        this.access = localStorage.getItem('user.access');
        this.refresh = localStorage.getItem('user.refresh');
        this.id = localStorage.getItem('user.id');
        this.name = localStorage.getItem('user.name');
        this.email = localStorage.getItem('user.email');
        this.isAuthenticated = true;

        // Set axios header
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.access;

        this.refreshToken();
      }
    },

    setToken(data) {
      this.access = data.access;
      this.refresh = data.refresh;
      this.isAuthenticated = true;

      localStorage.setItem('user.access', data.access);
      localStorage.setItem('user.refresh', data.refresh);

      // Set axios header
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access;

      console.log('user.access: ', localStorage.getItem('user.access'));
    },

    removeToken() {
      console.log('removeToken');

      this.refresh = null;
      this.access = null;
      this.isAuthenticated = false;
      this.id = null;
      this.name = null;
      this.email = null;

      localStorage.setItem('user.access', '');
      localStorage.setItem('user.refresh', '');
      localStorage.setItem('user.id', '');
      localStorage.setItem('user.name', '');
      localStorage.setItem('user.email', '');

      // Remove axios header
      delete axios.defaults.headers.common['Authorization'];
    },

    setUserInfo(user) {
      console.log('setUserInfo', user);

      this.id = user.id;
      this.name = user.name;
      this.email = user.email;

      localStorage.setItem('user.id', this.id);
      localStorage.setItem('user.name', this.name);
      localStorage.setItem('user.email', this.email);

      console.log('User', {
        id: this.id,
        name: this.name,
        email: this.email,
      });
    },

    async refreshToken() {
      try {
        const response = await axios.post('/api/refresh/', {
          refresh: this.refresh,
        });

        this.access = response.data.access;
        localStorage.setItem('user.access', response.data.access);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access;
      } catch (error) {
        console.error('Token refresh failed:', error);
        this.removeToken();
      }
    },
  },
});
