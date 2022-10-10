<template>
    <div class="compontent_content">
        <el-select v-model="selectCom" placeholder="请选择">
            <el-option
                v-for="item in componentTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <div class="component_list" @dragstart="handleDragStart">
            <div
                v-for="(item, index) in configComponentList"
                :key="index"
                draggable
                class="list"
                :data-index="item.component"
            >
                <span>{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import componentList, { componentTypes } from '@/custom-component/component-list'

export default {
    data() {
        return {
            componentList,
            selectCom: '',
            componentTypes: componentTypes
        }
    },
    created() {
    },
    computed: {
        configComponentList() {
            if (!this.selectCom) return this.componentList
            return this.componentList.filter(item => 
                item.type == this.selectCom
            )
        }
    },
    methods: {
        handleDragStart(e) {
            e.dataTransfer.setData('index', e.target.dataset.index)
        },
    },
}
</script>

<style lang="scss" scoped>
.compontent_content {
    height: 60%;
    padding: 10px;
    .component_list {
        margin-top: 10px;
        height: 100%;
        .list {
            width: 100%;
            height: 30px;
            border: 1px solid #ddd;
            cursor: grab;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            margin-bottom: 8px;
            color: #409eff;
        }
    }

}
</style>
