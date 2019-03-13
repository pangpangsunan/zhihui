<template>
    <div class="container">
        <p class="nav-title">帮助与反馈</p>
        <div class="box-help skin-white border-rad">
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于取消课程与变更策略</p>
            <p class="font-style-lightgray">
                线下课程的取消与退款：<br><br>
                用户（学员）在课程开始前 7 个工作日（含 7 个工作日）以上提出正式取消申请（通过APP或微信小程序），我们将提供全额退款。在培训开始前 7 个工作日内提出退课申请，退款额为总金额的 50%。如果您在没有事先通知的情况下，未能前来参加课程，我们将无法为您退款。如果由于智荟平台的原因导致课程无法如期举行，我们将会提供全额退款。
                用户（学员）在课程开始前可以与课程提供方联系并将学习名额转予他人学习。<br><br>

                线上课程的取消与退款<br><br>
                用户向课程发布者支付课程费用后，如课程提供方发布的课程不存在违反法律法规及智荟相关规定，用户在报名成功后，均不得申请退款；
                用户向课程发布者支付课程费用后，如课程提供方发布的课程存在违反法律法规及智荟相关规定而发生退费的，则用户同意按如下规则退费：<br>
                （1）如果用户购买的是录播课程或含有录播课程，由于用户可以在线回看或下载观看，因此，录播课程不予退费；<br>
                （2）如果用户购买的是直播课程，且购买当时已经开课，由于用户可以观看已经开课课程的回放内容，因此，可以回放的课程视为用户已经学习的课程而不予退费，即，用户可以要求退费的比例为尚未开课的课程除以课程发布者发布的所有课程；<br>
                （3）用户与课程提供方之间可以就款项支付、退款等任何事项，自行协商解决，用户无权向智荟主张任何权利或要求智荟承担任何责任。<br>
                如果用户（学员）认为当天课程质量不合格，应该在当天相应课程完成后两天内提出异议并提供相应证据，逾期提出异议视为课程合格，用户（学员）不得要求退款。<br>
                用户（学员）不能将线上课程的学习名额转予他人学习。

            </p>
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于评分系统说明</p>
            <p class="font-style-lightgray">
                用户（学员）购买讲师（课程发布者）的课程并完成学习之后，可以通过智荟APP或智荟小程序对课程进行评价。用户（学员）所发表的评分/评价须有合理的原因与解释，用户（学员）的评分评价仅限于课程内容与教学，不得发表无关评论。智荟平台有权删除违法国家法律法规以及其他违反社会政治常识理论或其他不当言论的评价。
            </p>
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于投诉争议的说明</p>
            <p class="font-style-lightgray">
                用户（学员）因使用智荟平台查询、报名、购买、使用讲师（课程发布者）提供的课程发生纠纷时，由于相应课程均由讲师（课程发布者）单独提供，智荟不会也无法参与其中，因此，用户应当与课程发布者协商、诉讼解决，并独立承担相应的风险或责任，与智荟平台无关。如果由于智荟平台过错造成的，智荟平台会依法承担相应责任。

                讲师（课程发布者）拥有课程版权，私自录像或未经版权所有者同意擅自传播属于侵权行为；发生版权纠纷的，课程发布者应当与侵权者协商、诉讼解决，侵权者应该依法承担相应的责任；智荟平台有权协助课程发布者终止侵权者使用课程及其他智荟平台提供的服务


            </p>
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于用户申请发票的说明</p>
            <p class="font-style-lightgray">
                用户（学员）购买智荟平台的课程之后，有权提出申请发票。发票金额为所购买课程之金额。智荟平台将于5个工作日内使用顺丰速运（到付）服务为用户邮寄发票，用户须自行承担邮寄费用并确保邮寄地址正确。

                用户（学员）须在购买课程之后22个工作日提出申请发票，逾期则须与智荟平台和课程发布者（讲师）协商一致后开具。

                如用户（学员）提出将多个课程订单金额汇总并统一开具发票请致电或电邮智荟平台客服人员。

            </p>
            <p class="font-style-gray explain"><span class="blue-icon"></span>联系方式</p>
            <p class="font-style-lightgray">
                官网 <a href="http://www.zhihui-app.com">www.zhihui-app.com</a><br>
                客服电话： 0571-28874128-6<br>
                客服邮箱： <a href="mailto:cs@xiaotongtech.net">cs@xiaotongtech.net</a><br>

            </p>
        </div>
        <div class="inputcon">
            <textarea placeholder="请输入反馈内容" class="return-input" v-model="content"></textarea>
            <button class="send-btn border-rad" @click="submit()">提交</button>
        </div>
    </div>
</template>
<style scoped>
    .box-help {
        padding: 1.3rem;
    }

    .blue-icon {
        width: 4px;
        height: 1.2rem;
        background-color: #4459CC;
        margin-right: .5rem;
        display: inline-block;
        position: relative;
        top: .2rem;
    }

    .inputcon {
        margin-top: 2rem;
    }

    .return-input {
        width: 100%;
        height: 12.5rem;
        background-color: #fff;
        border: none;
        padding: 1rem;
    }


</style>
<script>


    import {mapGetters} from 'vuex'

    export default {
        created() {

        }, data() {
            return {
                arr: [],
                content: null
            }
        },
        methods: {
            submit() {
                this.$post('/edu/message/addFeedback', {
                    uid: this.userInfo.id,
                    content: this.content
                }, p => {
                    if (p.httpCode == 200) {
                        alert("您的反馈已收到，我们将尽快联系您！")
                    }
                })
            }

        },
        computed: mapGetters([
            'userInfo'
        ])
    }
</script>

