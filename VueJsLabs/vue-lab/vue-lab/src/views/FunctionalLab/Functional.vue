<template>
    <div>函数式组件 {{ str }}</div>
</template>

<script>
export default {
    props: {
        str: {
            type: String,
            default: ''
        }
    }
}
</script>