<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="main-left md:col-span-1 order-2 md:order-1">
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img src="https://i.pravatar.cc/300?img=10" class="w-[40px] rounded-full" />

              <p class="text-xs"><strong>David Smith</strong></p>
            </div>

            <span class="text-xs text-gray-500">18 minutes ago</span>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img src="https://i.pravatar.cc/300?img=11" class="w-[40px] rounded-full" />

              <p class="text-xs"><strong>Jackson Miller</strong></p>
            </div>

            <span class="text-xs text-gray-500">22 minutes ago</span>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img src="https://i.pravatar.cc/300?img=12" class="w-[40px] rounded-full" />

              <p class="text-xs"><strong>John Doe</strong></p>
            </div>

            <span class="text-xs text-gray-500">38 minutes ago</span>
          </div>
        </div>
      </div>
    </div>

    <div class="main-center col-span-1 md:col-span-3 space-y-4 order-1 md:order-2">
      <div class="bg-white border border-gray-200 rounded-lg">
        <div class="flex flex-col flex-grow p-4">
          <div class="flex w-full mt-2 space-x-3 max-w-md ml-auto justify-end">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">Hello, how are you? How are you doing?</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
              <img src="https://i.pravatar.cc/300?img=70" class="w-[40px] rounded-full" />
            </div>
          </div>

          <div class="flex w-full mt-2 space-x-3 max-w-md ml-auto justify-end">
            <div>
              <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">Is this a test message? I'm not sure if it's working.</p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
              <img src="https://i.pravatar.cc/300?img=70" class="w-[40px] rounded-full" />
            </div>
          </div>

          <div class="flex w-full mt-2 space-x-3 max-w-md">
            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
              <img src="https://i.pravatar.cc/300?img=10" class="w-[40px] rounded-full" />
            </div>
            <div>
              <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p class="text-sm">
                  I'm not sure if this is working. How are you doing? I'm not sure if it's working.
                  I think it's working.
                </p>
              </div>
              <span class="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg">
        <div class="p-4">
          <textarea
            class="p-4 w-full bg-gray-100 rounded-lg"
            placeholder="What do you want to say?"></textarea>
        </div>

        <div class="p-4 border-t border-gray-100 flex justify-between">
          <a href="#" class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg">Post</a>
        </div>
      </div>
    </div>
  </div>
</template>
