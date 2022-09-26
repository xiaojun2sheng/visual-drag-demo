<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="content">
        <div ref="refAnnularChart" class="myChart"></div>
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
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 580, name: '告警' },
                        { value: 484, name: '剧本' },
                        { value: 300, name: '任务' }
                    ]
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
            let myChart = this.$echarts.init(this.$refs.refAnnularChart);
            myChart.setOption(this.option);
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    .myChart {
        width: 100%;
        height: 100%;
    }
}
</style>
