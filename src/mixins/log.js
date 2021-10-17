export default {
    props:["show"],
    created() {
        console.log(`${this.name}出生了`)
    },
    beforeDestroy() {
        console.log(`${this.name}消亡了`)
    },
    methods:{
        remove(){
            this.visible=!this.visible
        }
    }
}