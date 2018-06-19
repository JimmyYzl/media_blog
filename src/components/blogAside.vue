<template>
<div class="asideBox">
  <div class="blogAside">
    <div class="topInfo">
      <img src="../assets/images/top.jpg">
      <p class="topname">姚正亮</p>
      <p class="topdes">前端开发者，热爱技术，探索技术。</p>
    </div>
    <div class="line"></div>
    <ul class="tagslist">
      <li v-for="item in tags" :key="item" class="tag">{{item}}</li>
    </ul>
  </div>
  <div class="search">
    <el-input placeholder="搜索" v-model="searchVal">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tags: ["学习", "生活", "互联网", "JavaScript"],
      searchVal: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.blogAside{
  background: #fff;
  padding: 30px 20px;
  .topInfo{
    width: 100%;
    text-align: center;
    padding-bottom: 30px;
    img{
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .topname{
      font-size: 16px;
      color: #4e4e4e;
      font-weight: 500;
      margin: 12px 0 6px 0;
    }
    .topdes{
      font-size: 14px;
      line-height: 20px;
      color: #656565;
    }
  }
  .line{
    width: 100%;
    height: 0;
    border-top: 1px solid #e7eaf1;
  }
  .tagslist{
    padding-top: 30px;
    .tag{
      display: inline-block;
      width: auto;
      height: 22px;
      padding: 0 8px;
      font-size: 14px;
      color: #a6abb2;
      line-height: 22px;
      box-sizing: border-box;
      box-shadow: 0 0 0.6px #d5dae1;
      border-radius: 2px;
      background-color: #fafafa;
      cursor: pointer;
      margin-right: 7px;
      margin-bottom: 8px;
      transition: .2s;
      &:hover{
        color: #656565;
      }
    }
  }
}
.search{
  margin-top: 16px;

}
</style>
