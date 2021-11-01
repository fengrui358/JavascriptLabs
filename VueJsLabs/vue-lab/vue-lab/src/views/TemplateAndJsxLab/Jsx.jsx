export default {
    props: {
        level: {
            type: Number,
            default: 1
        }
    },
    render: function () {
        const Tag = `h${this.level}`
        return <Tag>{this.level} {this.$slots.default[0].text}</Tag>
    }
}