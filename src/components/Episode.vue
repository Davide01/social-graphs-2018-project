<template>
<div>
  <b-row class="plotrow">
    <b-col cols="9" class="plotcol">
      <img :src="getCharImage()" class="plot">
    </b-col>
    <b-col cols="3" class="text">
        <p> <strong>{{title}} </strong> </p>
      <p> {{description}}</p>
      <p> Sentiment IMDB: <strong class="upper"> {{sentIMDB}} </strong> </p>
      <p> Happiness IMDB: <strong class="upper"> {{happinessIMDB}} </strong> </p>
      <p> Sentiment Script: <strong class="upper"> {{sentScript}} </strong> </p>
      <p> Happiness Script: <strong class="upper"> {{happinessScript}} </strong> </p>
    </b-col>
  </b-row>
  <b-row class="char-display">
      <b-col cols="6">
          <h3> Characteristics from scripts </h3>
      <img class="image" :src="getWordCloud()" >
    </b-col>
    <b-col cols="6">
        <h3> Characteristics from IMDB description </h3>
      <img class="image" :src="getImdbWordCloud()" >
    </b-col>
  </b-row>
</div>
</template>

<script>
export default {
  name: "Episode",
  components: {},
  props: {
      name:String,
      ext:String,
      description:String,
      sentimentIMDB:Number,
      happinessIMDB: Number,
      sentimentScript: Number,
      happinessScript: Number,
      plotName: String,
      imdbWords: String,
      title: String
  },
  data() {
    return {
        charImagePath:"../assets/seasons/",
        charImage: this.name + this.ext,
        extension: this.ext,
        wordcloud: this.plotName.toLowerCase() + ".png",
        imdbWordCloud: this.imdbWords + ".png",
        sentIMDB: Math.round(this.sentimentIMDB * 1000) / 1000,
        sentScript: Math.round(this.sentimentScript * 1000) / 1000
    };
  },
  methods: {
      getCharImage(){
        var images = "";
        if(this.extension == ".jpg"){
            images = require.context("../assets/seasons/", false, /\.jpg$/);
        } else {
            images = require.context("../assets/seasons/", false, /\.png$/);
        }
        return images("./" + this.charImage);
      },

      getWordCloud(){
        console.log("scripts wordcloud: " + this.wordcloud)
        var images = require.context("../assets/seasons/", false, /\.png$/);
        return images("./" + this.wordcloud)
      },

      getImdbWordCloud(){
        console.log("imdbWordCloud: " + this.imdbWordCloud)
        var images = require.context("../assets/seasons/", false, /\.png$/);
        return images("./" + this.imdbWordCloud);
      }
  }
};
</script>
<style lang="scss" scoped>
  .char-display{
    background: #000;
    padding: 20px;
    color:#fff
  }

  .image {
    margin: auto;
    display: block;
    max-height: 340px;
    //width: 430px;
  }

  .plot {
    margin: auto;
    display: block;
    max-height: 500px;
  }

  .plotcol {
    //margin-left: -70px;
  }

  .text {
    margin: auto;
    text-align: left;
  }

  .upper {
    text-transform: uppercase
  }

  .plotrow {
      margin-top: 30px;
      border-top: solid 1px #000;
      border-left: solid 1px #000;
      border-right: solid 1px #000;
  }

  h3 {
    color: rgb(41, 91, 255);
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>

