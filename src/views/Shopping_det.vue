<!--  -->
<template>
  <div class="">
    <NavHead></NavHead>
    <header_h></header_h>
    <main v-if="this.$store.state.Data_det.id">
      <div style="border:1px solid #eeeeee ; overflow: hidden; height: 520px;">
        <s_img></s_img>
        <s_inform></s_inform>
        <s_guess></s_guess>
      </div>
      <s_det></s_det>

    </main>
    <div v-else style="min-height: 309px;"></div>
    <Backtop></Backtop>
    <Footer_f></Footer_f>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from "@/components/NavHead";
  import Footer_f from "@/components/Footer_f";
  import s_img from '@/components/shopping_det/s_img'
  import s_inform from '@/components/shopping_det/s_inform'
  import s_guess from '@/components/shopping_det/s_guess'
  import s_det from '@/components/shopping_det/s_det'
  import header_h from '@/components/main/header_h'
  import Backtop from '@/components/Backtop'

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Shopping_det",
    components: {
      NavHead,
      Footer_f,
      s_img,
      s_inform,
      s_guess,
      s_det,
      header_h,
      Backtop
    },
    data() {
      //这里存放数据
      return {
        shop_id: this.$route.params.shop_id,
        shop_path: this.$route.params.router_path
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_history() {
        var pos = null
        for (let item in this.$store.state.Profile.History) {
          if (this.$store.state.Profile.History[item].id === this.shop_id &&
            this.$store.state.Profile.History[item].path === this.shop_path) {
            pos = item
            break
          }
        }
        var newArr = [{
          path: this.shop_path,
          id: this.shop_id,
          img: this.$store.state.Data_det.img,
          title: this.$store.state.Data_det.title,
          price: this.$store.state.Data_det.price
        }]
        var i = 1
        for (let item in this.$store.state.Profile.History) {
          if (pos != item) {
            newArr[i] = this.$store.state.Profile.History[item]
            i++
          }
        }
        this.$store.commit('PUT_History', newArr)
        this.$api.patchHistory(this.$store.state.Profile.id, {
          History: this.$store.state.Profile.History
        })
      }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      this.$api.getGoods_data(this.shop_path, this.shop_id, {}).then((res) => {
        if (sessionStorage.getItem('token'))
          if (res.onsale)
            setTimeout(() => {
              this.get_history()
            })
      }).catch((err) => {
        console.log(err);
      })
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {


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
  main {
    width: 1200px;
    margin: 10px auto;
    overflow: hidden;
  }

  .det_left {
    width: 958px;
    float: left;
    overflow: hidden;
  }

  .det_right {
    width: 240px;
    height: 8000px;
    float: right;
    border-left: 2px solid #eeeeee;
    background-color: #eeeeee;
  }
</style>