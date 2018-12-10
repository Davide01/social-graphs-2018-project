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
  </div>
</template>

<script>
export default {
  name: "seasons",
  components: {},
  data() {
    return {
      seasons: "Sentiment of the seasons"
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

