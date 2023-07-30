<template>
    <!-- Card -->
    <div class="bg-white rounded-lg shadow-lg">
        <div class="px-6 py-4">
            <!-- <h2 class="text-xl font-semibold mb-4">Sample Card with Table</h2> -->
            <!-- Table -->
            <table class="w-full table-auto">
                <thead>
                    <tr class="bg-gray-800 text-white">
                        <th class="px-4 py-2">#</th>
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Email</th>
                        <th class="px-4 py-2">CreateAt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t" v-for="(user, index) in users" :key="index">
                        <td class="px-4 py-2">{{ user.id }}</td>
                        <td class="px-4 py-2">{{ user.name }}</td>
                        <td class="px-4 py-2">{{ user.email }}</td>
                        <td class="px-4 py-2">{{ user.created_at }}</td>
                    </tr>
                    <!-- Add more table rows here -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        users: {
            type: Array,
        }
    }
}
</script>

<style></style>