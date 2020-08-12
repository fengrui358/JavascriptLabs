import mixinsBase from './mixins.base'

export default {
    mixins: [mixinsBase],
    data() {
        return {
            total: 0,
            pageIndex: 1,
            pageSize: 20,
        }
    },
    watch: {
        pageIndex: function (newVal, oldVal) {
            console.log(`watch pageIndex changed from mixins.obj: oldVal--${oldVal}  newVal--${newVal}`)
        }
    },
    methods: {
        query() {
            this.pageIndex = 1
            if (this._query) {
                console.log('_query from mixins.obj.js')
                this._query()
            }
        }
    },
    created() {
        console.log('mixins.obj created')
    }
}