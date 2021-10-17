export default {
    created() {
        console.log(`${this.name}出生了`)
    },
    beforeDestroy() {
        console.log(`${this.name}消亡了`)
        console.log(new Date())
    },
}