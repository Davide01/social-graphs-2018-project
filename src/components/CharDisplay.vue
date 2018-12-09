<template>
  <b-row class="char-display">
    <b-col cols="4">
      <h3 >{{character}}</h3>
      <img :src="getCharImage()" height="300">
    </b-col>
    <b-col cols="3" class="text">
      <p> {{description}}</p>
    </b-col>
    <b-col cols="5">
      <img class="image" :src="getWordCloud()" >
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Characters",
  components: {},
  props: {
      character:String,
      ext:String,
      description:String,
      sentiment:String
  },
  data() {
    return {
        charImagePath:"../assets/characters/",
        charImage: this.character + this.ext,
        extension: this.ext,
        wordcloud: "topWords" + this.character.toLowerCase() + ".png"
    };
  },
  methods: {
      getCharImage(){
        var images = "";
        if(this.extension == ".jpg"){
            images = require.context("../assets/characters/", false, /\.jpg$/);
        } else {
            images = require.context("../assets/characters/", false, /\.png$/);
        }
        return images("./" + this.charImage);
      },

      getWordCloud(){
        console.log("wordcloud: " + this.wordcloud)
        var images = require.context("../assets/characters/", false, /\.png$/);
        return images("./" + this.wordcloud)
      }
  }
};
</script>
<style lang="scss" scoped>
  .char-display{
    margin-top: 20px;
    background: #000;
    padding: 20px;
    color:#fff
  }

  .image {
    margin: auto;
    display: block;
    height: 340px;
    width: 430px;
  }

  .text {
    margin: auto;
    text-align: center;
  }
</style>

