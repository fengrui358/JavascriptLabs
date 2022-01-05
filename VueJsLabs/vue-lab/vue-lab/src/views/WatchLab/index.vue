<template>
    <div>
        deep 监控一个对象，一次性修改了对象的多个属性，deep 的 watch 只会触发一次
        <el-button @click="changeInfo">changeInfo</el-button>
    </div>
</template>

<script>
export default {
    name: 'WatchLab',
    data() {
        return {
            form: {
                name: 'free',
                age: 35,
                email: 'free@test.com',
            }
        }
    },
    watch: {
        'form': {
            handler(val, oldVal) {
                console.log('form changed', JSON.stringify(val), JSON.stringify(oldVal));
            },
            deep: true
        },
    },
    methods: {
        changeInfo() {
            this.form.age += 1
            this.form.name = this.form.name + this.form.age
            this.form.email = this.form.email + this.form.age
        }
    }
}
</script>