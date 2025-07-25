<template>
    <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <h3 class="mb-6 text-xl">Trends</h3>

        <div class="space-y-4">
            <div v-for="trend in trends" :key="trend.id" class="flex items-center justify-between">
                <p class="text-xs">
                    <strong>#{{ trend.name }}</strong><br>
                    <span class="text-gray-500">{{ trend.posts }} posts</span>
                </p>

                <a href="#" class="py-2 px-3 bg-purple-600 text-white text-xs rounded-lg">Explore</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            trends: [
                { id: 1, name: 'javascript', posts: 430 },
                { id: 2, name: 'python', posts: 120 },
                { id: 3, name: 'vue', posts: 112 },
                { id: 4, name: 'react', posts: 100 }
            ]
        }
    }
}
</script>