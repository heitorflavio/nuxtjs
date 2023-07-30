<template>
    <div class="flex flex-col flex-shrink-0 w-64 bg-gray-900">
        <div class="flex items-center justify-center h-16 flex-shrink-0 text-white">
            <span class="text-xl font-semibold">Admin Panel</span>
           
        </div>
        <nav class="flex-1 px-2 py-4 space-y-2">
            <a href="/" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <!-- Your sidebar icon SVG here -->
                </svg>
                Dashboard
            </a>
            <a href="/users" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <!-- Your sidebar icon SVG here -->
                </svg>
                Users
            </a>
            <!-- Add more sidebar links here -->
        </nav>
    </div>
</template>

<script>
export default {
 name: "SideBar"
}
</script>

<style></style>