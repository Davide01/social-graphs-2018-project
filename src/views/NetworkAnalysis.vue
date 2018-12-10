<template>
    <div class="home">
        {{network}}
        <div class="container">
          <b-row>
            <b-col>
              <h2> Westworld network</h2>
              <p> In the figure below the network containing all of the characters in the show is displayed. Each one of the nodes is a character in the show. The red nodes are the hosts and the blue nodes are the humans. The edges are the connections between the characters throughout the show. </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <img class="network" src="../assets/network/Network of hosts and people.png">
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p> As we can see the network in westworld is fairly interconnected. Since the stage for the show is a so called theme park, where hosts and humans are free to roam and interact with each other, it is logical that the characters will inevitably cross paths and connect. </p>
              <h2> Network degree distribution</h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <img class="network" src="../assets/network/Degree plot for each character.png">
              <p>From the graph we can see that the nodes with the most connections are <b>Teddy</b> and <b>Dolores</b>, since they are 2 of the main characters. They both have <b>17</b> connections. The 3 nodes with the highest eigenvector centrality are <b>Teddy</b>, <b>Dolores</b> and <b>Robert</b>. The 3 nodes with the highest betweenness centrality are <b>Stubbs</b>, <b>Teddy</b> and <b>Dolores</b>.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h2> Network evolution over time</h2>
              <p> With the following set of graphs and plots we can see how the network of characters evolve throughout the show over time. From the network figures it is easy to see how the show sometimes focuses on the host on certain episodes and sometimes on the humans. From the plots we can see who are the characters that the show focuses most for any given episode.</p>
            </b-col>
          </b-row>
          <network-over-time v-for="e in episodes" :key="e.text" :fileDegree="e.fileDegree" :fileNetwork="e.fileNetwork" :text="e.text"></network-over-time>
        </div>
    </div>
</template>

<script>
import NetworkOverTime from "@/components/NetworkOverTime.vue"
export default {
  name: "Network",
  components: {
    NetworkOverTime
  },
  data() {
    return {
      networksss: "",
      episodes: [
        {
          text: "Season 01 - Episode 01",
          fileDegree: "Degree plot s01 episode 1.png",
          fileNetwork: "Network s01 episode 1.png"
        },{
          text: "Season 01 - Episode 02",
          fileDegree: "Degree plot s01 episode 2.png",
          fileNetwork: "Network s01 episode 2.png"
        },{
          text: "Season 01 - Episode 03",
          fileDegree: "Degree plot s01 episode 3.png",
          fileNetwork: "Network s01 episode 3.png"
        },{
          text: "Season 01 - Episode 04",
          fileDegree: "Degree plot s01 episode 4.png",
          fileNetwork: "Network s01 episode 4.png"
        },{
          text: "Season 01 - Episode 05",
          fileDegree: "Degree plot s01 episode 5.png",
          fileNetwork: "Network s01 episode 5.png"
        },{
          text: "Season 01 - Episode 06",
          fileDegree: "Degree plot s01 episode 6.png",
          fileNetwork: "Network s01 episode 6.png"
        },{
          text: "Season 01 - Episode 07",
          fileDegree: "Degree plot s01 episode 7.png",
          fileNetwork: "Network s01 episode 7.png"
        },{
          text: "Season 01 - Episode 08",
          fileDegree: "Degree plot s01 episode 8.png",
          fileNetwork: "Network s01 episode 8.png"
        },{
          text: "Season 01 - Episode 09",
          fileDegree: "Degree plot s01 episode 9.png",
          fileNetwork: "Network s01 episode 9.png"
        },{
          text: "Season 01 - Episode 10",
          fileDegree: "Degree plot s01 episode 10.png",
          fileNetwork: "Network s01 episode 10.png"
        },{
          text: "Season 02 - Episode 01",
          fileDegree: "Degree plot s02 episode 1.png",
          fileNetwork: "Network s02 episode 1.png"
        },{
          text: "Season 02 - Episode 02",
          fileDegree: "Degree plot s02 episode 2.png",
          fileNetwork: "Network s02 episode 2.png"
        },{
          text: "Season 02 - Episode 03",
          fileDegree: "Degree plot s02 episode 3.png",
          fileNetwork: "Network s02 episode 3.png"
        },{
          text: "Season 02 - Episode 04",
          fileDegree: "Degree plot s02 episode 4.png",
          fileNetwork: "Network s02 episode 4.png"
        },{
          text: "Season 02 - Episode 05",
          fileDegree: "Degree plot s02 episode 5.png",
          fileNetwork: "Network s02 episode 5.png"
        },{
          text: "Season 02 - Episode 06",
          fileDegree: "Degree plot s02 episode 6.png",
          fileNetwork: "Network s02 episode 6.png"
        },{
          text: "Season 02 - Episode 07",
          fileDegree: "Degree plot s02 episode 7.png",
          fileNetwork: "Network s02 episode 7.png"
        },{
          text: "Season 02 - Episode 08",
          fileDegree: "Degree plot s02 episode 8.png",
          fileNetwork: "Network s02 episode 8.png"
        },{
          text: "Season 02 - Episode 09",
          fileDegree: "Degree plot s02 episode 9.png",
          fileNetwork: "Network s02 episode 9.png"
        },{
          text: "Season 02 - Episode 10",
          fileDegree: "Degree plot s02 episode 10.png",
          fileNetwork: "Network s02 episode 10.png"
        },
      ]
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

  .network {
    max-width: 1000px;
    display: block;
    height: auto;
    width: auto\9; 
  }

  h2 {
    margin-top: 50px;
    font-size: 25px;
    text-transform: uppercase;
  }

</style>