<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="main-left md:col-span-1 order-2 md:order-1">
      <div class="p-4 bg-white border border-gray-200 text-center rounded-lg">
        <img src="https://i.pravatar.cc/300?img=70" class="mb-6 rounded-full" />

        <p><strong>Code With Stein</strong></p>

        <div class="mt-6 flex space-x-8 justify-around">
          <p class="text-xs text-gray-500">182 friends</p>
          <p class="text-xs text-gray-500">120 posts</p>
        </div>
      </div>
    </div>

    <div class="main-center col-span-1 md:col-span-2 space-y-4 order-1 md:order-2">
      <form
        class="bg-white border border-gray-200 rounded-lg"
        @submit.prevent="submitForm"
        method="post">
        <div class="p-4">
          <textarea
            class="p-4 w-full bg-gray-100 rounded-lg"
            v-model="body"
            placeholder="What are you thinking about?"></textarea>
        </div>

        <div class="p-4 border-t border-gray-100 flex justify-between">
          <a href="#" class="inline-block py-4 px-6 bg-gray-600 text-white rounded-lg"
            >Attach image</a
          >

          <button type="submit" class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg">
            Post
          </button>
        </div>
      </form>

      <div 
                class="p-4 bg-white border border-gray-200 rounded-lg"
                v-for="post in posts"
                v-bind:key="post.id"
            >
                <FeedItem v-bind:post="post" />
            </div>
    </div>

    <div class="main-right col-span-1 md:col-span-1 space-y-4 order-3">
      <PeopleYouMayKnow />

      <Trends />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PeopleYouMayKnow from '../components/PeopleYouMayKnow.vue';
import Trends from '../components/Trends.vue';
import FeedItem from '../components/FeedItem.vue';

export default {
  name: 'FeedView',

  components: {
    PeopleYouMayKnow,
    Trends,
    FeedItem,
  },

  data() {
    return {
      posts: [],
      body: '',
    };
  },

  mounted() {
    this.getFeed();
  },

  methods: {
    getFeed() {
      axios
        .get('/api/posts/')
        .then((response) => {
          this.posts = response.data.data;
        })
        .catch((error) => {
          console.log('Feed error:', error);
        });
    },

    submitForm() {
      axios
        .post('/api/posts/create/', {
          body: this.body,
        })
        .then((response) => {
          this.posts.unshift(response.data);
          this.body = '';
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
  },
};
</script>
