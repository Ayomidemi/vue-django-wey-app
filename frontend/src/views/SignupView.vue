<template>
  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4">
    <div class="main-left">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl">Sign up</h1>

        <p class="mb-6 text-gray-500">
          You can sign up with your name, e-mail and password. If you already have an account, you
          can log in by clicking the link below.
        </p>

        <p class="font-semibold">
          Already have an account?
          <RouterLink :to="{ name: 'login' }" class="underline">Click here</RouterLink> to log in!
        </p>
      </div>
    </div>

    <div class="main-right">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <form class="space-y-6" @submit.prevent="submitForm">
          <div>
            <label>Name</label><br />
            <input
              type="text"
              v-model="form.name"
              placeholder="Your full name"
              class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg" />
          </div>

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
              v-model="form.password1"
              placeholder="Your password"
              class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg" />
          </div>

          <div>
            <label>Repeat password</label><br />
            <input
              type="password"
              v-model="form.password2"
              placeholder="Repeat your password"
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
              class="py-4 px-6 bg-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? 'Signing up...' : 'Sign up' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useToastStore } from '../stores/toast'
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password1: '',
        password2: '',
      },
      errors: [],
      isLoading: false,
    }
  },

  mounted() {
    this.toastStore = useToastStore()
  },

  methods: {
    async submitForm() {
      this.errors = []
      this.isLoading = true

      // Client-side validation
      if (this.form.name.trim() === '') {
        this.errors.push('Name is required')
      }

      if (this.form.email.trim() === '') {
        this.errors.push('E-mail is required')
      }

      if (this.form.password1 === '') {
        this.errors.push('Password is required')
      }

      if (this.form.password1 !== this.form.password2) {
        this.errors.push('Passwords do not match')
      }

      if (this.errors.length > 0) {
        this.isLoading = false
        return
      }

      try {
        const response = await axios.post('/api/signup/', {
          name: this.form.name.trim(),
          email: this.form.email.trim(),
          password1: this.form.password1,
          password2: this.form.password2,
        })

        if (response.data.message === 'success') {
          this.toastStore.showToast(
            5000,
            'The user has been created successfully!',
            'bg-green-500'
          )

          // Reset form
          this.form.name = ''
          this.form.email = ''
          this.form.password1 = ''
          this.form.password2 = ''
        } else {
          this.toastStore.showToast(
            5000,
            'Something went wrong. Please try again later',
            'bg-red-500'
          )
        }
      } catch (error) {
        console.error('Signup error:', error)
        
        // Handle different types of errors
        if (error.response?.data?.errors) {
          // Server validation errors
          Object.values(error.response.data.errors).forEach(errorArray => {
            if (Array.isArray(errorArray)) {
              this.errors.push(...errorArray)
            } else {
              this.errors.push(errorArray)
            }
          })
        } else if (error.response?.data?.message) {
          // Server message
          this.errors.push(error.response.data.message)
        } else if (error.message) {
          // Network or other errors
          this.errors.push('Network error. Please check your connection and try again.')
        } else {
          this.errors.push('An unexpected error occurred. Please try again.')
        }

        this.toastStore.showToast(
          5000,
          'Failed to create account. Please check the errors above.',
          'bg-red-500'
        )
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
