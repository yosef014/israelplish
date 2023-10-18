<template>
  <v-app>
    <div :class="['menu', { open: isHamburgerOpen }]">
      <div class="menu-container">
        <div class="hamburger">
          <i class="icon icon-hamburger" @click="isHamburgerOpen = !isHamburgerOpen"/>
        </div>
        <ul class="links-list">
          <li v-for="link of menu?.link" class="link">{{link.name}}</li>
        </ul>
        <picture class="logo">
<!--          <img src="" alt="logo"/>-->
          <sapn>ISRAEL</sapn>
        </picture>
      </div>
      <div :class="{'mobile-menu': true, 'mobile-menu-open': isHamburgerOpen}">
        <ul class="mobile-links-list">
          <li v-for="link of menu?.link" class="mobile-link">{{link.name}}</li>
        </ul>
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
  watch: {
    isHamburgerOpen(newValue) {
      const { height } = document.querySelector('.mobile-links-list').getBoundingClientRect()
      document.querySelector('.menu').style.height = newValue ? (height+64)+'px' : 76+'px'
    }
  },
  async fetch() {
    await this.$store.dispatch('global/getMenu')
  },
  data() {
    return {
      isHamburgerOpen: false
    }
  }
}
</script>
<style scoped lang="scss">
.menu {
  width: 100vw;
  background-color: $clr1;
  //min-height: 76px;
  height: 76px;
  transition: all 0.5s;
  &.open {
    //height: v-bind(mobileHeightMenu);
    min-height: fit-content;
  }

  .mobile-menu {
    top: -430px;
    right: 0;
    flex-direction: column;
    transition: all 0.5s;
    .mobile-links-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 30px 30px 30px;
      li {
        padding: 10px;
        display: flex;
        cursor: pointer;
        color: $clr2;
        &:hover {
          background-color: $clr3;
        }
      }
    }
  }
  .mobile-menu-open {
    display: flex;
    top: 0;
    right: 0;
    transition: all 0.5s;
  }
  .menu-container {
    margin: 0 auto;
    width: $desktop;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 76px;
    @media (max-width: $desktop) {
      width: 100%;
      padding: 0 40px;
    }
    .hamburger {
      .icon{
        display: none;
        @media (max-width: $desktop) {
          display: flex;
        }
      }
    }

    .links-list {
      height: 100%;
      display: flex;
      list-style-type: none;
      @media (max-width: $desktop) {
       display: none;
      }
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
