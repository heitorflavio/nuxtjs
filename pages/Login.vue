<template>
    <body class="bg-gray-800 min-h-screen flex items-start  justify-center">
        <div class="w-full max-w-md flex items-center justify-center  mt-12">
            <div class="bg-gray-900 p-8 rounded-lg shadow-md w-full">
                <h2 class="text-2xl font-semibold mb-4 text-white">Login</h2>
                <form @submit.prevent="login">
                    <div class="mb-4">
                        <label for="username" class="block text-gray-200">Username</label>
                        <input type="text" id="username" name="username"
                            class="w-full border rounded-md px-3 py-2 bg-gray-800 text-white" v-model="email">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-200">Password</label>
                        <input type="password" id="password" name="password"
                            class="w-full border rounded-md px-3 py-2 bg-gray-800 text-white" v-model="password">
                    </div>
                    <button type="submit"
                        class="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md w-full">Login</button>
                </form>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
     login() {
            //   try {
            //     await this.$auth.loginWith('local', {
            //       data: {
            //         email: this.email,
            //         password: this.password,
            //       },
            //     })
            //     this.$router.push('/') // Redirect to the dashboard after successful login
            //   } catch (error) {
            //     console.error('Login failed:', error)
            //   }

            // this.$axios.post('/api/login', {
            //     email: this.email,
            //     password: this.password,
            // })
            //     .then((response) => {

            //         console.log(response.data.token);
            //         localStorage.setItem('token', response.data.token);
            //         this.$router.push('/')

            //     }, (error) => {
            //         console.log(error);
            //     }
            //     );

       

        this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.$router.push('/') // Redirect to the dashboard after successful login
     
    
        },
    },
}
</script>

