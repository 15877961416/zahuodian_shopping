<!--  -->
<template>
  <div>
    <div class="item_shopping">
      <ul v-for="(item,index) in guess_data" v-if="guess">
        <li v-if="item.onsale">
          <router-link :to="'/shopping_det/'+item.path+'/'+item.id">
            <img :src="$store.state.App.baseURL+item.img" style="
                margin: 0 auto;
                display: block;
                width: 200px;
                height: 250px;
              " />
            <span class="price">{{'￥'+item.price}}</span>
            <span class="num">{{'月销 '+item.sales}}</span>
            <a href="#">
              <p>
                {{item.title}}
              </p>
            </a>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Guess",
    components: {},
    data() {
      //这里存放数据
      return {
        guess: 1,
        guess_data: [],
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_guess(res) {
        var newArr = []
        for (let item in res) {
          var float = true
          for (let it in this.guess_data)
            if (res[item].id == this.guess_data[it].id && res[item].path == this.guess_data[it].path) {
              float = false
            }
          if (float) {
            this.guess_data.push(res[item])
            // this.$store.commit("SET_Guess", res[item])
            // newArr.push(res[item])
          }
          // this.$forceUpdate()

        }

        // console.log(this.guess);
        // this.guess = 0
        // this.guess = 1
        // console.log(this.$store.state.Search_data);
        // sessionStorage.setItem('Search_data', JSON.stringify(this.$store.state.Search_data))
        // if (this.$route.name !== 'Search_data')
        //   this.$router.replace('/Shopping_list/Search_data')
        // else this.$router.go(0)

      },

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      if (sessionStorage.getItem("Guess")) {
        this.guess_data = JSON.parse(sessionStorage.getItem("Guess"))
      }
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("Guess", JSON.stringify(this.guess_data))
      })
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      if (sessionStorage.getItem('token')) {
        var arr = []
        this.$store.commit("PUT_Guess", arr)
        var path = ['Clothes', 'Shoe', 'Life', 'Learn', 'Digital', 'Sports']
        for (let item in path) {
          for (let it in this.$store.state.Profile.Guess)
            this.$api.getSearch(path[item], this.$store.state.Profile.Guess[it], {}).then((res) => {
              if (res.length) {

                // console.log(path[item]);
                // this.get_float()
                this.get_guess(res)


                // setTimeout(() => {
                //   console.log(this.float);

                // })
                // else this.$router.go(0)
                // return true
              }
            })
        }

      }
      else {
        var path = ['Clothes', 'Shoe', 'Life', 'Learn', 'Digital', 'Sports']
        for (let item in path) {
          this.$api.getGoods({}, path[item]).then((res) => {
            this.get_guess(res)
            // return res
          })
        }
      }

      // console.log(res);
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>
<style scoped>
  .item_shopping {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .item_shopping ul {
    width: 1300px;
  }

  .item_shopping ul li {
    width: 230px;
    float: left;
    margin-right: 12px;
    margin-top: 15px;
    padding: 12px;
    height: 350px;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ddd;
  }

  .item_shopping ul li:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  }

  .item_shopping ul li .price {
    float: left;
    display: block;
    margin-top: 5px;
    line-height: 24px;
    font-size: 20px;
    color: #FD5155;
  }

  .item_shopping ul li .num {
    float: right;
    display: block;
    margin-top: 13px;
    line-height: 24px;
    font-size: 13px;
    color: #9e9d9d;
  }

  .item_shopping ul li p {
    display: block;
    width: 200px;
    height: 40px;
    line-height: 20px;
    font-size: 12px;
    color: #111;
    margin: 5px auto 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .item_shopping ul li p:hover {
    text-decoration: underline;
    color: #ff0036;
  }
</style>