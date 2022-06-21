<template>
  <div class="app">
    <header class="app__header">
      <input type="text" aria-label="Search within employees" placeholder="Search...">
      <div style="flex: 1 1 auto;"></div>
      <div class="header__actions">
        <span>Ico 1</span>
        <span>Ico 2</span>
      </div>
      <div>
        <span>Ico account</span>
        My profile
      </div>
    </header>
    <div class="app__content">
      <nav style="flex: 0 0 auto;">
        <div>Home</div>
        <div>Employees</div>
      </nav>
      <main style="flex: 1 1 auto;">
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
  // background-color: var(--body-bg-color);
  background-color: #F3F5F7;
  padding: 0;
}

nav {
  background-color: #FFFFFF; 
}

main {
  padding: 16px;
}

.header__actions {
 border-right: 1px solid black; 
}

.app {
    display: flex;
    flex-direction: column;

    &__header {
      flex: 0 0 auto;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      padding: 16px;
    }

    &__content {
      display: flex;
      flex: 1 1 auto;
    }
}
</style>
