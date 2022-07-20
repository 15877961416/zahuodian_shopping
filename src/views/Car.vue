<!--  -->
<template>
  <div>
    <NavHead></NavHead>
    <header_h></header_h>
    <main>
      <div class="car">
        <div class="car_title1">
          <el-checkbox :value="$store.state.App.All_checked" @change="get_all_checked"></el-checkbox>
        </div>
        <div class="car_title2">商品图片</div>
        <div class="car_title3">商品描述</div>
        <div class="car_title4">商品单价</div>
        <div class="car_title5">商品款式</div>
        <div class="car_title6">商品数量</div>
        <div class="car_title7">商品价格</div>
        <div class="car_title8">删除商品</div>
      </div>

      <div class="container">
        <div v-for="(item,index) in $store.state.Profile.Car">
          <div class="cart">
            <div class="cart_item1">
              <el-checkbox :value="item.checked" @change="checkbox_get(index)"></el-checkbox>
            </div>
            <div class="cart_item2">
              <router-link :to="'/shopping_det/'+item.path+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" alt="暂无图片" />
              </router-link>
            </div>
            <div class="cart_item3">
              <router-link :to="'/shopping_det/'+item.path+'/'+item.id">
                <p>
                  {{item.title}}
                </p>
              </router-link>

            </div>
            <div class="cart_item4">¥<span>{{item.price}}</span></div>
            <div class="cart_item5"><span>{{item.color+'，'+item.size}}</span></div>

            <div class="cart_item6">
              <div v-if="check_num==index">
                <el-input-number size="mini" v-model="num" style="height: 30px;"></el-input-number>
                <el-button style="width: 50px; padding: 5px;position: relative; bottom: 65px;" @click="sure(index)">确定
                </el-button>
                <el-button style="width: 50px; padding: 5px; position: relative; bottom: 65px;" @click="cancel">取消
                </el-button>
              </div>

              <span v-else class="shop_num">{{item.num}}<span class="edit" @click="get_num(index)"><i
                    class="el-icon-edit"></i>
                  编辑</span></span>
            </div>

            <div class="cart_item7">¥<span>{{item.price*item.num|numFilter}}</span></div>
            <div class="cart_item8">
              <el-button style="border: 0; background-color: #eeeeee;" @click="delete_shop(index)">删除商品</el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="car_bottom">
        <el-button type="danger" style="float: left;" @click="delete_choose">删除选中商品</el-button>
        <el-button type="danger" style="float: left;" @click="delete_all">清空购物车</el-button>
        <el-button type="danger" style="float: right;" @click="pay">生成订单</el-button>
        <div class="total_price">总计：<span>￥{{total_price}}</span></div>
      </div>

    </main>
    <Footer_f></Footer_f>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from "@/components/NavHead";
  import header_h from '@/components/main/header_h'
  import Footer_f from '@/components/Footer_f'

  export default {
    //import引入的组件需要注入到对象中才能使用
    filters: {
      numFilter(value) {
        let realVal = parseFloat(value).toFixed(2)
        return realVal
      }
    },
    name: "Car",
    components: {
      NavHead,
      header_h,
      Footer_f
    },
    data() {
      //这里存放数据
      return {
        num: 1,
        check_num: null,
        all_checked: true,
        total_price: '0.00',
        change_price: 1
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_num(index) {
        this.check_num = index
      },
      sure(index) {
        this.check_num = null
        this.$store.commit('SET_Num', index)
        this.$store.commit('SET_Car_num', this.num)
        this.$store.commit('SET_Car_checked', false)
        this.$api.patchCar(this.$store.state.Profile.id, {
          Car: this.$store.state.Profile.Car
        })
        this.num = 1
        this.get_total_price()

      },
      cancel() {
        this.check_num = null
        this.num = 1
      },
      delete_shop(index) {
        var newArr = []
        var i = 0
        for (let item in this.$store.state.Profile.Car) {
          // console.log(this.$store.state.Profile.Car[item]);
          if (item != index) {
            newArr[i] = this.$store.state.Profile.Car[item]
            i++;
          }
        }
        this.$store.commit('PUT_Car', newArr)
        this.$api.patchCar(this.$store.state.Profile.id, {
          Car: this.$store.state.Profile.Car
        })
        this.get_total_price()

      },
      checkbox_get(index) {
        this.$store.commit('SET_Num', index)
        this.$store.commit('SET_Car_checked', !this.$store.state.Profile.Car[index].checked)
        for (let item in this.$store.state.Profile.Car) {
          if (this.$store.state.Profile.Car[item].checked) {
            this.all_checked = true
          } else {
            this.all_checked = false
            break
          }
        }
        if (this.all_checked !== this.$store.state.App.All_checked)
          this.$store.commit('SET_All_checked', !this.$store.state.App.All_checked)
        this.get_total_price()

      },
      get_all_checked() {
        this.$store.commit('SET_All_checked', !this.$store.state.App.All_checked)
        for (let item in this.$store.state.Profile.Car) {
          this.$store.commit('SET_Num', item)
          this.$store.commit('SET_Car_checked', !this.$store.state.Profile.Car[item].checked)
        }
        // this.$store.commit('SET_All_checked', this.all_checked)
        this.get_total_price()

      },
      delete_choose() {
        var newArr = []
        var i = 0
        for (let item in this.$store.state.Profile.Car) {
          // console.log(this.$store.state.Profile.Car[item]);
          if (this.$store.state.Profile.Car[item].checked == false) {
            newArr[i] = this.$store.state.Profile.Car[item]
            i++;
          }
        }
        this.$store.commit('PUT_Car', newArr)
        this.$api.patchCar(this.$store.state.Profile.id, {
          Car: this.$store.state.Profile.Car
        })
        this.get_total_price()

      },
      delete_all() {
        var newArr = []
        this.$store.commit('PUT_Car', newArr)
        this.$api.patchCar(this.$store.state.Profile.id, {
          Car: this.$store.state.Profile.Car
        })
        this.get_total_price()

      },
      get_total_price() {
        for (let item in this.$store.state.Profile.Car) {
          if (this.$store.state.Profile.Car[item].checked) {
            var price1 = this.total_price
            var price2 = parseFloat(this.$store.state.Profile.Car[item].num * this.$store.state.Profile.Car[item].price).toFixed(2)
            var r1, r2, m;
            try {
              r1 = price1.toString().split(".")[1].length
            } catch (e) {
              r1 = 0
            }
            try {
              r2 = price2.toString().split(".")[1].length
            } catch (e) {
              r2 = 0
            }
            m = Math.pow(10, Math.max(r1, r2))
            this.total_price = ((price1 * m + price2 * m) / m).toFixed(2)
          }
        }
      },
      pay() {
        var newArr = []
        for (let item in this.$store.state.Profile.Car) {
          if (this.$store.state.Profile.Car[item].checked) {
            newArr.push(this.$store.state.Profile.Car[item])
          }
        }
        // console.log(newArr);
        sessionStorage.setItem('Order', JSON.stringify(newArr))

        this.$router.push('/Order')
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

      // this.total_checked = this.all_checked
      // this.$store.commit('SET_All_checked', this.all_checked)
      // console.log(this.$store.state.App.All_checked);
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
  header {
    height: 50px;
    width: 1200px;
    margin: 30px auto;
  }

  main {
    height: 700px;
    position: relative;
    overflow: hidden;
    width: 1200px;
    margin: 10px auto;
  }

  .car {
    width: 100%;
    height: 45px;
    background-color: #eeeeee;
  }

  .container {
    overflow: auto;
    width: 100%;
    height: 583px;
  }

  .cart {
    width: 100%;
    background-color: #eeeeee;
    height: 120px;
    margin-top: 15px;
    padding: 10px 0;
    text-align: center;
    vertical-align: middle;
  }

  .car>div {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
  }

  .cart>div {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    overflow: hidden;
  }

  .car_title1,
  .cart_item1 {
    width: 50px;
  }

  .car_title2,
  .cart_item2 {
    width: 140px;
  }

  .car_title3,
  .cart_item3 {
    width: 200px;
  }

  .car_title4,
  .car_title5,
  .car_title6,
  .car_title7,
  .car_title8,
  .cart_item4,
  .cart_item5,
  .cart_item6,
  .cart_item7,
  .cart_item8 {
    width: 140px;
  }

  .cart_item6 div {
    height: 100%
  }

  img {
    height: 100px;
    width: 80px;
  }

  .cart_item3 p {
    width: 100%;
    line-height: 18px;
    font-size: 12px;
    margin-top: 37px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .cart_item8 span:hover {
    cursor: pointer;
    text-decoration: underline;
    font-size: 14px;
  }

  .car_bottom {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 40px;
    margin-top: 15px;
    font-size: 16px;
    background-color: #eeeeee;
    line-height: 40px;
  }

  .total_price {
    float: right;
  }

  .total_price>span {
    color: #ff0036;
    font-size: 16px;
  }

  .shop_num {
    float: left;
    text-align: left;
    display: block;
    margin-left: 75px;
    width: 50px;
  }

  .edit {
    float: right;
    display: none;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .shop_num:hover .edit {
    display: inline-block;

  }
</style>