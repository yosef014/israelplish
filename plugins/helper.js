export default (context, inject) => {
  inject('helper', {
    getUrlImage: (imageObj) => {
      const baseUrl = context.env.API_URL
      const url = baseUrl+imageObj?.data?.attributes?.url
      return url
    },
  })
}
