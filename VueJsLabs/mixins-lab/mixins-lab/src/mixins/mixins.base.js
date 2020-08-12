export default {
    data() {
        return {
            total: 0,
            pageIndex: 1,
            pageSize: 10,
        }
    },
    watch: {
        pageIndex: function (newVal, oldVal) {
            console.log(`watch pageIndex changed from mixins.base: oldVal--${oldVal}  newVal--${newVal}`)
        }
    },
    methods: {
        query() {
            this.pageIndex = 1
            if (this._query) {
                console.log('_query from mixins.base.js')
                this._query()
            }
        }
    },
    created() {
        console.log('mixins.base created')
    }
}