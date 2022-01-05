<template>
    <div>
        <p>deep 监控一个对象，一次性修改了对象的多个属性，deep 的 watch 只会触发一次</p>
        <p>由以上的显示顺序可验证 watch 的响应也是在一个 tick 中</p>
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
            this.$nextTick(()=>{
                console.log('开始设置值')
            });
            this.form.age += 1
            this.form.name = this.form.name + this.form.age
            this.form.email = this.form.email + this.form.age
            this.$nextTick(()=>{
                console.log('结束设置值')
                console.log('%c由以上的显示顺序可验证 watch 的响应也是在一个 tick 中', 'color: red')
            });
        }
    }
}
</script>