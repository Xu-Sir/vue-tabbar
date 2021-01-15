// 这里的模板是用来做通用item插槽的， 具体的内容 在调用时候填充，整个这个item是一个通用模板
<template>
<!-- 一个根div 命名class 用来样式渲染 -->
    <div class="tab-bar-item" @click="clitab" id="TabBarItem">
        <!-- 两个插槽 一个图片一个文字 占位  实际调用的地方填充 -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <!-- 插槽会被替换掉  v-if放插槽很可能被替换掉 都用div包裹一层 -->
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
    </div>
</template>

<script type="text/javascript">
    export default{
        name: "",
        data () {
            return {
                // isActive: true
            }
        },
        computed: {
            isActive(){
               return this.$route.path.indexOf(this.path) != -1;
            },
            activeStyle(){
                return this.isActive ? "color:"+ this.textclo: {};
            }
        },
        props: {//父组件传过来路径
            path:String,
            textclo:String,
            medef:{
                type:String,
                default:"sdadsads"
            }
        },
        methods: {
            clitab(){
                // console.log(this.medef);
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>

       /* 均等分布 */
    .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    }
/* 图片样式调整 */
    .tab-bar-item img{
        width: 24px;
        height: 20px;
        margin-top: 3px;
        /* 去掉图片下边的边框 三个像素 */
        vertical-align: middle;
        margin-bottom: 2px;

    }
    /* .active{ */
        /* color: deeppink; */
        /* color: #ff5777; */
    /* } */
</style>
