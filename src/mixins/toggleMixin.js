
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        data:{
                type: Array
        },
        schedule:{
            type:String
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
}
