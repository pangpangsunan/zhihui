<template>
    <div class="diolog">
        <div class="wrapper-page skin-white">
            <div class="font-big">修改抬头信息</div>
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-2 control-label">选择类型</label>
                    <span class="col-sm-2 control-label">
                        <input type="radio" aria-label="..." value="1" name="type" v-model="vinfo.type" disabled>
                          个人
                      </span>
                    <span class="col-sm-2 control-label">
                        <input type="radio" aria-label="..." value="2" name="type" v-model="vinfo.type" disabled>
                            企业
                      </span>

                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">发票抬头</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="发票抬头" v-model="vinfo.title">
                    </div>
                </div>
                <div class="form-group" v-if="vinfo.type==2">
                    <label class="col-sm-2 control-label">纳税人识别号</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="纳税人识别号" v-model="vinfo.dutyParagraph">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">联系电话</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" placeholder="联系电话" v-model="vinfo.phone">
                    </div>
                </div>
                <div class="form-group" v-if="vinfo.type==2">
                    <label class="col-sm-2 control-label">单位地址</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="单位地址" v-model="vinfo.address">
                    </div>
                </div>
                <div class="form-group" v-if="vinfo.type==2">
                    <label class="col-sm-2 control-label">开户银行</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="开户银行" v-model="vinfo.bank">
                    </div>
                </div>
                <div class="form-group" v-if="vinfo.type==2">
                    <label class="col-sm-2 control-label">银行账号</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="银行账号" v-model="vinfo.bankAccounts">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">邮寄地址</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="邮寄地址" v-model="vinfo.mailingAddress">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <button class="blue-btn" @click="updateinvoice()">保存</button>
                    </div>
                </div>

            </form>
            <div class="closebtn" @click="$emit('close')">关闭</div>
        </div>


    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'querystring'
     import {mapGetters} from 'vuex'

    export default {

      props:{
          vinfo:{

          }

      },
        methods:{
          updateinvoice(){
              this.vinfo.createDate =  (new Date).toGMTString();
              this.vinfo.updateDate=this.vinfo.createDate;
              axios.post('/edu/invoice/updateInvoiceTitle',qs.stringify(this.vinfo)).then(p=>{
                  if(p.data.httpCode==200){
                      this.$emit('update')
                  }else {
                      alert("修改失败！")
                  }
              })
          }
        }
    }
</script>

<style scoped>
    .diolog {
        width: 100%;
        height: 100%;
        background: rgba(34, 34, 34, 0.80);
        position: absolute;
        left: 0;
        top: 0;
    }

    .wrapper-page {
        width: 50rem;
        height: 42rem;
        margin: 5rem auto;
        border-radius: 4px;
        padding: 2rem 3rem;
        text-align: center;
        position: relative;
    }
   

    .col-sm-10 input {
        height: 2.75rem;
    }

    .col-sm-2 {
        height: 2.75rem;
        line-height: 2rem;
    }
</style>