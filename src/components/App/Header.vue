<template>
  <header class="flex items-center rounded-app bg-app-blue text-white py-3">
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

    <button class="ml-auto mr-6">
      <img
        class="rounded-full border-2 border-white w-10 h-10"
        src="@/assets/profile.png"
        alt="profile"
      />
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
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
      ],
    }
  },
}
</script>
