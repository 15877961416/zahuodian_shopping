<!--  -->
<template>
  <div class="inform" v-if="$store.state.Data_det.sales&&$store.state.Data_det.size">
    <h3>
      {{$store.state.Data_det.title}}
    </h3>
    <div class="sales">
      <span>月销量 {{$store.state.Data_det.sales}}</span>
      <span>赠积分 5</span>
    </div>
    <div class="size" v-if="$store.state.Data_det.size">
      <span style="border: none;margin-left: 0;padding: 0;">大小</span>
      <span v-for="(item,index) in $store.state.Data_det.size" :class="{active:size_index==index}"
        @click="size_index=index,size=item.size">{{item.size}}</span>
    </div>

    <div class="color" v-if="$store.state.Data_det.color">
      <span style="border: none;margin-left: 0;padding: 0;">颜色</span>
      <span v-for="(item,index) in $store.state.Data_det.color" :class="{active:color_index==index}"
        @click="color_index=index,color=item.color">{{item.color}}</span>
    </div>

    <div class="numb">
      数量
      <el-input-number v-model="num" :min="1" :max="99" size="mini" style="margin-left: 15px;">
      </el-input-number>
    </div>
    <div class="price">
      价格
      <div>
        ¥{{($store.state.Data_det.price*num)|numFilter}}
      </div>
    </div>
    <el-button type="danger" style="width: 200px;" @click="buy_in">立即购买</el-button>
    <el-button type="danger" style="width: 200px; margin-left: 40px;" @click="buy_car">加入购物车</el-button>
    <el-button type="danger" style="width: 200px; margin-top: 20px;margin-right: 256px;" @click="get_collect">收藏
    </el-button>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    filters: {
      numFilter(value) {
        let realVal = parseFloat(value).toFixed(2)
        return realVal
      }
    },
    name: "s_inform",
    components: {},
    data() {
      //这里存放数据
      return {
        num: 1,
        size: this.$store.state.Data_det.size[0].size,
        size_index: 0,
        color: this.$store.state.Data_det.color[0].color,
        color_index: 0,
        shop_path: this.$route.params.router_path,
        shop_id: this.$route.params.shop_id
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      buy_in() {
        if (sessionStorage.getItem('token')) {
          var newArr = [{
            path: this.shop_path,
            id: this.shop_id,
            size: this.size,
            num: this.num,
            color: this.color,
            img: this.$store.state.Data_det.img,
            title: this.$store.state.Data_det.title,
            price: this.$store.state.Data_det.price,
            sales: this.$store.state.Data_det.sales,
          }]
          sessionStorage.setItem('Order', JSON.stringify(newArr))

          this.$router.push('/Order')
        } else {
          this.$message({
            message: "您还没有登录!",
          })
        }
      },
      buy_car() {
        if (sessionStorage.getItem('token')) {
          var pos = null
          // for (let i = 0; i < this.$store.state.Profile.Car.length; i++) {
          for (let i in this.$store.state.Profile.Car) {

            if (this.$store.state.Profile.Car[i].id === this.shop_id &&
              this.$store.state.Profile.Car[i].size === this.size &&
              this.$store.state.Profile.Car[i].color === this.color) {
              pos = i
              break
            }
          }
          if (pos !== null) {
            this.$store.commit('SET_Num', pos)
            this.$store.commit('SET_Car_num', this.num + this.$store.state.Profile.Car[pos].num)
          } else {
            var newArr = [{
              path: this.shop_path,
              id: this.shop_id,
              size: this.size,
              num: this.num,
              color: this.color,
              img: this.$store.state.Data_det.img,
              title: this.$store.state.Data_det.title,
              price: this.$store.state.Data_det.price,
              sales: this.$store.state.Data_det.sales,
              checked: false
            }]
            var i = 1
            for (let item in this.$store.state.Profile.Car) {
              newArr[i] = this.$store.state.Profile.Car[item]
              i++
            }
            this.$store.commit('PUT_Car', newArr)
            // this.$store.commit('SET_Car', {
            //   path: this.shop_path,
            //   id: this.shop_id,
            //   size: this.size,
            //   num: this.num,
            //   color: this.color,
            //   img: this.$store.state.Data_det.img,
            //   title: this.$store.state.Data_det.title,
            //   price: this.$store.state.Data_det.price,
            //   checked: false
            // })
          }
          this.$api.patchCar(this.$store.state.Profile.id, {
            Car: this.$store.state.Profile.Car
          })
          this.$message({
            message: "成功加入购物车!",
            type: "success"
          })
        } else {
          this.$message({
            message: "您还没有登录!",
          })
        }
      },
      get_collect() {
        if (sessionStorage.getItem('token')) {
          var pos = null
          for (let item in this.$store.state.Profile.Collect) {
            if (this.$store.state.Profile.Collect[item].id === this.shop_id &&
              this.$store.state.Profile.Collect[item].path === this.shop_path) {
              console.log(this.$store.state.Profile.Collect[item].id, this.shop_id);
              console.log(this.$store.state.Profile.Collect[item].path, this.shop_path);
              pos = item
              break
            }
          }
          var newArr1 = [{
            path: this.shop_path,
            id: this.shop_id,
            img: this.$store.state.Data_det.img,
            title: this.$store.state.Data_det.title,
            price: this.$store.state.Data_det.price
          }]
          var i = 1
          for (let item in this.$store.state.Profile.Collect) {
            if (pos != item) {
              newArr1[i] = this.$store.state.Profile.Collect[item]
              i++
            }
          }
          this.$store.commit('PUT_Collect', newArr1)
          this.$api.patchCollect(this.$store.state.Profile.id, {
            Collect: this.$store.state.Profile.Collect
          })
          if (pos) this.$message({
            message: '您已收藏'
          })
          else this.$message({
            message: '收藏成功'
          })
        } else {
          this.$message({
            message: "您还没有登录!",
          })
        }
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
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
  .inform {
    width: 615px;
    float: left;
    margin: 20px 0 0 20px;
    padding: 15px;
    padding-left: 40px;
  }

  .inform h3 {
    color: #ff0036;
    font-size: 15px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .size,
  .color,
  .numb {
    height: 20px;
    text-align: left;
    font-size: 15px;
    margin-top: 30px;
    /* float: left; */
  }

  .size span,
  .color span {
    float: left;
    border: 1px solid #eeeeee;
    padding: 5px 15px;
    margin-left: 15px;
  }

  .size span:hover,
  .color span:hover {
    border-color: #e5511d;
  }

  .active {
    border-color: #e5511d !important;
  }

  .price {
    text-align: left;
    font-size: 15px;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .price div {
    display: inline-block;
    color: #ff0036;
    margin-left: 15px;
    font-size: 40px;
    position: relative;
    top: 10px;
  }

  .sales {
    width: 100%;
    height: 40px;
    line-height: 20px;
    margin: 25px 0;
    padding: 10px 0;
    border-top: 1px dashed #666464;
    border-bottom: 1px dashed #666464;
    overflow: hidden;
  }

  .sales :nth-child(1) {
    border-right: 1px dashed #666464;
  }

  .sales span {
    display: block;
    float: left;
    text-align: center;
    width: 50%;
  }
</style>