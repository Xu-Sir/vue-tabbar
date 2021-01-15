<template>
  <div id="app1">
      <div :style="bbbb" @click="ccc">消息</div>
  </div>

</template>

<script type="text/javascript">
    export default {
        name: "app1",
        data() {
            return {
                // medef:'sss'
            }
        },
         props :{
            messcol:{
                type:String,
                default:"red"
            },
            path:String
        },
        components: {
        },
        methods: {
            ccc(){
                // console.log(this.$route.query.names)
                this.$router.push(this.path)
            }
        },
        computed: {
            bbbb(){
                // console.log(this.messcol)
                return "color:"+ this.messcol;
            }
        }
    }
//  export default{
//         name: "app",
//         data () {
//             return {
//                 // isActive: true
//             }
//         },
//          porps:{
//             namesty:{
//                 type:String,
//                 default:'red'
//             }
//         },
//         computed: {
//             stycolr(){
//                 console.log(this.namesty)
//                 return "color:"+ this.namesty;
//             }
//         },
//         methods: {
           
//         }
//     }

</script>



<style scoped>

</style>
