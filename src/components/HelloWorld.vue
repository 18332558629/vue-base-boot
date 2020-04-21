<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="prefix" @click="addCount">
       点击我试一下哦
    </button>
  </div>
</template>

//  <script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';

// @Component
// export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;

//   private count = 0;

//   private addCount() {
//     this.count ++ ;
//   }
// }
// </script>

<script>

export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.prefix{
  display: flex;
}
</style>
