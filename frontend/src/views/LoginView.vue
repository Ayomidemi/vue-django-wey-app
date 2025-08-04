<template>
  <!-- ade@gna.com Pease13& -->
  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4">
    <div class="main-left">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl">Log in</h1>

        <p class="mb-6 text-gray-500">
          You can log in with your e-mail and password. If you don't have an account, you can create
          one by clicking the link below.
        </p>

        <p class="font-semibold">
          Don't have an account?
          <RouterLink :to="{ name: 'signup' }" class="underline">Click here</RouterLink> to create
          one!
        </p>
      </div>
    </div>

    <div class="main-right">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <form class="space-y-6" @submit.prevent="submitForm">
          <div>
            <label>E-mail</label><br />
            <input
              type="email"
              v-model="form.email"
              placeholder="Your e-mail address"
              class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg" />
          </div>

          <div>
            <label>Password</label><br />
            <input
              type="password"
              v-model="form.password"
              placeholder="Your password"
              class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg" />
          </div>

          <template v-if="errors.length > 0">
            <div class="bg-red-300 text-white rounded-lg p-6">
              <p v-for="error in errors" :key="error">{{ error }}</p>
            </div>
          </template>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="py-4 px-6 bg-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
              {{ isLoading ? 'Logging in...' : 'Log in' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/user';
import { useToastStore } from '../stores/toast';
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: [],
      isLoading: false,
    };
  },

  methods: {
    async submitForm() {
      this.errors = [];
      this.isLoading = true;

      if (this.form.email.trim() === '') {
        this.errors.push('E-mail is required');
      }

      if (this.form.password.trim() === '') {
        this.errors.push('Password is required');
      }

      if (this.errors.length > 0) {
        this.isLoading = false;
        return;
      }

      
      try {
        const loginResponse = await axios.post('/api/login/', this.form);
        
        // Use the store
        const userStore = useUserStore();
        userStore.setToken(loginResponse.data);
        
        const meResponse = await axios.get('/api/me/');
        userStore.setUserInfo(meResponse.data);
        
        // Redirect
        this.$router.push('/feed');
      } catch (error) {
        console.log('Error:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
