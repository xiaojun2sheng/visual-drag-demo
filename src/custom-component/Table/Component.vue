<template>
    <div class="content">
        <div class="table_content">
            <div class="t_header">
                <span v-for="title in tableHeder" :key="title" :style="td_w">
                    {{title}}
                </span>
            </div>
            <div class="t_body" v-for="item in tableData" :key="item.id">
                <span :style="td_w">
                    {{item.name}}
                </span>
                <span :style="td_w">
                    {{item.phone}}
                </span>
                <span :style="td_w">
                    {{item.remark}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>


import request from '@/utils/request'
export default {
    props: {
        request: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            tableHeder: [],
            tableData: []
        }
    },
    computed: {
        td_w () {
            let _w = (100 / this.tableHeder.length)
            return `width: ${_w}%`
        }
    },
    created() {
        this.featchData()
    },
    mounted() {
    },
    methods: {
        async featchData () {
            if (this.request) {
                let res = await request(this.request, this.propValue, 'data')
                if (!res || !res.data) return
                this.tableHeder = [
                    '姓名',
                    '手机号码',
                    '描述'
                ]
                this.tableData = res.data.result
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.table_content {
    background: #13132b;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .t_header {
        color: #53537E;
        font-size: 12px;
        font-weight: 800;
        display: flex;
        justify-content: space-between;
        span {
            padding: 4px 8px;
            text-align: left;
        }
    }
    .t_body {
        color: #C5C5C5;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        span {
            padding: 4px 8px;
            text-align: left;
        }
    }
}
</style>
