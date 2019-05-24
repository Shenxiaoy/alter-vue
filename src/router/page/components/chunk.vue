<template>
    <div>
        <p>我是一个 chunk</p>
        {{title}}

    </div>
</template>

<script>

  export default {
    data: function() {
      return {
        msg: 'ok'
      }
    },
    props: {
      title: String
    },
    method: {

    }

  }
</script>