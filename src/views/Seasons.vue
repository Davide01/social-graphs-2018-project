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
    <b-row>
      <b-col>
        <h3>Season 1 episodes</h3>
      </b-col>
    </b-row>
    <episode v-for="c in episodesS1" :key="c.name" :plotName="c.plotName" :ext="c.ext" :description="c.description" :sentimentIMDB="c.sentimentIMDB" :happinessIMDB="c.happinessIMDB" :sentimentScript="c.sentimentScript" :happinessScript="c.happinessScript" :name="c.name" :imdbWords="c.imdbWords" :title="c.title"></episode>
    <b-row>
      <b-col>
        <h3> Season 2 episodes</h3>
      </b-col>
    </b-row>
    <episode v-for="c in episodesS2" :key="c.name" :plotName="c.plotName" :ext="c.ext" :description="c.description" :sentimentIMDB="c.sentimentIMDB" :happinessIMDB="c.happinessIMDB" :sentimentScript="c.sentimentScript" :happinessScript="c.happinessScript" :name="c.name" :imdbWords="c.imdbWords" :title="c.title"></episode>
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
      meanIMDB: 3.685972950739764,
      meanScript: 4.645575635385507,
      stdIMDB: 0.1392388059793303,
      stdScript: 0.07012442580302519,
      meanIMDB2: 3.769041760818424,
      meanScript2: 4.546052456063184,
      stdIMDB2: 0.29841325382276385,
      stdScript2: 0.17611019864868882,
      episodesS1: [{
          name: "s01episode1.txt.",
          ext: "png",
          title: "The Original",
          plot: "",
          plotName: "scripts01episode1",
          imdbWords: "topWordsSeason10",
          description: "",
          sentimentIMDB: 3.6477828746177354,
          sentimentScript: 4.682286154749672,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode2.",
          ext: "png",
          title: "Chestnut",
          plot: "",
          plotName: "scripts01episode2",
          imdbWords: "topWordsSeason11",
          description: "",
          sentimentIMDB: 3.8011111111111107,
          sentimentScript: 4.777963915470494,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode3.",
          ext: "png",
          title: "The Stray",
          plot: "",
          plotName: "scripts01episode3",
          imdbWords: "topWordsSeason12",
          description: "",
          sentimentIMDB: 3.562535885167462,
          sentimentScript: 4.613581411488362,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode4.",
          ext: "png",
          title: "Dissonance Theory",
          plot: "",
          plotName: "scripts01episode4",
          imdbWords: "topWordsSeason13",
          description: "",
          sentimentIMDB: 3.657703703703705,
          sentimentScript: 4.714004069355978,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode5.",
          ext: "png",
          title: "Contrapasso",
          plot: "",
          plotName: "scripts01episode5",
          imdbWords: "topWordsSeason14",
          description: "",
          sentimentIMDB: 3.866315789473688,
          sentimentScript: 4.6890648287385135,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode6.",
          ext: "png",
          title: "The Adversary",
          plot: "",
          plotName: "scripts01episode6",
          imdbWords: "topWordsSeason15",
          description: "",
          sentimentIMDB: 3.8614081632653074,
          sentimentScript: 4.5387670087419245,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode7.",
          ext: "png",
          title: "Trompe L'Oeil",
          plot: "",
          plotName: "scripts01episode7",
          imdbWords: "topWordsSeason16",
          description: "",
          sentimentIMDB: 3.602554744525547,
          sentimentScript: 4.5647189586114845,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode8.",
          ext: "png",
          title: "Trace Decay",
          plot: "",
          plotName: "scripts01episode8",
          imdbWords: "topWordsSeason17",
          description: "",
          sentimentIMDB: 3.3995180722891565,
          sentimentScript: 4.587294684149006,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode9.",
          ext: "png",
          title: "The Well-Tempered Clavier",
          plot: "",
          plotName: "scripts01episode9",
          imdbWords: "topWordsSeason18",
          description: "",
          sentimentIMDB: 3.671834170854272,
          sentimentScript: 4.618005409940401,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s01episode10.",
          ext: "png",
          title: "The Bicameral Mind",
          plot: "",
          plotName: "scripts01episode10",
          imdbWords: "topWordsSeason19",
          description: "",
          sentimentIMDB: 3.788964992389651,
          sentimentScript: 4.670069912609237,
          happinessIMDB: "",
          happinessScripts: "",
        }],
        episodesS2: [{
          name: "s02episode1.",
          ext: "png",
          title: "Journey into Night",
          plot: "",
          plotName: "scripts02episode1",
          imdbWords: "topWordsSeason20",
          description: "",
          sentimentIMDB: 3.7534903047091404,
          sentimentScript: 4.552762993356778,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode2.",
          ext: "png",
          title: "Reunion",
          plot: "",
          plotName: "scripts02episode2",
          imdbWords: "topWordsSeason21",
          description: "",
          sentimentIMDB: 4.027914691943129,
          sentimentScript: 4.766096347031963,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode3.",
          ext: "png",
          title: "Virtù e Fortuna",
          plot: "",
          plotName: "scripts02episode3",
          imdbWords: "topWordsSeason22",
          description: "",
          sentimentIMDB: 3.51,
          sentimentScript: 4.479963359407161,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode4.",
          ext: "png",
          title: "The Riddle of the Sphinx",
          plot: "",
          plotName: "scripts02episode4",
          imdbWords: "topWordsSeason23",
          description: "",
          sentimentIMDB: 4.032284172661871,
          sentimentScript: 4.52628074750109,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode5.",
          ext: "png",
          title: "Akane no Mai",
          plot: "",
          plotName: "scripts02episode5",
          imdbWords: "topWordsSeason24",
          description: "",
          sentimentIMDB: 3.1559411764705856,
          sentimentScript: 4.446426315789472,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode6.",
          ext: "png",
          title: "Phase Space",
          plot: "",
          plotName: "scripts02episode6",
          imdbWords: "topWordsSeason25",
          description: "",
          sentimentIMDB: 3.6446069868995665,
          sentimentScript: 4.642306233766235,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode7.",
          ext: "png",
          title: "Les Écorchés",
          plot: "",
          plotName: "scripts02episode7",
          imdbWords: "topWordsSeason26",
          description: "",
          sentimentIMDB: 3.657650897226752,
          sentimentScript: 4.584374662493864,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode8.",
          ext: "png",
          title: "Kiksuya",
          plot: "",
          plotName: "scripts02episode8",
          imdbWords: "topWordsSeason27",
          description: "",
          sentimentIMDB: 4.196841155234653,
          sentimentScript: 4.107991150442483,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode9.",
          ext: "png",
          title: "Vanishing Point",
          plot: "",
          plotName: "scripts02episode9",
          imdbWords: "topWordsSeason28",
          description: "",
          sentimentIMDB: 4.061978260869566,
          sentimentScript: 4.7478346810422325,
          happinessIMDB: "",
          happinessScripts: "",
        },{
          name: "s02episode10.",
          ext: "png",
          title: "The Passenger",
          plot: "",
          plotName: "scripts02episode10",
          imdbWords: "topWordsSeason29",
          description: "",
          sentimentIMDB: 3.6497099621689792,
          sentimentScript: 4.606488069800564,
          happinessIMDB: "",
          happinessScripts: ""
    }]
  }
},
  mounted() {
    for(let i = 0; i < 10; i++){

      // Check season 1 IMDB sentiments
      if (this.episodesS1[i].sentimentIMDB < (this.meanIMDB - this.stdIMDB)) {
        this.episodesS1[i].happinessIMDB = "sad";
      } else if (this.episodesS1[i].sentimentIMDB > (this.meanIMDB + this.stdIMDB)) {
        this.episodesS1[i].happinessIMDB = "happy";
      } else {
        this.episodesS1[i].happinessIMDB = "neutral";
      }

      // Check season 1 Scripts sentiments
      if (this.episodesS1[i].sentimentScript < (this.meanScript - this.stdScript)) {
        this.episodesS1[i].happinessScript = "sad";
      } else if (this.episodesS1[i].sentimentScript > (this.meanScript + this.stdScript)) {
        this.episodesS1[i].happinessScript = "happy";
      } else {
        this.episodesS1[i].happinessScript = "neutral";
      }

      // Check season 2 IMDB sentiments
      if (this.episodesS2[i].sentimentIMDB < (this.meanIMDB2 - this.stdIMDB2)) {
        this.episodesS2[i].happinessIMDB = "sad";
      } else if (this.episodesS2[i].sentimentIMDB > (this.meanIMDB2 + this.stdIMDB2)) {
        this.episodesS2[i].happinessIMDB = "happy";
      } else {
        this.episodesS2[i].happinessIMDB = "neutral";
      }

      // Check season 2 Scripts sentiments
      if (this.episodesS2[i].sentimentScript < (this.meanScript2 - this.stdScript2)) {
        this.episodesS2[i].happinessScript = "sad";
      } else if (this.episodesS2[i].sentimentScript > (this.meanScript2 + this.stdScript2)) {
        this.episodesS2[i].happinessScript = "happy";
      } else {
        this.episodesS2[i].happinessScript = "neutral";
      }
    }
  }
}
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

h3 {
  margin-top: 50px;
  font-size: 20px;
  text-transform: uppercase;
}

.text {
  text-align: justify;
}

.space {
  margin-top: 30px;
}
</style>

