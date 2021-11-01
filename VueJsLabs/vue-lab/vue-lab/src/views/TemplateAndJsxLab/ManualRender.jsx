export default {
    props: {
        level: {
            type: Number,
            default: 1
        }
    },
    render: function (h) {
        const Tag = `h${this.level}`
        return h(Tag, {}, `h${this.level} ${this.$slots.default[0].text}`)
    }
}