<template>
  <div
    class="flex flex-col bg-white border shadow-lg rounded-app text-black w-52 dark:bg-dark-2"
  >
    <div class="item items-start">
      <img class="rounded-full w-4 mt-1" src="@/assets/icons/user.png" alt="" />
      <div class="flex flex-col gap-1">
        <a class="text-sm font-medium dark:text-white" href="/#">My Profile</a>
        <p class="text-xs text-app-disabled-2">
          Change settings of your account.
        </p>
      </div>
    </div>

    <div class="item items-start items-center">
      <img
        class="rounded-full w-4 dark:bg-white opacity-80"
        src="@/assets/icons/theme.png"
        alt=""
      />
      <button class="text-sm font-medium dark:text-white" @click="toggleTheme">
        Toggle theme
      </button>
    </div>

    <div class="flex item text-app-error items-center">
      <img class="w-4" src="@/assets/icons/exit.png" alt="" />
      <a class="text-sm font-medium" href="/#">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggleTheme'],
}
</script>

<style lang="postcss">
.item {
  @apply flex gap-4 border-t py-2 px-3;
}
</style>
