<!--  -->
<template>
  <div>
    <NavHead></NavHead>
    <div class="login">
      <div class="login_view">
        <h3>欢迎登录</h3>
        <el-form :model="login_form" class="login_form" :rules="rules" ref="login_form" v-if="check_login">
          <el-form-item prop="user">
            <el-input type="text" v-model="login_form.user" placeholder="账号/手机号" prefix-icon="el-icon-user" clearable
              autocomplete="on">
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="login_form.pass" placeholder="密码" prefix-icon="el-icon-lock" clearable
              show-password>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="login_form.remember" style="color: #d9d9d9;float: left;" @change="remember">记住密码
            </el-checkbox>
            <a class="login_pho" @click="login_pho">短信登录</a>
          </el-form-item>
          <el-form-item>
            <!-- <router-link to="/"> -->
            <el-button type="info" style="width: 100%; background: #5a5985" @click="submit">登录</el-button>
            <!-- </router-link> -->
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="login_form.active" style="color: #d9d9d9;float: left;">我已同意以下协议
            </el-checkbox>
            <router-link to="/Register" class="rou">立即注册</router-link>
          </el-form-item>
        </el-form>


        <el-form :model="login_form" class="login_form" :rules="rules" ref="login_form" v-else>
          <el-form-item prop="user">
            <el-input type="text" v-model="login_form.user" placeholder="账号/手机号" prefix-icon="el-icon-user" clearable
              autocomplete="on" style="width: 66%">
            </el-input>
            <el-button type="info" style="width: 32%; background: #5a5985; padding-left: 0;padding-right: 0;"
              @click="get_code">发生验证码
            </el-button>
          </el-form-item>
          <!-- 动态验证码 -->
          <el-form-item prop="sidentify">
            <el-input style="width: 55%; float: left;" v-model="login_form.identifyCode_check"
              @change="identifyCode_check()">
            </el-input>
            <span @click="refreshCode" style="cursor: pointer;">
              <s-identify :identifyCode="login_form.identifyCode"></s-identify>
            </span>
          </el-form-item>

          <!-- 验证码 -->
          <el-form-item prop="code">
            <el-input type="text" v-model="login_form.code" placeholder="验证码" prefix-icon="el-icon-message">
              <i slot="suffix" style="margin-right: 10px">{{login_form.time}}S</i>
            </el-input>
          </el-form-item>

          <el-form-item style="margin-top: 40px;">
            <!-- <router-link to="/"> -->
            <el-button type="info" style="width: 100%; background: #5a5985" @click="submit1">注册 / 登录</el-button>
            <!-- </router-link> -->
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="login_form.active" style="color: #d9d9d9;float: left;">我已同意以下协议
            </el-checkbox>
            <a class="login_pass" @click="login_pass">密码登录</a>
          </el-form-item>
          <!-- <el-form-item>
            <router-link to="/Register" class="rou" style="margin-left: 0;">立即注册</router-link>
          </el-form-item> -->
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from '@/components/NavHead'
  import SIdentify from '@/components/SIdentify'


  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Login",
    components: {
      NavHead,
      SIdentify
    },
    data() {
      //这里存放数据
      var validateUser = (rule, value, callback) => {
        var res_user = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (value === '') {
          this.user_success = 0
          callback(new Error("请输入手机号码"));
        } else if (!res_user.test(value)) {
          callback(new Error("请输入正确的手机号码"));
          this.user_success = 0
        }
        else {
          this.user_success = 1
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error("请输入密码"));
        }
        else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
          this.code_success = 0
        }
        else {
          this.code_success = 1
          callback();
        }
      };
      return {
        user_success: 0,
        code_success: 0,
        identifyCode_success: 0,
        check_login: 1,
        code: '',
        login_form: {
          user: "",
          pass: "",
          remember: 0,
          active: 0,
          time: 60,
          code: null,
          identifyCode_check: '',
          identifyCode: '',
          // 验证码规则
          identifyCodes: '0123456789abcdefghijklmnopqrstuvwxyz',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' },
          ]
        }
      };
    },
    //监听属性 类似于data概念
    computed: {
    },
    //监控data中的数据变化
    watch: {},

    //方法集合
    methods: {
      refreshCode() {
        this.login_form.identifyCode = ''
        this.makeCode(this.login_form.identifyCodes, 4)
      },
      // 生成随机验证码
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.login_form.identifyCode += this.login_form.identifyCodes[
            Math.floor(Math.random() * (this.login_form.identifyCodes.length - 0) + 0)
          ]
        }
      },
      identifyCode_check() {
        if (this.login_form.identifyCode_check == this.login_form.identifyCode) {
          this.identifyCode_success = 1
          // console.log(this.identifyCode_success);
        }
        else {
          this.identifyCode_success = 0
          // console.log(this.identifyCode_success);
        }
      },



      async get_code() {
        if (this.identifyCode_success) {
          if (this.user_success) {
            var newcode = ''
            for (let i = 0; i < 4; i++) {
              var num = Math.floor(Math.random() * 9);
              newcode += num
            }
            this.code = newcode
            console.log(this.code);

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
            //     mobile: this.login_form.user,
            //     content: "您的验证码是：" + newcode + "。请不要把验证码泄露给其他人。"
            //   }
            // });
            if (this.login_form.time == 0) this.login_form.time = 60
            if (this.login_form.time == 60) {
              let countdown = setInterval(() => {
                if (this.login_form.time > 0) {
                  this.login_form.time--
                }
                else { clearInterval(countdown) }
              }, 1000);
            }
          }
          else {
            this.$message({
              message: "电话号码错误"
            })
          }
        }
        else {
          this.$message({
            message: "验证码错误"
          })
        }
      },
      submit() {
        if (this.login_form.active != 0) {
          if (this.user_success == 1 && this.login_form.pass !== '') {
            this.$api.login(this.login_form.user, this.login_form.pass, {}).then((res) => {
              this.rememberInfo()
            })
          } else {
            this.$message({
              message: "请输入核对信息"
            })
          }
        }
        else {
          this.$message({
            message: '对不起，协议尚未同意!',
            type: 'warning'
          });
        }
      },
      login_pho() {
        this.check_login = 0
      },
      login_pass() {
        this.check_login = 1
      },
      submit1() {
        if (this.login_form.active != 0) {
          if (this.user_success == 1 && this.code_success == 1) {
            if (this.login_form.code == this.code) {
              this.$api.login1(this.login_form.user, {}).then((res) => {
                if (res.OnUse) {
                  sessionStorage.setItem("token", this.login_form.user);
                  this.$store.commit("SET_Profile", res)
                  setTimeout(() => {
                    this.$router.push('/')
                  }, 500)
                } else {
                  this.$message({
                    message: '对不起，您的账号已冻结',
                    type: "info"
                  })
                }

              }).catch((err) => {
                this.$api.register(this.login_form.user, {
                  id: this.login_form.user,
                  Password: '',
                  Nickname: '',
                  Avatar: '',
                  Sex: '',
                  Introduce: '',
                  Address: '',
                  Birth: '',
                  Phone_get: '',
                  Address_get: '',
                  Emile: '',
                  Car: [],
                  History: [],
                  Collect: [],
                  Order: [],
                  My_order: [],
                })
              })

            }
            else {
              this.$message({
                message: "验证码错误"
              })
            }
          } else {
            this.$message({
              message: "请输入核对信息"
            })
          }
        }
        else {
          this.$message({
            message: '对不起，协议尚未同意!',
            type: 'warning'
          });
        }
      },
      remember() {
        console.log(this.login_form.remember);
      },
      rememberInfo() {
        // 判断用户是否勾选记住密码，如果勾选，在本地储存中储存登录信息
        if (this.login_form.remember) {
          localStorage.setItem("account", this.login_form.user)
          localStorage.setItem("password", this.login_form.pass)
        }
        else {
          localStorage.removeItem("account")
          localStorage.removeItem("password")
        }
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      let user = localStorage.getItem('account')
      let pass = localStorage.getItem('password')
      if (user && pass) {
        this.login_form.user = localStorage.getItem('account')
        this.login_form.pass = localStorage.getItem('password')
        this.login_form.remember = true //这一步是回显后让勾选框为选中状态
        this.login_form.active = true
        this.user_success = true
        this.code_success = true
      }
      // console.log(1);

      // this.$axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/posts',
      //   data: {
      //     id: 5,
      //     title: 'xiaoji',
      //     author: 'xioaji'
      //   }
      // }).then((res) => {
      //   console.log(res)
      // })

      // this.$axios({
      //   method: 'delete',
      //   url: 'http://localhost:3000/posts/3',
      //   data: {
      //     id: 1
      //   }
      // }).then((res) => {
      //   console.log(res)
      // }),

      // this.$axios({
      //   method: 'put',
      //   url: 'http://localhost:3000/posts/1',
      //   data: {
      //     title: 'xiaojiya'
      //   }
      // }).then((res) => {
      //   console.log(res)
      // }),

      // this.$axios.get('http://localhost:3000/profile').then((response) => {
      //   console.log(response)
      //   this.$store.commit('SET_try', response.data)
      // })
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.refreshCode()
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
  nav {
    height: 100px;
    width: 100%;
    background-color: #eeeeee;
  }

  .logo {
    height: 100px;
    width: 200px;
    margin-left: 200px;
  }

  .login {
    background: url("../assets/img/Login.jpg") no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    position: fixed;
  }

  .login_view {
    position: absolute;
    width: 320px;
    height: 425px;
    right: 250px;
    top: 100px;
    background-color: #5a5985;
    border: 1px solid #d9d9d9;
    padding: 0 10px;
    opacity: 0.9;
    overflow: hidden;
  }

  .login_view:hover {
    opacity: 1;
  }

  .login_view h3 {
    font-size: 30px;
    line-height: 45px;
    overflow: hidden;
    width: 100%;
    height: 45px;
    color: #d9d9d9;
    font-weight: 300;
    margin: 20px auto;
  }

  .login_form {
    border-top: 1px solid #d9d9d9;
    padding: 25px 15px;
  }

  .login_pho {
    float: right;
    color: #d9d9d9;
    font-size: 15px;
    margin-left: 98px;
    cursor: pointer;
  }

  .login_pass {
    float: right;
    color: #d9d9d9;
    font-size: 15px;
    margin-left: 46px;
    cursor: pointer;
  }

  .rou {
    float: right;
    color: #d9d9d9;
    font-size: 15px;
    margin-left: 46px;
  }

  .login_pho:hover,
  .login_pass:hover,
  .rou:hover {
    color: #4b8deb;
  }
</style>