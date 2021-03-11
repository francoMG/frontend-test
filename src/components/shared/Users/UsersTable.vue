<template>
  <div class="flex border rounded-app-3">
    <table class="table-auto text-xs w-full">
      <thead>
        <tr class="table-header">
          <th class="p-4" style="width: 35%;">Employee</th>
          <th style="width: 23%;">Last login</th>
          <th style="width: 21%;">Department</th>
          <th style="width: 17%;">Status</th>
          <th style="width: 4%;" />
        </tr>
      </thead>
      <tbody>
        <tr class="border-t" v-for="user in users" v-bind:key="user.id">
          <td class="flex items-center">
            <!-- 
              error: server response with not found for profile photos 
              :src="user.profile_img"
            -->
            <img
              class="rounded-full w-5 h-5 m-3"
              src="@/assets/icons/user.png"
              alt="user"
            />
            <div>
              <div>{{ user.first_name }} {{ user.last_name }}</div>
              <div class="opacity-50">
                {{ user.email }}
              </div>
            </div>
          </td>
          <td>
            <div>
              {{ formatDate(user.lastSession) }}
            </div>
            <div class="opacity-50">
              {{ daysDiff(user.lastSession, new Date()) }} days ago
            </div>
          </td>
          <td>{{ user.department }}</td>
          <td
            :class="
              `text-app-${user.status ? 'success' : 'error'} font-semibold`
            "
          >
            {{ user.status ? 'Active' : 'Inactive' }}
          </td>
          <td>
            <button class="flex w-3">
              <img
                class="flex-1"
                src="@/assets/icons/dropdown.png"
                alt="dropdown"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const { format: formatDate } = new Intl.DateTimeFormat('en-ES', {
  dateStyle: 'long',
})

export default {
  props: ['users'],
  methods: {
    daysDiff(date1, date2) {
      const diffTime = Math.abs(date2 - date1)
      const ans = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return ans
    },
    formatDate,
  },
}
</script>

<style lang="postcss">
.table-header > th {
  @apply text-left;
}

.table-header > th {
  @apply pt-6 font-semibold opacity-50;
}
</style>
