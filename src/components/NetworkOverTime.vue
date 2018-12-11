<template>
  <b-row class="network-over-time">
      <h3>{{text}}</h3>
    <b-row>
      <b-col cols="12">
        <img class="imageNet" :src="getNetworkImage()">
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "Network",
  components: {},
  props: {
      text:String,
      fileDegree:String,
      fileNetwork:String
  },
  data() {
    return {
        networkImagePath:"../assets/network/",
        text: this.text,
        fileDegree: this.fileDegree,
        fileNetwork: this.fileNetwork
    };
  },
  methods: {
      getNetworkImage(){
        var images = require.context("../assets/network/", false, /\.png$/);
        return images("./" + this.fileNetwork);
      },

      getDegreeImage(){
        var images = require.context("../assets/network/", false, /\.png$/);
        return images("./" + this.fileDegree);
      }
  }
};
</script>
<style lang="scss" scoped>
  .network-display{
    margin-top: 20px;
    padding: 20px;

  }

  .imageNet {
    margin: auto;
    display: block;
    max-width: 70%;
    height: auto;
    width: auto\9; 
  }

  .imagePlot {
    margin: auto;
    margin-left: -20%;
    display: block;
    max-width: 150%;
    height: 100%;
    width: auto\9; 
  }

  h3 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 25px;
    text-align: center;
    margin-left: 38%;
  }
</style>

