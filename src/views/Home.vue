<template>
  <div class="home">
    {{home}}
    <div class="container">
      <b-row>
        <b-col>
          <h2> Westworld</h2>
          <h3> *** Spoilers ahead ***</h3>
          <p> Westworld is a TV series that we both auther like very much. For those who don't know Westworld is an American science fiction Western television series. It airs HBO and it is based on the 1973 film of the same name. The story takes place in Westworld, a fictional, technologically advanced Wild-West-themed amusement park populated by android "hosts". The park caters to high-paying "guests" who may indulge their wildest fantasies within the park without fear of retaliation from the hosts, who are prevented by their programming from harming humans. </p>

          <p>The first season was broadcast between October 2 and December 4, 2016; it comprised ten episodes. In November 2016, HBO renewed the series for a ten-episode second season, which was broadcast from April 22 to June 24, 2018.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img class="horseman" src="../assets/home/horseman.png">
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2> Datasets</h2>
          <p> We have several datasets for this porject. The first are the scripts for each episode of the show (there are 2 seasons with 10 episodes each) which we got from <a href="https://www.springfieldspringfield.co.uk/episode_scripts.php?tv-show=westworld-2016"> https://www.springfieldspringfield.co.uk</a>. Another dataset we got from the character wikis from the offical westword famdom wiki page <a href="https://westworld.fandom.com/wiki/"> westworld.fandom.com</a>. Finally we looked into the imdb page for the show and its connected pages. </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h4> “These violent delights have violent ends.“</h4>
          <h4> “A strange new light can be just as frightening as the dark.” - Dolores</h4>
          <h4> “If you can’t tell the difference, does it matter if I'm real or not?” - Host</h4>
          <h4> “You can’t play God without being acquainted with the devil.” - Dr. Robert Ford</h4>
          <h4> “Winning doesn't mean anything unless someone else loses, which means you're here to be the loser.” - The Man in Black </h4>
          <h4> “Have you ever questioned the nature of your reality? Did you ever stop to wonder about your actions? The price you'd have to pay if there was a reckoning? That reckoning is here.” - Dolores</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img class="horseman" src="../assets/home/bird.png">
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2> Our motivation</h2>
          <p>Since the shows plot can be a bit confusing with all of the plot twists and turns and trying to understand who of the characters are hosts and who are humans, we decided to make an analysis on the shows plot and characters. We will do that by creating all kinds of different plots, graphs and wordclouds to help us get a better understanding of it all.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img class="horseman" src="../assets/home/host.jpg">
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      home: ""
    };
  }
};
</script>

<style lang="scss" scoped>
  h1 {
    margin:30px;
    font-size: 35px;
    text-transform: uppercase;
  }

  .horseman {
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 1200px;
    display: block;
    height: auto;
    width: auto\9; 
  }

  h2 {
    margin-top: 50px;
    font-size: 25px;
    text-transform: uppercase;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 20px;
    font-style: italic;
  }

  h4{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-style: italic;
  }
</style>
