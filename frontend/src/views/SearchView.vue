<template>
  <!-- Responsive grid: 1 column on mobile, 4 columns on desktop -->
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
    <!-- Main content: search and results -->
    <div class="main-left col-span-1 md:col-span-3 space-y-4 order-1 md:order-1">
      <!-- Search bar -->
      <div class="bg-white border border-gray-200 rounded-lg">
        <div class="p-4 flex space-x-4">
          <input
            type="search"
            class="p-4 w-full bg-gray-100 rounded-lg"
            placeholder="What are you looking for?" />

          <a href="#" class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg">Search</a>
        </div>
      </div>

      <!-- User cards: rendered from an array -->
      <div
        class="p-4 bg-white border border-gray-200 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <!-- v-for renders each user card -->
        <div v-for="user in users" :key="user.id" class="p-4 text-center bg-gray-100 rounded-lg">
          <img :src="user.avatar" class="mb-6 rounded-full" />

          <p>
            <strong>{{ user.name }}</strong>
          </p>

          <div class="mt-6 flex space-x-8 justify-around">
            <p class="text-xs text-gray-500">{{ user.friends }} friends</p>
            <p class="text-xs text-gray-500">{{ user.posts }} posts</p>
          </div>
        </div>
      </div>

      <!-- Example post -->
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <div class="mb-6 flex items-center justify-between">
          <div class="flex items-center space-x-6">
            <img src="https://i.pravatar.cc/300?img=5" class="w-[40px] rounded-full" />

            <p><strong>Jane Williams</strong></p>
          </div>

          <p class="text-gray-600">18 minutes ago</p>
        </div>

        <p>This is a test post from the search view and it's a ridiculously long post.</p>

        <div class="my-6 flex justify-between">
          <div class="flex space-x-6">
            <div class="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
              </svg>

              <span class="text-gray-500 text-xs">82 likes</span>
            </div>

            <div class="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"></path>
              </svg>

              <span class="text-gray-500 text-xs">0 comments</span>
            </div>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Right sidebar -->
    <div class="main-right col-span-1 md:col-span-1 space-y-4 order-2 md:order-2">
      <PeopleYouMayKnow />
      <Trends />
    </div>
  </div>
</template>

<script>
// Import sidebar components
import PeopleYouMayKnow from '../components/PeopleYouMayKnow.vue';
import Trends from '../components/Trends.vue';

export default {
  name: 'SearchView',
  components: {
    PeopleYouMayKnow,
    Trends,
  },
  data() {
    return {
      // Array of user objects for the user cards
      users: [
        {
          id: 1,
          name: 'Jane Williams',
          avatar: 'https://i.pravatar.cc/300?img=12',
          friends: 182,
          posts: 120,
        },
        {
          id: 2,
          name: 'Michael Chen',
          avatar: 'https://i.pravatar.cc/300?img=11',
          friends: 95,
          posts: 87,
        },
        {
          id: 3,
          name: 'Priya Patel',
          avatar: 'https://i.pravatar.cc/300?img=18',
          friends: 210,
          posts: 134,
        },
        {
          id: 4,
          name: 'Lucas Müller',
          avatar: 'https://i.pravatar.cc/300?img=23',
          friends: 77,
          posts: 45,
        },
        {
          id: 5,
          name: 'Fatima Al-Farsi',
          avatar: 'https://i.pravatar.cc/300?img=28',
          friends: 160,
          posts: 99,
        },
      ],
    };
  },
};
</script>
