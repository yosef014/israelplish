<!--<template>-->
<!--  <div ref="swiper" class="swiper">-->
<!--    <div class="swiper-wrapper">-->
<!--    <swiper-slide ref="swiper1"> <img src="data:image/jpeg;base64,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"/> </swiper-slide>-->
<!--    <swiper-slide ref="swiper2"> <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAvQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBQQGB//EADcQAAIBAgQEAgkDAgcAAAAAAAABAgMREiExQQRRYXEygQUTIkJSkaHh8HKxwTNiNENjc5LR8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EAB4RAQEAAgIDAQEAAAAAAAAAAAABAhEDIRMxURJB/9oADAMBAAIRAxEAPwD9eXLboLR9WN56/n53E0RonovoZuORrYTRqVGKhiqRjzeZ7pTUct+hnw0LNyfZCl4pd2Zt2eg5vF4jSFRN55Mr1StbD5kSjhlJE9p3O0elKbnQUo+47tdDkn0KScEuh5Kno6lJ3i3DotDD0cfJ+ZquS77HY4Wm6dCMXrqxUuBpUXjzlLmzYJnn+vROSTtn8mLGuvyYSTvkn/ysLDK2j0+PoHPR41nrl0ZTSaaeaZDi88ufvl9wWbcerRcJyildJ2IwvVqy6nS4vhvXNTg7TSt3R5I8HXcs426tnqxzljxZ8VmXUYWj8T8kDWjTTT3R76Xo6LXtybf9uRdX0fFJ+pk89pDyYp4cnMBprVWuH0G5NrN6aG3LQt7N7oRU4xUY4ZXb1XIko6u3T8/NQtl+wau/1/P+wPK+kX5+fnzCEHOVlfqxxi5c7cz1UoYYktDhBRSSWhhUi4ybtrmekGr7GZSzbzKrK1vqKKlN5Zs2dJN79i0klbQu2dDRJESvcvQDLZbZicblAFZtWEmmrqzXQucVOLi9GrGfD0I0KeBNvO9ys97MC8KDCiNIKUb6lJIpoISyC4NqObdkEWpbryA5XpGjhrYkspZnjO5xFFVoOLdnqnyZyK1OdKeGtDzjuenjz3Hj5ePV3GQFexzl8g9lbP5nRx06qpy5LzLVNLV36WNMLHhPHt9LRRj0yKndQeFZ2DoHQgVPFh9pu99y1oSMFMBIYQnqAPUA0AAADYAAJoAABTuFxAE0VSOODjfJ65CpQVOGFN2WhQF2aKUrESamsMopp8ypolK7IajOXBcPLP1dr8nYS4Dhvg+rPQM1+79Z8ePxOIeNGYGWmtr6CsEHqsxsEAAAUAAAAAAAAAAAAAAAAAAAAEzkoRcnfLZblEzipxaeV9wJjUeNRqQUW9LO5oZqDxKU54mtMrGgCAYgPBKVXhVeb9ZS57o9a0vzPLx1SMoOjF4qjayWZ6oxdl2DV9Li2UJKwwyAASknJpNNra4TZgABQAAAAAAAAAAAAAAAAFgsMAhAY1q0qdenTVNtT97kavJF0S7DdicQm7iIp0aFOivYWe73NUfOuUpeKTb53NKXE1aTvGbtybug63hv126ssEcWWWz3FSnjjitbPTl3M+F4iHEQ0tKOqNnZX6l/jjZTmrxaTs2smYRTbgvV4cLzZpj6DxdAaXkTJpBe5MiGlJ3GRDUsKAAAAAGgEBNS+1/IpXssTztmE2EMWJbZkub+FgWBGPoDnfJIB9yZO5LnfTP+SMWSWue2/RFTawM8T+v4isTva13vnoF24zjliXhJBOzum12Y8T3UW+xl7ezpVJUp4oOzPfD0hTt7cWn0OfieyiuyHjl8T8gxlhMnSXHUHu/kaU+Iozfs1It8tDkucnq0+6C0Zf2v6Bi8UdzQtWZxqPE1KEsLzitmzqUZxnFSi8mVzyxuLZLoYOq03aUMudzfQzdO78c/noGGfrX8Uctbpr/wfrXfxw+T/EX6vlOfTMap/wCpP5gVTeKCfPoOUlFXbSQvBHeTXzZDaUYzqKOJLZfsBTm1Kyi2ueRMpyxOOF2+LIcnN5qSS6oiWO+WHD1Cmmnez05DTa0ZGTbcbYtLjjnFNppvmE0q75mc3fLO3Jbl9jNu935O38FiUZ5tZ7fZBe2rstLpadEGazWT0f2D3tl22XTqaQtE/dt52+43lk08tovQFl0t9PuC5e12W3cI4w3hsteogehzfQUmsG1yQ2AEAAAFKSsoy058j1+jqmCt6pv2ZeHueLc9PBf1qP6gxnOnWrVI0qcqk07LkcriONq1naLwR2SyOh6Q/wAJU8v3OM9T0cUmny+fKzqOjwnHtyVOsr3dlKP8nQucHh/61P8AUv3O7uY5JJXThytnZSxY4/DnfqF25yTWUbWfUp7A9Wc3VnKKqRTnFrdK5LVniu8ln1NZeFdjKXgfYKTcU1NJ+1ZdwzxyzurKxP8AlUu6LXiIolpv5Eeeejt+yNFqZ09afmajFGnRr6duoNWy0tz2+4R0j+sPdf6zQNMtO+3Vhe2V3Holn3YP3v8AcKj4pdwP/9k="/> </swiper-slide>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Swiper, { Navigation, Pagination } from 'swiper'-->
<!--import 'swiper/swiper-bundle.min.css'-->

<!--export default {-->
<!--  props: {-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      swiper: null,-->
<!--      swiper1: null,-->
<!--      swiper2: null,-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    setTimeout(() => {-->
<!--      this.setSwiper()-->
<!--    }, 10)-->
<!--  },-->
<!--  methods: {-->
<!--    setSwiper () {-->
<!--      this.swiper = new Swiper(this.$refs.swiper, {-->
<!--        // configure Swiper to use modules-->
<!--        modules: [Navigation, Pagination],-->
<!--        // Optional parameters-->
<!--        // loop: true,-->
<!--        // If we need pagination-->
<!--        pagination: {-->
<!--          type: 'progressbar',-->
<!--        },-->
<!--        // Navigation arrows-->
<!--        navigation: true,-->
<!--        // spaceBetween: 10,-->
<!--        // And if we need scrollbar-->
<!--        // scrollbar: {-->
<!--        //   el: '.swiper-scrollbar'-->
<!--        // },-->
<!--        // breakpoints: {-->
<!--        //   '@0.00': {-->
<!--        //     slidesPerView: 1,-->
<!--        //     spaceBetween: 10-->
<!--        //   },-->
<!--        //   '@0.75': {-->
<!--        //     slidesPerView: 2,-->
<!--        //     spaceBetween: 20-->
<!--        //   },-->
<!--        //   '@1.00': {-->
<!--        //     slidesPerView: 3,-->
<!--        //     spaceBetween: 40-->
<!--        //   },-->
<!--        //   '@1.50': {-->
<!--        //     slidesPerView: 6,-->
<!--        //     spaceBetween: 50-->
<!--        //   }-->
<!--        // }-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->


<!--<style scoped lang="scss">-->

<!--</style>-->
