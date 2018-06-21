<template>
	<div class="home">
		<header>
			<nav class="nav">
				<div class="logo"></div>
				<div class="routeBtn">
					<a class="home-route">主页</a>
				</div>
			</nav>
			<div class="welcome">
				<h1>Welcome to my blog</h1>
				<p>欢迎来到我的博客</p>
			</div>
		</header>

		<div class="main">
			<div class="row">
				<article>
          <template v-for="item in val">
            <BlogList :key="item.id" :blogimage="item.image" :blogtitle="item.title" :blogdescription="item.description" :blogid="item.id" :blogdate="item.date" :blogtags="item.tags" @article="articleFn"></BlogList>
          </template>
				</article>
				<aside>
          <blogAside @searchList="searchList" @tagFn="tagFn"></blogAside>
        </aside>
			</div>
		</div>
	</div>
</template>

<script>
import BlogList from '../components/blogList';
import blogAside from '../components/blogAside';
import Api from '../api/index.js';
export default {
  data() {
    return {
      val: [],
      minheight: null
    }
  },

  components: {
    BlogList: BlogList,
    blogAside: blogAside
  },

  created () {
		this.getBlogFn()
	},
	
	methods: {
		getBlogFn(page, q, tag) {
			var data = {};
			if(page){
				data.page = page;
			}
			if(q){
				data.q = q;
			}
			if(tag){
				data.tag = tag;
			}
			Api.getlist(data, (data) => {
				if(data.data.status == "ok") {
					this.val = data.data.data;
				} else {
					this.$message.error('数据请求失败');
				}
			})
		},

		searchList(q) {
			this.getBlogFn(1, q);
		},

		tagFn(tag) {
			this.getBlogFn(1, null, tag);
		},

		articleFn(id) {
			this.$router.push({path: "/article", query: {id: id}});
		}
	}

};

</script>

<style lang="scss" scoped>
	@media only screen and (max-width: 700px) {
    .nav{
      display: none !important;
    }
		.row {
			width: 100%;
    }
    .main{
      min-height: 1000px !important;
    }
		article {
			width: 100%;
		}
		aside {
			display: none;
		}
		header {
			height: 400px;
			.routeBtn {
				display: none !important;
			}
			>.welcome {
				padding-top: 100px;
				>h1 {
					line-height: 95px;
					font-size: 2.2em !important;
				}
				>p {
					font-size: 1.4em !important;
				}
			}
		}
	}

	@media only screen and (max-width: 1000px) and (min-width: 700px) {
		.row {
			width: 700px;
			margin: 40px auto;
		}
		article {
			width: 700px;
		}
		aside {
			display: none;
		}
		header {
			height: 420px;
			>.welcome {
				padding-top: 105px;
			}
		}
	}

	@media only screen and (min-width: 1000px) {
		.row {
			width: 1000px;
			margin: 40px auto;
			display: flex;
			justify-content: space-around;
		}
		article {
			width: 700px;
		}
		aside {
			width: 240px;
		}
		header {
			height: 420px;
			>.welcome {
				padding-top: 105px;
			}
		}
	}

	.home {
		background-image: url(../assets/images/aa33566bad.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		header {
			position: relative;
			.nav {
				position: absolute;
				top: 0;
				width: 100%;
				height: 60px;
				background: rgba(255, 255, 255, 0.5);
				.logo {
					margin-left: 2%;
					height: 60px;
					width: 200px;
					float: left;
					background-image: url(../assets/images/logo.png);
					background-repeat: no-repeat;
					background-size: auto 100%;
				}
				.routeBtn {
					height: 60px;
					width: 200px;
					display: flex;
					margin-right: 2%;
					align-items: center;
					justify-content: center;
					float: right;
					a {
						font-size: 18px;
						display: inline-block;
						padding: 0 10px;
						cursor: pointer;
					}
				}
			}
			.welcome {
				height: 150px;
				text-align: center;
				>h1 {
					color: #fff;
					height: 110px;
					line-height: 60px;
					margin: 0;
					font-size: 3rem;
					padding: 25px 0;
				}
				>p {
					color: #fff;
					height: 40px;
					line-height: 40px;
					font-size: 2rem;
				}
			}
		}
		.main {
			background: #f7f8fa;
      width: 100%;
      overflow: hidden;
		}
	}

</style>
