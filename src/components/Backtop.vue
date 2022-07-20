<!--  -->
<template>
  <div class="backtop" v-show="top>=200">
    <router-link to="/Car" class="car"></router-link>
    <span href="#" class="new" @click="news">
      <span class="dis"></span>
    </span>
    <span class="develop">
      <span class="dis"></span>
    </span>
    <span class="back_top" @click="get_top"></span>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Backtop",
    components: {},
    data() {
      //这里存放数据
      return {
        top: ''
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_Scroll() {
        // this.top = window.pageYOffset
        this.top = document.documentElement.scrollTop
      },
      get_top() {
        document.documentElement.scrollTop = 0
      },
      news() {
        this.$prompt('', '提交反馈', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /^[1-4]{4}$/,
          inputPattern: /^[\u4e00-\u9fa5]{2,20}$/,
          inputErrorMessage: '请输入2到20个字',
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then((value) => {
          this.$api.get_news({}).then((res) => {
            var arr = [{
              id: sessionStorage.getItem('token'),
              message: value.value
            }]
            arr.push(...res.news)
            this.$api.post_news({ news: arr })

          })
          this.$message({
            type: 'success',
            message: '提交成功'
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        })
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      window.addEventListener('scroll', this.get_Scroll)
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
  .backtop {
    height: 1px;
    position: fixed;
    bottom: 250px;
    right: 5px;
  }

  .backtop a {
    position: relative;
    display: block;
    height: 52px;
    width: 45px;
    margin-top: 2px;
    background: url(../assets/img/toolbar.png);
    transition: background-position 0.5s;
  }

  .backtop>span {
    position: relative;
    display: block;
    height: 52px;
    width: 45px;
    margin-top: 2px;
    background: url(../assets/img/toolbar.png);
    transition: background-position 0.5s;
  }

  .backtop .car {
    background-position: 0 -761px;
  }

  .backtop .car:hover {
    background-position: 0 -821px;
  }

  .backtop .new {
    background-position: 0 -389px;
  }

  .backtop .new:hover {
    background-position: 0 -451px;
  }

  .backtop .develop {
    background-position: 0 -513px;
  }

  .backtop .develop:hover {
    background-position: 0 -575px;
  }

  .dis {
    background: url(../assets/img/toolbar.png);
    height: 160px;
    width: 155px;
    background-position: 0 -15px;
    position: absolute;
    right: 45px;
    bottom: -10px;
    display: none;
  }

  .backtop .develop:hover .dis,
  .backtop .new:hover .dis {
    display: block;
  }

  .backtop .back_top {
    background-position: 0 -637px;

  }

  .backtop .back_top:hover {

    background-position: 0 -699px;
  }
</style>