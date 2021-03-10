<template>
  <div class="flex-1 flex flex-col">
    <h1 class="text-lg tracking-wide pb-4 text-app-title">Employees</h1>
    <UserTable :users="users" />
  </div>
</template>
<script>
import UserTable from '@/components/shared/Users/UsersTable.vue'
export default {
  components: { UserTable },
  props: ['users'],
}
</script>
