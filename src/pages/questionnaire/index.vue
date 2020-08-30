<template>
    <div class="wrap">
        <i-tabs :current="current" @change="handleChange">
            <i-tab key="tab1" title="我创建的"></i-tab>
            <i-tab key="tab2" title="我参与的"></i-tab>
            <i-tab key="tab3" title="已结束"></i-tab>
        </i-tabs>
        <div class="center">
            <div class="content">
                <div class="row">
                    <div class="Avatar">崔曼</div>
                    <div class="info_r">
                        <p class="name">
                            崔曼
                        </p>
                        <p class="text">
                            信息中心   04-04  10:30
                        </p>
                    </div>
                </div>
                <div class="title">医院里哪个科的医生最优秀？</div>
                <div class="box">
                    <p class="time">06月18日 周二 18:00 截止</p>
                    <p class="num">56人参与</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            current:"tab1"
        }
    },
    onLoad(){

    },
    methods:{
        handleChange(e){
            this.current = e.mp.detail.key;
        }
    }
}
</script>
<style lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .center{
            .content{
                padding: 0 33rpx;
                background: #fff;
                margin-top: 21rpx;
                .row{
                    display: flex;
                    align-items: center;
                    padding: 30rpx 0;
                    .Avatar{
                        width: 75rpx;
                        height: 75rpx;
                        line-height: 75rpx;
                        text-align: center;
                        border-radius: 50%;
                        background: #3399ff;
                        color: #fff;
                        font-size: 24rpx;
                    }
                    .info_r{
                        flex: 1;
                        margin-left: 25rpx;
                        .name{
                            font-size: 29rpx;
                            color: #333333;
                            padding-bottom: 21rpx;
                        }
                        .text{
                            font-size: 22rpx;
                            color: #999999;
                        }
                    }
                }
                .ttile{
                    font-size: 33rpx;
                    color: #333333;
                    font-weight: bold;
                }
                .box{
                    display: flex;
                    padding: 28rpx 0;
                    p{
                        font-size: 24rpx;
                        color: #999999;
                    }
                    .num{
                        margin-left: 20rpx;
                    }
                }
            }
        }
    }
</style>