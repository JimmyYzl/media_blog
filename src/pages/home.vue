<template>
  <div class="home">
    <header>
      <nav class="nav"></nav>
    </header>

    <div class="main">
      <div class="row">
        <article></article>
        <aside></aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 700px) {
  .row {
    width: 100%;
  }
  article {
    width: 100%;
  }
  aside {
    display: none;
  }
  header {
    height: 400px;
  }
}
@media only screen and (max-width: 960px) and (min-width: 700px){
  .row{
    width: 700px;
    margin: 0 auto;
  }
  article {
    width: 700px;
  }
  aside {
    display: none;
  }
  header {
    height: 420px;
  }
}
@media only screen and (min-width: 960px) {
  .row{
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  article {
    width: 700px;
  }
  aside {
    width: 200px;
  }
  header {
    height: 420px;
  }
}
.home {
  background-image: url(http://oxnqkx7p0.bkt.clouddn.com/cassie-boca-293379-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 1090px;
  header {
    position: relative;
    .nav {
      position: absolute;
      top: 0;
      width: 100%;
      height: 60px;
      background: rgba(255, 255, 255, 0.5);
    }
  }
  .main {
    background: #fff;
    width: 100%;
  }
  article {
    background: #ccf;
    height: 800px;
  }
  aside {
    background: #aaa;
    height: 800px;
  }
}
</style>

