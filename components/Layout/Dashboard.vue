<template>
    <div class="home">
  
      <div class="">
        <div class="container mx-auto mt-8 px-4">
          <!-- <h1 class="text-3xl font-semibold mb-4">Dashboard</h1> -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-semibold mb-4">Total Users</h2>
              <p class="text-3xl font-bold">1,234</p>
            </div>
  
            <!-- Card 2 -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-semibold mb-4">Revenue</h2>
              <p class="text-3xl font-bold">$25,678</p>
            </div>
  
            <!-- Card 3 -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-semibold mb-4">New Orders</h2>
              <p class="text-3xl font-bold">345</p>
            </div>
  
            <!-- Add more cards here -->
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'HomeView',
    components: {
  
    }
  }
  </script>
  