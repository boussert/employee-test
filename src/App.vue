<template>
  <div class="app flex flex-col">
    <header>
    </header>
    <div class="flex flex-auto">
      <nav>
      </nav>
      <main class="flex-auto p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./style/_styles.scss";

* {
  box-sizing: border-box;
}

body,
html,
#app,
.app {
  height: 100%;
  width: 100%;
}

body {
  font-family: Roboto, Arial;
  background-color: #F3F5F7;
  padding: 0;
}

nav {
  background-color: #{$white};
  width: 120px;
}

header {
  height: 32px;
  background-color: #{$white};
  flex: 0 0 auto;
}
</style>
