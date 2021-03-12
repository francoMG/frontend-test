<template>
  <header
    class="flex items-center rounded-app-2 bg-app-blue dark:bg-dark-2 text-white py-3"
  >
    <h1 class="pl-8 font-bold text-2xl">
      LOGO
    </h1>

    <div class="flex pl-24 gap-16">
      <a
        class="text-base"
        v-for="(route, idx) in routes"
        :href="route.to"
        v-bind:key="idx"
        >{{ route.title }}</a
      >
    </div>

    <div class="relative ml-auto mr-6">
      <button @click="toggleDropdown">
        <img
          class="rounded-full border-2 border-white w-10 h-10"
          src="@/assets/images/profile.png"
          alt="profile"
        />
      </button>

      <div
        class="absolute right-0 top-12"
        :style="`display: ${isDropdownOpen ? 'block' : 'none'};`"
      >
        <Dropdown :toggle-theme="toggleTheme" />
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from '@/components/App/Dropdown.vue'

export default {
  components: { Dropdown },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
  },
  props: ['toggleTheme'],
  data() {
    return {
      isDropdownOpen: false,
      routes: [
        {
          to: '/#',
          title: 'Menu',
        },
        {
          to: '/#',
          title: 'Menu',
        },
        {
          to: '/#',
          title: 'Menu',
        },
        {
          to: '/#',
          title: 'Menu',
        },
      ],
    }
  },
}
</script>
