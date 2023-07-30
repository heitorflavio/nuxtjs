<template>
    <header class="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div class="flex ">
            <button class="px-4" @click="toggleSidebar">
                <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <h2 class="text-xl font-semibold">Welcome, User!</h2>
        </div>
        <button @click="logout()" class="px-4 py-2 text-white bg-gray-800 rounded">Logout</button>
    </header>
</template>

<script>
export default {
    name: 'Navbar_Component',
    props: {
        toggleSidebar: {
            type: Function,
            required: true
        }
    },
    methods: {
        async logout() {
            try {
                await this.$auth.logout()
                this.$router.push('/login') // Redirecionar para a página de login após o logout
            } catch (error) {
                console.error('Logout failed:', error)
            }
        }
    }
}
</script>

<style></style>