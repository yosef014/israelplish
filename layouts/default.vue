<template>
  <v-app>
    <div class="menu">
      <div class="menu-container">
        <div class="hamburger"></div>
        <ul class="links-list">
          <li v-for="link of menu?.link" class="link">{{link.name}}</li>
        </ul>
        <picture class="logo">
<!--          <img src="" alt="logo"/>-->
          <sapn>ISRAEL</sapn>
        </picture>
      </div>
    </div>
<Nuxt/>
<div class="footer">
  Israel Plish CopyRight©
</div>

  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('global', ['menu']),
  },
  async fetch() {
    await this.$store.dispatch('global/getMenu')
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.menu {
  width: 100vw;
  background-color: $clr1;
  height: 76px;
  .menu-container {
    margin: 0 auto;
    width: $desktop;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .links-list {
      height: 100%;
      display: flex;
      //gap: 20px;
      list-style-type: none;
      li {
        justify-content: center;
        padding: 10px;
        display: flex;
        align-items: center;
        height: 100%;
        min-width: 100px;
        cursor: pointer;
        color: $clr2;
        &:hover {
          background-color: $clr3;
        }
      }
    }

    .logo {
      cursor: pointer;
      color: $clr3;
    }
  }
}
.footer {
  background-color: $clr4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $clr2;
  height: 40px;
  width: 100vw;
}

</style>
