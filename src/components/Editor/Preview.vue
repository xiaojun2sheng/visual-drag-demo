<template>
    <div ref="container" class="bg">
        <!-- <div class="close">
            <el-button @click="close">关闭</el-button>
            <el-button @click="htmlToImage">截图</el-button>
        </div> -->
        <!-- width: changeStyleWithScale(canvasStyleData.width) + 'px',
        height: changeStyleWithScale(canvasStyleData.height) + 'px', -->
        <div class="canvas-container">
            <div
                class="canvas"
                :style="{
                    ...getCanvasStyle(canvasStyleData),
                    width: changeStyleWithScale(canvasStyleData.width) + 'px',
                    height: changeStyleWithScale(canvasStyleData.height) + 'px', 
                }"
            >
                <ComponentWrapper
                    v-for="(item, index) in copyData"
                    :key="index"
                    :config="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { getStyle, getCanvasStyle } from '@/utils/style'
import { mapState } from 'vuex'
import ComponentWrapper from './ComponentWrapper'
import { changeStyleWithScale } from '@/utils/translate'
import { toPng } from 'html-to-image'
import { deepCopy } from '@/utils/utils'

export default {
    components: { ComponentWrapper },
    props: {
        isScreenshot: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            copyData: [],
        }
    },
    computed: mapState([
        'componentData',
        'canvasStyleData',
    ]),
    created() {
        this.$set(this, 'copyData', deepCopy(this.componentData))
    },
    methods: {
        getStyle,
        getCanvasStyle,
        changeStyleWithScale,

        close() {
            this.$router.push('/')
            // this.$emit('close')
        },

        htmlToImage() {
            toPng(this.$refs.container.querySelector('.canvas'))
            .then(dataUrl => {
                const a = document.createElement('a')
                a.setAttribute('download', 'screenshot')
                a.href = dataUrl
                a.click()
            })
            .catch(error => {
                console.error('oops, something went wrong!', error)
            })
            .finally(this.close)
        },
    },
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: rgb(0, 0, 0, .5);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    // padding-top: 20px;

    .canvas-container {
        width: 100%; //calc(100% - 40px);
        height: 100%; //calc(100% - 120px);
        overflow: auto;

        .canvas {
            background: #fff;
            position: relative;
            margin: auto;
            width: 100%;
            height: 100%;
        }
    }

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
    }
}
</style>
