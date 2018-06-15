<template>
  <div class="blogList">
    <div class="blogImg" v-if="blogimage" :style="{backgroundImage: 'url('+blogimage+')', backgroundSize: 'cover'}"></div>
    <section>
      <h2>{{blogtitle}}</h2>
      <p class="description">{{blogdescription}}</p>
    </section>
    <footer>
      <ul class="tags">
        <li v-for="item in blogtags" :key="item" class="tag">{{item}}</li>
      </ul>
      <time>{{date}}</time>
    </footer>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      
    }
  },

  props: {
    blogimage: {
      type: String,
      default: null,
      required: false
    },
    blogtitle: {
      type: String,
      default: null,
      required: true
    },
    blogdescription: {
      type: String,
      default: null,
      required: true
    },
    blogtags: {
      type: Array,
      default: () => [],
      required: false
    },
    blogdate: {
      type: String,
      default: null,
      required: true
    },
    blogid: {
      type: String,
      default: null,
      required: true
    }
  },

  computed: {
    date: () =>{
      return moment(this.blogdate).format('YYYY-MM-DD HH:mm:ss');
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 700px) {
  .blogImg{
    height: 250px !important;
  }
  section{
    h2{
      font-size: 18px !important;
    }
  }
  footer{
    .tags{
      display: none !important;
    }
    time{
      float: left !important;
      text-align: left !important;
    }
  }
}
.blogList{
  padding: 30px 20px;
  background: #fff;
  .blogImg{
    width: 100%;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 14px;
  }
  >section{
    h2{
      color: #4e4e4e;
      font-size: 24px;
      padding-left: 10px;
    }
    .description{
      font-size: 16px;
      line-height: 26px;
      color: #656565;
    }
  }
  >footer{
    height: 22px;
    margin-top: 16px;
    .tags{
      max-width: 70%;
      overflow: hidden;
      float: left;
      .tag{
        display: inline-block;
        height: 22px;
        line-height: 22px;
        padding: 0 8px;
        color: #a6abb2;
        background: #fafafa;
        font-size: 14px;
      }
    }
    time{
      float: right;
      text-align: right;
      color: #a9b0bc;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>

