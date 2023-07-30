<template>
    <div id="app">
      <div class="bg-gray-800">
        <!-- Sidebar -->
        <div class="flex h-screen bg-gray-800">
          <Sidebar :class="{ 'hidden': isSidebarHidden, 'md:block': !isSidebarHidden }"
            class="flex flex-col flex-shrink-0 w-64 bg-gray-900 transition-all duration-300" />
  
          <!-- Main Content -->
          <div class="flex flex-col flex-1 overflow-hidden">
            <Navbar :toggleSidebar="toggleSidebar" />
            <main class="flex-1 p-6 overflow-y-auto">
              <!-- Your main content goes here -->
              <Table :users="users" />
            </main>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import Sidebar from '@/components/Layout/Sidebar.vue';
  import Navbar from '@/components/Layout/Navbar.vue';
  import Table from '@/components/Users/Table.vue';
  export default {
    name: 'App',
    components: {
      Navbar,
      Sidebar,
      Table
  
    },
    data() {
      return {
        isSidebarHidden: false,
        users: []
      }
    },
    methods: {
      toggleSidebar: function () {
        this.isSidebarHidden = !this.isSidebarHidden;
      },
    },
    created() {
      this.$axios.get('/api/users').then((res) => {
        this.users = res.data
      })
    }
  }
  </script>
  
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>