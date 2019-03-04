<template>
    <div class="diolog">
        <div class="wrapper-page skin-white">
            <div class="font-big">添加抬头信息</div>
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-2 control-label">选择类型</label>
                    <span class="col-sm-2">
                        <input type="radio" name="aa" value="个人" v-model="type">
                          个人
                        <input type="radio" name="aa" value="企业" v-model="type">
                            企业
                      </span>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">发票抬头</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="发票抬头">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">纳税人识别号</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="纳税人识别号">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">联系电话</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" placeholder="联系电话">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">单位地址</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="单位地址">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">开户银行</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="开户银行">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">银行账号</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="银行账号">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">邮寄地址</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="邮寄地址">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <button class="blue-btn">保存</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="wrapper-page personal">

        </div>
    </div>
</template>

<script>
    export default {
        name: "diolog"
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
    }

    .col-sm-10 input {
        height: 2.75rem;
    }

    .col-sm-2 {
        height: 2.75rem;
        line-height: 2rem;
    }
</style>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                type:[]
            }
        }
    }
</script>