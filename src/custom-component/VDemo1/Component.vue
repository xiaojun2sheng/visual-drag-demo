<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="content">
        <div id="myChart" ref="refMyChart"></div>
    </div>
</template>

<script>
import request from '@/utils/request'
import OnEvent from '../common/OnEvent'

export default {
    extends: OnEvent,
    props: {
        request: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            option: {
                title: {
                    text: 'Referer of a Website',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
            }
        }
    },
    computed: {
    },
    mounted() {
        this.drawLine();
    },
    // http://39.106.84.29:6266/mcb/api/questionnaire/list?limit=10&pageNo=1"
    created() {
        if (this.request) {
            this.cancelRequest = request(this.request, this.propValue, 'data')
        }
    },
    beforeDestroy() {
        // 组件销毁时取消请求
        this.request && this.cancelRequest()
    },
    methods: {
        drawLine(){
            let myChart = this.$echarts.init(this.$refs.refMyChart);
            myChart.setOption(this.option);
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    font-size: 18px;
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    #myChart {
        width: 100%;
        height: 100%;
    }
}
</style>
