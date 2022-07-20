<!--  -->
<template>
  <div>
    <div class="avatar">
      <span>
        <img :src="$store.state.App.baseURL+'img/avatar/man.jpg'" v-if="$store.state.Profile.Sex=='男'"
          :title="$store.state.Profile.Nickname">
        <img :src="$store.state.App.baseURL+'img/avatar/woman.jpg'" v-else :title="$store.state.Profile.Nickname">
      </span>
      <h2 v-if="$store.state.Profile.Nickname">{{$store.state.Profile.Nickname}}</h2>
      <h2 v-else>{{'zhd_'+$store.state.Profile.id}}</h2>
    </div>
    <el-form class="account" label-position="left" label-width="70px">
      <el-form-item label="密 码">
        <div>
          <span class="change change_1">
            {{'******'}}
            <span class="change change_edit1" style="float:right;" @click="edit_1">
              <i class="el-icon-edit"></i>
              修改密码
            </span>
          </span>
        </div>
      </el-form-item>

      <el-form-item label="收货电话">
        <div v-if="check_phone_get">
          <span class="change change_2" v-if="$store.state.Profile.Phone_get">
            {{$store.state.Profile.Phone_get}}
            <span class="change change_edit2" style="float:right;" @click="edit_2">
              <i class="el-icon-edit"></i>
              编辑
            </span>
          </span>
          <span class="change change_2 unfill" v-else>
            {{'未填写'}}
            <span class="change change_edit2" style="float:right;" @click="edit_2">
              <i class="el-icon-edit"></i>
              编辑
            </span>
          </span>
        </div>
        <div v-else style="float: left;">
          <el-input style="float: left; width: 300px;" clearable v-model="phone_get" @keydown.enter.native="sure_2">
          </el-input>
          <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px;" @click="sure_2">确定
          </el-button>
          <el-button round style="float: left;" @click="cancel_2">取消</el-button>
        </div>
      </el-form-item>

      <el-form-item label="收货地址">
        <div v-if="check_address_get">
          <span class="change change_3" v-if="$store.state.Profile.Address_get">
            {{$store.state.Profile.Address_get}}
            <span class="change change_edit3" style="float:right;" @click="edit_3">
              <i class="el-icon-edit"></i>
              编辑
            </span>
          </span>
          <span class="change change_3 unfill" v-else>
            {{'未选择'}}
            <span class="change change_edit3" style="float:right;" @click="edit_3">
              <i class="el-icon-edit"></i>
              编辑
            </span>
          </span>
        </div>
        <div v-else style="float: left;">
          <el-cascader :options="options" v-model="selectedOptions" @change="get_address_get"
            style="width: 300px; float: left;">
          </el-cascader>
          <el-input placeholder="详细地址" style="float: left; width: 300px;" clearable v-model="address_get_r"
            @keydown.enter.native="sure_3">
          </el-input>
          <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px;" @click="sure_3">确定
          </el-button>
          <el-button round style="float: left;" @click="cancel_3">取消</el-button>
        </div>
      </el-form-item>

      <el-form-item label="电子邮箱">
        <div>
          <span class="change change_4" v-if="$store.state.Profile.Emile">
            {{$store.state.Profile.Emile}}
            <span class="change change_edit4" style="float:right;" @click="edit_4">
              <i class="el-icon-edit"></i>
              编辑
            </span>
          </span>

          <span class="change change_4 unfill" v-else>
            {{'未填写'}}
            <span class="change change_edit4" style="float:right;" @click="edit_4">
              <i class="el-icon-edit"></i>
              编辑
            </span>
          </span>
        </div>
        <!-- <el-input type="text" :placeholder="$store.state.Profile.Emile"></el-input> -->
      </el-form-item>

      <el-form-item label="注销账号" label-width="868px">
        <el-button @click="delete_p">注销账号</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import { regionData, CodeToText } from 'element-china-area-data'
  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Account_set",
    components: {},
    data() {
      //这里存放数据
      return {
        pass: '',
        phone_get: '',
        address_get: '',
        address_get_l: '',
        address_get_r: '',
        options: regionData,
        selectedOptions: [],
        check_phone_get: 1,
        check_address_get: 1,
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      edit_1() {
        var newcode = ''
        for (let i = 0; i < 4; i++) {
          var num = Math.floor(Math.random() * 9);
          newcode += num
        }
        console.log(newcode);

        // this.$axios({
        //   method: 'get',
        //   headers: {  //单个请求设置请求头
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     // "Access-Control-Allow-Origin": "*"
        //     // "Connection": "Keep - Alive"
        //   },
        //   url: '/message',
        //   params: {
        //     method: 'Submit',
        //     account: "C97985838",
        //     password: '10e6cce46abbe8cdc3c20b0f48f36c2f',
        //     mobile: this.$store.state.Profile.id,
        //     content: "您的验证码是：" + newcode + "。请不要把验证码泄露给其他人。"
        //   }
        // });

        this.$prompt('', '验证码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /^[1-4]{4}$/,
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then(({ value }) => {
          if (value == newcode) {
            this.$message({
              type: 'success',
              message: '验证成功'
            });
            this.$prompt('', '修改密码', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              inputType: 'password',
              // inputPattern: /^[1-4]{4}$/,
              inputPattern: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/,
              inputErrorMessage: '密码必须由数字、字母,请输入8-16位',
              center: 'true',
              showclose: 'true',
              roundButton: true,
            }).then((value) => {
              // this.$store.commit('SET_Password', value.value)
              this.$api.patchPassword(this.$store.state.Profile.id, {
                Password: window.btoa(value.value),
              })
              this.$message({
                type: 'success',
                message: '修改成功'
              });
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
              this.$message({
                message: '请重新登录'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消修改'
              });
            });
          } else {
            this.$message({
              type: 'success',
              message: '验证码错误'
            });
          }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },

      edit_2() {
        this.check_phone_get = 0
      },
      sure_2() {
        var res_pho = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (res_pho.test(this.phone_get)) {
          this.$store.commit('SET_Phone_get', this.phone_get)
          this.$api.patchPhone_get(this.$store.state.Profile.id, {
            Phone_get: this.phone_get,
          })
          this.check_phone_get = 1
          console.log(this.phone_get);
        } else {
          this.$alert('请输入正确的电话号码', '警告', {
            confirmButtonText: '确定'
          });
        }
      },
      cancel_2() {
        this.check_phone_get = 1
      },

      get_address_get() {
        this.address_get_l = CodeToText[this.selectedOptions[0]] + ' / ' + CodeToText[this.selectedOptions[1]] + ' / ' + CodeToText[this.selectedOptions[2]]

      },
      edit_3() {
        this.check_address_get = 0
      },
      sure_3() {
        if (this.address_get_l !== '' && this.address_get_r !== '') {
          this.check_address_get = 1
          this.address_get = this.address_get_l + ' / ' + this.address_get_r
          this.$store.commit('SET_Address_get', this.address_get)
          this.$api.patchAddress_get(this.$store.state.Profile.id, {
            Address_get: this.address_get,
          })
        }
        else {
          this.$message({
            message: "请输入完整信息"
          })
        }
      },
      cancel_3() {
        this.check_address_get = 1
      },

      edit_4() {
        var newcode = ''
        for (let i = 0; i < 4; i++) {
          var num = Math.floor(Math.random() * 9);
          newcode += num
        }
        console.log(newcode);
        // this.$axios({
        //   method: 'get',
        //   headers: {  //单个请求设置请求头
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     // "Access-Control-Allow-Origin": "*"
        //     // "Connection": "Keep - Alive"
        //   },
        //   url: '/message',
        //   params: {
        //     method: 'Submit',
        //     account: "C97985838",
        //     password: '10e6cce46abbe8cdc3c20b0f48f36c2f',
        //     mobile: this.$store.state.Profile.id,
        //     content: "您的验证码是：" + newcode + "。请不要把验证码泄露给其他人。"
        //   }
        // });
        this.$prompt('', '验证码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // // inputPattern: /^[1-4]{4}$/,
          // inputPattern: /^(1234)$/,
          // inputErrorMessage: '验证码错误',
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then(({ value }) => {
          if (value == newcode) {
            this.$message({
              type: 'success',
              message: '验证成功'
            });
            this.$message({
              type: 'success',
              message: '验证成功'
            });
            this.$prompt('', '填写电子邮箱', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              // inputPattern: /^[1-4]{4}$/,
              inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage: '请输入正确的邮箱号码',
              center: 'true',
              showclose: 'true',
              roundButton: true,
            }).then((value) => {
              this.$message({
                type: 'success',
                message: '修改成功'
              });
              this.$store.commit('SET_Emile', value.value)
              this.$api.patchEmile(this.$store.state.Profile.id, {
                Emile: value.value,
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消修改'
              });
            });
          } else {
            this.$message({
              type: 'success',
              message: '验证码错误'
            });
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      delete_p() {
        var newcode = ''
        for (let i = 0; i < 4; i++) {
          var num = Math.floor(Math.random() * 9);
          newcode += num
        }
        console.log(newcode);
        // this.$axios({
        //   method: 'get',
        //   headers: {  //单个请求设置请求头
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     // "Access-Control-Allow-Origin": "*"
        //     // "Connection": "Keep - Alive"
        //   },
        //   url: '/message',
        //   params: {
        //     method: 'Submit',
        //     account: "C97985838",
        //     password: '10e6cce46abbe8cdc3c20b0f48f36c2f',
        //     mobile: this.$store.state.Profile.id,
        //     content: "您的验证码是：" + newcode + "。请不要把验证码泄露给其他人。"
        //   }
        // });
        this.$prompt('', '验证码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // // inputPattern: /^[1-4]{4}$/,
          // inputPattern: /^(1234)$/,
          // inputErrorMessage: '验证码错误',
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then(({ value }) => {
          if (value == newcode) {
            this.$api.deleteProfile(this.$store.state.Profile.id, {
              id: this.$store.state.Profile.id,
            })
          } else {
            this.$message({
              type: 'success',
              message: '验证码错误'
            });
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });

      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
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
  .avatar {
    padding-left: 15px;
    border: 2px solid #eeeeee;
    text-align: left;
    overflow: hidden;
    padding: 10px 0 10px 15px;
  }

  .avatar span {
    display: inline-block;
    text-align: center;
    height: 100px;
    width: 100px;
    background-color: pink;
    vertical-align: middle;
    border-radius: 50px;
    overflow: hidden;
  }

  .avatar span img {
    width: 100%;
    height: 100%;
  }

  .avatar h2 {
    display: inline-block;
    margin-left: 15px;
    line-height: 20px;
    font-size: 15px;
    color: #111;
  }

  .account h2 {
    margin-top: 15px;
    text-align: center;
  }


  .el-input {
    width: 795px;
  }

  .el-form-item {
    border-bottom: 1px solid #eeeeee;
    padding: 15px 0;
  }

  .account>>>.el-input__inner {
    font-size: 15px;
    /* border: 0; */
  }

  /* .account>>>.el-input__inner::placeholder {
    color: #111;
  } */

  .account {
    text-align: left;
    padding-left: 15px;
    border: 2px solid #eeeeee;
    margin-top: 15px;
    padding-left: 15px;
    padding-top: 10px;
  }

  .change {
    float: left;
    font-size: 15px;
    padding: 0 5px;
    margin-left: 17px;
    font-weight: 500;
    color: #111;
  }

  .change_edit1 {
    display: none;
  }

  .change_1:hover .change_edit1 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit2 {
    display: none;
  }

  .change_2:hover .change_edit2 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit3 {
    display: none;
  }

  .change_3:hover .change_edit3 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit4 {
    display: none;
  }

  .change_4:hover .change_edit4 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .unfill {
    color: #746f6f;
  }
</style>