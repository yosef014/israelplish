<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>כותרת מגניבה</h1>
      <span>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס</span>
      <button>יצירת קשר</button>
    </div>
<!--    <div class="hero-section">-->
<!--      <div v-for="column of heroSectionColumns" class="here-column" :style="`background-image: url(${column.imgSrc})`">-->
<!--        <div class="overlay">-->
<!--          <i class="icon icon-play"/>-->
<!--          <h4>תוספות שיער</h4>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="welcome-section">
      <div class="welcome-section-container">

        <div class="right">
          <div class="picture">
            <img :src="$helper.getUrlImage(wellcomeSectionsData?.image)" alt="Israel-art"/>
          </div>
        </div>
        <div class="left">
          <h1>{{wellcomeSectionsData?.title}} <b>Israel Plish</b></h1>
          <p>
            {{wellcomeSectionsData?.text}}
          </p>
          <img src="https://tfhtml.themepul.com/bevan/images/segnature2.png"/>
        </div>
      </div>
    </div>

    <div class="our-services-section">
      <div class="our-services-section-container">
        <h2>{{serviceSectionsData?.title}}</h2>
        <i class="icon icon-cut" style="margin: 10px 0"/>
        <p>{{serviceSectionsData?.text}}</p>
        <div class="services-list">
          <div v-for="service of serviceSectionsData?.services?.data" class="service-block" :style="`background-image: url(${$helper.getUrlImage(service?.attributes?.image)});`">
            <div class="service-block-overlay">
              <h3>{{service?.attributes?.title}}</h3>
              <span>{{service?.attributes?.description}}</span>
              <button>ראה עוד...</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-section">
      <div class="blog-section-container">
        <h2>{{blogSectionsData?.title}}</h2>
        <i class="icon icon-cut" style="margin: 10px 0"/>
        <p>{{blogSectionsData?.text}}</p>
        <div class="blog-list">
          <div v-for="blogCard of blogSectionsData?.posts?.data" class="blog-card">
            <img :src="$helper.getUrlImage(blogCard?.attributes?.main_image)" alt="blog"/>
            <span>{{blogCard?.attributes?.title}}</span>
            <p>{{blogCard?.attributes?.description}}</p>
            <button>קרא עוד...</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async created() {
    try {
      const res = await this.$api.getHomePage()
      this.blogSectionsData = res.data.attributes.blog
      this.serviceSectionsData = res.data.attributes.services
      this.wellcomeSectionsData = res.data.attributes.wellcome
    } catch (e) {
      console.log(e)
      alert('error created')
    }

  },
  data () {
    return {
      serviceSectionsData: null,
      wellcomeSectionsData: null,
      blogSectionsData: null,
      heroSectionColumns: [
        {imgSrc: 'https://tfhtml.themepul.com/bevan/images/slider/3/1.jpg', title: 'תוספות שיער'},
        {imgSrc: 'https://tfhtml.themepul.com/bevan/images/slider/3/1.jpg', title: 'תוספות שיער'},
        {imgSrc: 'https://tfhtml.themepul.com/bevan/images/slider/3/1.jpg', title: 'תוספות שיער'},
        {imgSrc: 'https://tfhtml.themepul.com/bevan/images/slider/3/1.jpg', title: 'תוספות שיער'},
        {imgSrc: 'https://tfhtml.themepul.com/bevan/images/slider/3/1.jpg', title: 'תוספות שיער'},
      ],
      blog: [
        { title: 'מדריך חיפיפה של תוספות', imgSrc: 'https://tfhtml.themepul.com/bevan/images/blog/2.jpg', description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת', link: '#'},
        { title: 'מדריך חיפיפה של תוספור', imgSrc: 'https://tfhtml.themepul.com/bevan/images/slider/3/4.jpg', description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת', link: '#'},
        { title: 'תוספות שיער', imgSrc: 'https://tfhtml.themepul.com/bevan/images/blog/3.jpg', description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת', link: '#'},
      ]
    }
  },
}
</script>
<style scoped lang="scss">
.home-page {
  .hero-section {
    height: 645px;
    width: 100vw;
    background-image: url("https://tfhtml.themepul.com/bevan/images/slider/1/1.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $clr2;
    gap: 30px;
    padding: 0 20px;
    span {
      text-align: center;
      max-width: 700px;
    }
    button {
      background-color: $clr3;
      width: 150px;
      height: 52px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 100px;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: $clr2;
        color: $clr1;
      }
    }
  }
  //.hero-section{
  //  height: 645px;
  //  width: 100vw;
  //  display: flex;
  //  .here-column {
  //    width: 20vw;
  //    height: 100%;
  //    background-image: url("https://tfhtml.themepul.com/bevan/images/slider/3/1.jpg");
  //    cursor: pointer;
  //    background-size: cover;
  //    background-position: center;
  //
  //    .overlay {
  //      position: relative;
  //      width: 100%;
  //      height: 100%;
  //      background-color: rgba(6, 15, 25, .7);
  //      display: flex;
  //      flex-direction: column;
  //      padding: 20px;
  //      justify-content: center;
  //      h4{
  //        font-size: 24px;
  //        color: $clr2;
  //        margin-top: auto;
  //      }
  //      .icon {
  //        display: none;
  //        position: absolute;
  //        left: 0;
  //        right: 0;
  //        margin-left: auto;
  //        margin-right: auto;
  //        width: 100px; /* Need a specific value to work */
  //      }
  //    }
  //    &:hover{
  //      transform: scale(1.02);
  //      transition: all 0.4s;
  //      .icon {
  //        display: block;
  //        transition: all 0.4s ease-in;
  //      }
  //    }
  //  }
  //}
.welcome-section {
  width: 100vw;
  background-color: $clr1;
  min-height: 400px;
  height: fit-content;
  color: $clr2;
  padding: 80px 0;
  .welcome-section-container{
    width: $desktop;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 36px;
        b {
          color: $clr3;
        }
      }
      p {
        line-height: 26px;
      }
      img {
        margin-right: auto;
        height: 48px;
        width: 138px;
      }
    }
    .right {
      flex: 1;
      .picture {
        width: 445px;
        img {
          width: 100%;
        }
      }
    }
    @media (max-width: $desktop) {
      width: 100%;
      padding: 0 20px;
      flex-direction: column;
      gap: 20px;
      .right{
        order: 1;
        .picture {
          width: 100%;
        }
      }
    }
  }
}
  .our-services-section{
    color: $clr2;
    width: 100vw;
    background-color: $clr1;
    min-height: 40px;
    padding: 80px 0;
    .our-services-section-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: $desktop;
      margin: 0 auto;
      @media (max-width: $desktop) {
        width: 100%;
        padding: 0 20px;
      }
      .services-list{
        flex-wrap: wrap;
        gap: 30px;
        width: $desktop;
        margin: 20px auto 0 auto;
        justify-content: space-between;
        display: flex;
        @media (max-width: $desktop) {
          width: 100%;
        }
        .service-block {
          width: 340px;
          height: 400px;
          border-radius: 2px;
          background-size: cover;
          background-position: center;
          @media (max-width: $desktop) {
            width: 100%;
          }
          .service-block-overlay {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: rgba(6, 15, 25, .7);
            display: flex;
            flex-direction: column;
            padding: 40px 20px 20px 20px;
            align-items: center;
            justify-content: center;
            gap: 20px;
            font-size: 14px;
            h3 {
              font-size: 36px;
            }
            button {
              border: 2px solid #ffffff;
              color: #fff;
              padding: 6px 15px;
              font-weight: normal;
              border-radius: 100px;
              &:hover {
                background-color: $clr3;
                transition: all 0.4s ease-in-out;
                border: 2px solid $clr3;

              }
            }
          }
          &:hover {
            border-bottom: 1px solid $clr3;
            transition: all 0.4s ease-in-out;
            cursor: pointer;
            button {
              background-color: $clr3;
              transition: all 0.4s ease-in-out;
              border: 2px solid $clr3;
            }
          }
        }

      }
    }
  }
  .blog-section {
    padding: 80px 0;
    width: 100vw;
    background-color: $clr4;
    min-height: 400px;
    .blog-section-container {
      width: $desktop;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      @media (max-width: $desktop) {
        width: 100%;
        padding: 0 20px;
      }
       color: $clr2;
      .blog-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .blog-card {
          display: flex;
          flex-direction: column;
          width : 30%;
          height: 480px;
          gap: 20px;
          @media (max-width: $desktop) {
            width: 100%;
          }
          img{
            width: 100%;
            min-height: 250px;
            object-fit: cover;
            object-position: center;
          }
          span {
            font-size: 18px;
            font-weight: 600;
          }
          button {
            color: #fff;
            font-weight: bold;
            border-radius: 100px;
            border: 2px solid transparent;
            background: #282e3e;
            padding: 8px 25px;
            width: fit-content;
            &:hover {
              background-color: $clr3;
              transition: all 0.4s ease-in-out;
            }
          }
          &:hover{
            cursor: pointer;
            scale: 1.02;
            transition: all 0.4s ease-in-out;

            button{
              background-color: $clr3;
              transition: all 0.4s ease-in-out;
            }
          }
        }
      }
    }
  }
}

</style>
