<template>
  <div class="container">
    <h2> {{seasons}} </h2>
    <b-row class="space">
      <b-col>
        <p class="text">
          In the two figures below the sentiment of each episodes during the two seasons of the series is displayed. 
          The sentiments were calculated from two data sources. One source is IMDB, from which the descriptions of each episode was taken
          into account. The second source is the scripts. The episodes are numbered from 0, eg. the first episode has number 0.
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col >
        <img class="seasonSentimentPlot" src="../assets/seasons/season1Sentiment.png">
      </b-col>
    </b-row>

    <b-row class="space">
      <b-col >
        <p class="text">
          The sentiment in the first season is quite stable. The saddest episode is the seventh episode. 
          There is a significant difference between the sentiment calculated from the scripts and from the IMDB description.
          Also an interesting fact is that the episode with number seven has the lowest sentiment based on IMDB description,
          however based on the scripts it is neutral. 
        </p>
        <p class="text">
          The sentiment in the second season is quite unstable compared to the first season. There are bigger differences 
          between sentiments of two subsequent episodes. Especially, if we take a look on the data from IMDB and the episodes 0 - 5, 
          the sentiments are changing to other direction with each episode. 
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <img class="seasonSentimentPlot" src="../assets/seasons/season2Sentiment.png">
      </b-col>
    </b-row>

    <b-row class="space">
      <b-col >
        <p class="text">
          Also an interesting observation is, that in the second season in the episode with number 7 the sentiments 
          from the two different sources meet and even cross each other. That's interesting as during the whole season 
          the sentiments from the scripts were higher then the ones from the IMDB description. 
          In both seasons, the scripts were happier then the actual plots of the episodes. 
        </p>
      </b-col>
    </b-row>
    <episode v-for="c in episodesS1" :key="c.name" :plotName="c.plotName" :ext="c.ext" :description="c.description" :sentiment="c.sentiment" :happiness="c.happiness" :name="c.name" :imdbWords="c.imdbWords"></episode>
    <episode v-for="c in episodesS2" :key="c.name" :plotName="c.plotName" :ext="c.ext" :description="c.description" :sentiment="c.sentiment" :happiness="c.happiness" :name="c.name" :imdbWords="c.imdbWords"></episode>
    {{episodesS1[0].imdbWords}}
 </div>
</template>

<script>
import Episode from "@/components/Episode.vue"
export default {
  name: "seasons",
  components: {
    Episode
  },
  data() {
    return {
      seasons: "Sentiment of the seasons",
      episodesS1: [{
          name: "s01episode1.txt.",
          ext: "png",
          plotName: "scripts01episode1",
          imdbWords: "topWordsSeason10",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode2.",
          ext: "png",
          plotName: "scripts01episode2",
          imdbWords: "topWordsSeason11",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode3.",
          ext: "png",
          plotName: "scripts01episode3",
          imdbWords: "topWordsSeason12",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode4.",
          ext: "png",
          plotName: "scripts01episode4",
          imdbWords: "topWordsSeason13",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode5.",
          ext: "png",
          plotName: "scripts01episode5",
          imdbWords: "topWordsSeason14",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode6.",
          ext: "png",
          plotName: "scripts01episode6",
          imdbWords: "topWordsSeason15",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode7.",
          ext: "png",
          plotName: "scripts01episode7",
          imdbWords: "topWordsSeason16",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode8.",
          ext: "png",
          plotName: "scripts01episode8",
          imdbWords: "topWordsSeason17",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode9.",
          ext: "png",
          plotName: "scripts01episode9",
          imdbWords: "topWordsSeason18",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s01episode10.",
          ext: "png",
          plotName: "scripts01episode10",
          imdbWords: "topWordsSeason19",
          description: "",
          sentiment: "",
          happiness: ""
        }],
        episodesS2: [{
          name: "s02episode1.",
          ext: "png",
          plotName: "scripts02episode1",
          imdbWords: "topWordsSeason20",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode2.",
          ext: "png",
          plotName: "scripts02episode2",
          imdbWords: "topWordsSeason21",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode3.",
          ext: "png",
          plotName: "scripts02episode3",
          imdbWords: "topWordsSeason22",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode4.",
          ext: "png",
          plotName: "scripts02episode4",
          imdbWords: "topWordsSeason23",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode5.",
          ext: "png",
          plotName: "scripts02episode5",
          imdbWords: "topWordsSeason24",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode6.",
          ext: "png",
          plotName: "scripts02episode6",
          imdbWords: "topWordsSeason25",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode7.",
          ext: "png",
          plotName: "scripts02episode7",
          imdbWords: "topWordsSeason26",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode8.",
          ext: "png",
          plotName: "scripts02episode8",
          imdbWords: "topWordsSeason27",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode9.",
          ext: "png",
          plotName: "scripts02episode9",
          imdbWords: "topWordsSeason28",
          description: "",
          sentiment: "",
          happiness: ""
        },{
          name: "s02episode10.",
          ext: "png",
          plotName: "scripts02episode10",
          imdbWords: "topWordsSeason29",
          description: "",
          sentiment: "",
          happiness: ""
        }]
    };
  }
};
</script>
<style lang="scss" scoped>
.seasonSentimentPlot {
  max-width: 1000px;
}

h2 {
    margin-top: 50px;
    font-size: 25px;
    text-transform: uppercase;
}

.text {
  text-align: justify;
}

.space {
  margin-top: 30px;
}
</style>

