<template>
  <div class="news news-width">
    <div class="news-title">
      {{ newsTitle }}
      <div class="news-date">{{ newsDate }}</div>
    </div>
    <div class="picture">
      <img :src="imageUrl">
    </div>
    <div class="news-article news-article-width">
      <div><span class="mgr-10"></span>{{ newsArticle }}</div>
      <div class="author">{{ newsAuthor }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDetailCard',
  props: {
    newsTitle: {
      type: String,
      default: null
    },
    newsDate: {
      type: String,
      default: null
    },
    newsArticle: {
      type: String,
      default: null
    },
    newsPicture: {
      type: String,
      default: null
    },
    newsAuthor: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      imageUrl: require('../../../../img/' + this.newsPicture)
    }
  }
}
</script>

<style scoped>
.news {
  height: auto;
  background-color: #333333;
  border-radius: 30px;
  margin: 100px auto;
}
.news-title {
  font-size: 25px;
  padding: 20px 20px 0;
  border-bottom: solid 2px #1C1B18;
}
.news-date {
  font-size: 18px;
  text-align: right;
}
.picture {
  margin: 30px 20px;
  text-align: center;
}
.news-article {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 20px;
}
.mgr-10 {
  margin-right: 10px;
}
.author {
  text-align: right;
  padding: 10px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .news-width {
    width: 90%;
  }
  .picture img {
    width: 100%;
    display: inline-block;
  }
  .news-article-width {
    width: 80%;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .news-width {
    width: 90%;
  }
  .picture img {
    width: 100%;
    display: inline-block;
  }
  .news-article-width {
    width: 85%;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .news-width {
    width: 90%;
  }
  .picture img {
    max-width: 400px;
    max-height: 300px;
    display: inline-block;
  }
  .news-article-width {
    width: 60%;
  }
}

@media screen and (min-width:960px) {
  .news-width {
    width: 60%;
  }
  .picture img {
    max-width: 400px;
    max-height: 300px;
    display: inline-block;
  }
  .news-article-width {
    width: 60%;
  }
}
</style>
