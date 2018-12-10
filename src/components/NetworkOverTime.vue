<template>
  <b-row class="network-over-time">
      <h3>{{text}}</h3>
    <b-row>
      <b-col cols="6">
        <img class="imageNet" :src="getNetworkImage()">
      </b-col>
      <b-col cols="6">
        <img class="imagePlot" :src="getDegreeImage()" >
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
        console.log("fileNetwork: " + this.fileNetwork)
        var images = require.context("../assets/network/", false, /\.png$/);
        return images("./" + this.fileNetwork);
      },

      getDegreeImage(){
        console.log("fileDegree: " + this.fileDegree)
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
    margin-left: -5%;
    display: block;
    max-width: 80%;
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

