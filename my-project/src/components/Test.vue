<template>
    <div id="vue_det">
        <h1>site:{{site}}</h1>
        <h1>url:{{url}}</h1>
    </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      site: '欢迎来到vue的坑!'
      // ,url:'<a href="www.baidu.com">www.baidu.com</a>'
    }
  }
}

</script>
