<!--  -->
<template>
  <div class="search" ref="show">
    <el-input class="search_input" type="text" v-model="news" placeholder="平板电脑" prefix-icon="el-icon-search" clearable
      @keydown.enter.native="search_news" @focus="show_history">
    </el-input>
    <el-button class="search_button el-icon-search" type="text" @click="search_news">搜索</el-button>
    <div :class="{active:isActive,history:1}">
      <ul>
        <li v-for="(item,index) in $store.state.Profile.Guess" @click="get_history(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Search",
    components: {},
    data() {
      //这里存放数据
      return {
        news: "",
        // float: false,
        isActive: false
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      search_news() {
        this.isActive = 0
        if (this.news !== '') {
          var arr = []
          this.$store.commit("PUT_Search_data", arr)
          var path = ['Clothes', 'Shoe', 'Life', 'Learn', 'Digital', 'Sports']
          for (let item in path) {
            this.$api.getSearch(path[item], this.news, {}).then((res) => {
              if (res.length) {
                if (sessionStorage.getItem('token')) {
                  var newArr = []
                  newArr[0] = this.news
                  for (let item in this.$store.state.Profile.Guess) {
                    if (this.$store.state.Profile.Guess[item] !== this.news)
                      newArr.push(this.$store.state.Profile.Guess[item])
                  }
                  // console.log(newArr);
                  this.$store.commit("PUT_My_guess", newArr)
                  this.$api.patchGuess(sessionStorage.getItem('token'), {
                    Guess: newArr
                  })
                }
                // console.log(path[item]);
                // this.get_float()
                this.get_searchData(res)


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
          this.$message({
            message: '请输入搜索词'
          })
        }

        // console.log(this.float);

      },
      // get_float() {
      //   this.float = true;
      //   // console.log(this.float);
      // },

      get_searchData(res) {
        // console.log(this.float);
        // console.log(res);
        // var newArr = this.$store.state.Search_data
        for (let item in res) {
          this.$store.commit("SET_Search_data", res[item])
          // newArr.push(res[item])
        }
        // console.log(this.$store.state.Search_data);
        sessionStorage.setItem('Search_data', JSON.stringify(this.$store.state.Search_data))
        if (this.$route.name !== 'Search_data')
          this.$router.replace('/Shopping_list/Search_data')
        else this.$router.go(0)

        // console.log(newArr);
        // this.$store.commit("PUT_Search_data", res)




        // sessionStorage.setItem('Search_data', JSON.stringify(res))
        // if (this.$route.name !== 'Search_data')
        //   this.$router.replace('/Shopping_list/Search_data')
      },
      show_history() {
        this.isActive = true
      },
      is_show_history() {
        this.isActive = false
      },
      get_history(item) {
        this.news = item
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      document.addEventListener('click', (e) => {
        if (this.$refs.show) {
          let isSelf = this.$refs.show.contains(e.target)
          if (!isSelf) {
            this.isActive = false
          }
        }
      })
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
  .search {
    float: left;
    width: 730px;
    height: 46px;
    margin-left: 50px;
    padding-top: 1px;
    background: white;
    border: 2px solid #FF0036;
    /* overflow: hidden; */
  }

  .search_input {
    float: left;
    width: 605px;
  }

  .search>>>.el-input__inner {
    border: 0;
  }

  .search_button {
    float: left;
    width: 120px;
    height: 40px;
    background-color: #FF0036;
    color: #fff;
  }

  .history {
    display: none;
    position: relative;
    top: 3px;
    right: 2px;
    width: 605px;
    background-color: #eeeeee;
    z-index: 999;
    overflow: hidden;
  }

  .history ul li {
    height: 30px;
    width: 100%;
    line-height: 20px;
    text-align: left;
    font-size: 12px;
    padding: 5px 0;
    padding-left: 15px;

    /* float: left; */
  }

  .history ul li:hover {
    background-color: #fff;
  }

  .active {
    display: block !important;
    /* display: none !important; */
  }
</style>