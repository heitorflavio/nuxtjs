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
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from '@/components/Layout/Sidebar.vue';
import Navbar from '@/components/Layout/Navbar.vue';
import Dashboard from '@/components/Layout/Dashboard.vue';
export default {
  name: 'App',
  middleware: 'auth',
  components: {
    Navbar,
    Sidebar,
    Dashboard

  },
  data() {
    return {
      isSidebarHidden: false,
    }
  },
  methods: {
    toggleSidebar: function () {
      this.isSidebarHidden = !this.isSidebarHidden;
    },
  },

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