
<template>
    <div class="home">
        <Preview :is-screenshot="isScreenshot" />
    </div>
</template>

<script>

import { mapState } from 'vuex'
import Preview from '@/components/Editor/Preview'
export default {
    components: { Preview },
    data() {
        return {
            isScreenshot: true,
        }
    },
    computed: mapState([
        'componentData',
        'curComponent',
        'isClickComponent',
        'canvasStyleData',
        'editor',
    ]),
    mounted() {
        // this.$store.commit('setEditMode', 'preview')
    },
    methods: {
    },
}
</script>

<style lang="scss">
</style>
