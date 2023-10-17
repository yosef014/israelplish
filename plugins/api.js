export default (context, inject) => {
  inject('api', {
    getHomePage: () => context.$axios.$get(`api/home-page?populate=blog.posts.main_image,services.services.image,wellcome.image`),
    getMenu: () => context.$axios.$get(`api/menu?populate=link`),
  })
}
