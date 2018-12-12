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
              <p> With the following set of graphs we can see how the network of characters evolve throughout the show over time. From the network figures it is easy to see how the show sometimes focuses on the host on certain episodes and sometimes on the humans.</p>
            </b-col>
          </b-row>
          <network-over-time v-for="e in episodes" :key="e.text" :fileDegree="e.fileDegree" :fileNetwork="e.fileNetwork" :text="e.text" :synopsis="e.synopsis"></network-over-time>
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
          fileNetwork: "Network s01 episode 1.png",
          synopsis: "As another day of fantasy plays out in Westworld - a vast, remote park where guests pay top dollar to share wild-west adventures with android `hosts` - top programmer Bernard Lowe alerts park founder Dr. Robert Ford, about incidents of aberrant behavior cropping up in some recently re-coded hosts. Meanwhile, in the Westworld town of Sweetwater, a rancher's daughter named Dolores encounters a gunslinger named Teddy in the street - but their predictable narrative is upended by the appearance of a ruthless Man in Black and, later, by a supporting host's unscripted encounter with an artifact of the outside world. - Official Synopsis"
        },{
          text: "Season 01 - Episode 02",
          fileDegree: "Degree plot s01 episode 2.png",
          fileNetwork: "Network s01 episode 2.png",
          synopsis: "First-time guest William and repeat visitor Logan, arrive at Westworld with different expectations and agendas. Bernard and Quality Assurance head Theresa Cullen debate whether a recent host anomaly is contagious. Meanwhile, behaviour engineer Elsie Hughes tweaks the emotions of Maeve, a madam in Sweetwater’s brothel, in order to avoid a recall. Head Writer Lee Sizemore pitches his latest narrative to the team, but Dr. Ford has other ideas. The Man in Black conscripts a condemned man, Lawrence, to help him uncover Westworld’s deepest secrets. - Official Synopsis"
        },{
          text: "Season 01 - Episode 03",
          fileDegree: "Degree plot s01 episode 3.png",
          fileNetwork: "Network s01 episode 3.png",
          synopsis: "Elsie Hughes and Ashley Stubbs head into the hills in pursuit of a missing host. Teddy Flood gets a new backstory, which sets him off in pursuit of a new villain, leaving Dolores Abernathy alone in Sweetwater. Bernard Lowe investigates the origins of madness and hallucinations within the hosts. William finds an attraction he'd like to pursue and drags Logan along for the ride. - Official Synopsis"
        },{
          text: "Season 01 - Episode 04",
          fileDegree: "Degree plot s01 episode 4.png",
          fileNetwork: "Network s01 episode 4.png",
          synopsis: "Dolores joins William and Logan on a bounty hunt in the badlands. The Man in Black, with Lawrence in tow, finds a critical clue in his search to unlock the maze. Dr. Ford and Theresa discuss the future of the park. Maeve is troubled by a recurring vision. - Official Synopsis"
        },{
          text: "Season 01 - Episode 05",
          fileDegree: "Degree plot s01 episode 5.png",
          fileNetwork: "Network s01 episode 5.png",
          synopsis: "A perilous mission awaits Dolores, William and Logan once they arrive in the amoral town of Pariah. Meanwhile, the Man in Black finds an improbable partner in his crusade. - Official Synopsis"
        },{
          text: "Season 01 - Episode 06",
          fileDegree: "Degree plot s01 episode 6.png",
          fileNetwork: "Network s01 episode 6.png",
          synopsis: "Maeve charms Felix; Elsie discovers evidence that could point to sabotage; Teddy and the Man in Black conflict with a garrison. - Official Synopsis"
        },{
          text: "Season 01 - Episode 07",
          fileDegree: "Degree plot s01 episode 7.png",
          fileNetwork: "Network s01 episode 7.png",
          synopsis: "Dolores and William journey into treacherous terrain; Maeve delivers an ultimatum; Bernard considers his next move.. - Official Synopsis"
        },{
          text: "Season 01 - Episode 08",
          fileDegree: "Degree plot s01 episode 8.png",
          fileNetwork: "Network s01 episode 8.png",
          synopsis: "Bernard struggles with a mandate; Maeve looks to change her script; Teddy is jarred by dark memories. - Official Synopsis"
        },{
          text: "Season 01 - Episode 09",
          fileDegree: "Degree plot s01 episode 9.png",
          fileNetwork: "Network s01 episode 9.png",
          synopsis: "Dolores and Bernard reconnect with their pasts; Maeve makes a bold proposition to Hector; Teddy finds enlightenment, at a price. - Official Synopsis"
        },{
          text: "Season 01 - Episode 10",
          fileDegree: "Degree plot s01 episode 10.png",
          fileNetwork: "Network s01 episode 10.png",
          synopsis: "Ford unveils his vision for a bold new narrative. Enlightened by Bernard and The Man in Black, Dolores comes to terms with who she is. Maeve sets her liberation plan in motion as Westworld faces a major upheaval. - Official Synopsis"
        },{
          text: "Season 02 - Episode 01",
          fileDegree: "Degree plot s02 episode 1.png",
          fileNetwork: "Network s02 episode 1.png",
          synopsis: "The puppet show is over, and we are coming for you and the rest of your kind. Welcome back to Westworld. - Official Synopsis"
        },{
          text: "Season 02 - Episode 02",
          fileDegree: "Degree plot s02 episode 2.png",
          fileNetwork: "Network s02 episode 2.png",
          synopsis: "Dolores remembers she's been to the outside world; William makes a bold business venture. - Official Synopsis"
        },{
          text: "Season 02 - Episode 03",
          fileDegree: "Degree plot s02 episode 3.png",
          fileNetwork: "Network s02 episode 3.png",
          synopsis: "Dolores makes her next move; Charlotte scrambles to protect Delos' most prized asset; Bernard gets closer to the truth. - Official Synopsis"
        },{
          text: "Season 02 - Episode 04",
          fileDegree: "Degree plot s02 episode 4.png",
          fileNetwork: "Network s02 episode 4.png",
          synopsis: "An enigmatic figure becomes the center of Delos' secret project; The Man in Black and Lawrence follow the path to Las Mudas, but run into trouble. - Official Synopsis"
        },{
          text: "Season 02 - Episode 05",
          fileDegree: "Degree plot s02 episode 5.png",
          fileNetwork: "Network s02 episode 5.png",
          synopsis: "Maeve and her allies have revelations in a new world; Dolores makes a decision about Teddy; Karl discovers something sinister about the hosts. - Official Synopsis"
        },{
          text: "Season 02 - Episode 06",
          fileDegree: "Degree plot s02 episode 6.png",
          fileNetwork: "Network s02 episode 6.png",
          synopsis: "Maeve continues her search for her daughter; Dolores calculates her next move; Elsie gets closer to the truth about Delos. - Official Synopsis"
        },{
          text: "Season 02 - Episode 07",
          fileDegree: "Degree plot s02 episode 7.png",
          fileNetwork: "Network s02 episode 7.png",
          synopsis: "Bernard meets with an unexpected old friend; The Cradle is under threat; Maeve encounters a scene from her past. - Official Synopsis"
        },{
          text: "Season 02 - Episode 08",
          fileDegree: "Degree plot s02 episode 8.png",
          fileNetwork: "Network s02 episode 8.png",
          synopsis: "The telling of Akecheta and the Ghost Nation's journey to consciousness; Maeve's life hangs in the balance. - Official Synopsis"
        },{
          text: "Season 02 - Episode 09",
          fileDegree: "Degree plot s02 episode 9.png",
          fileNetwork: "Network s02 episode 9.png",
          synopsis: "The Man in Black confronts his troubled past; Charlotte forms a plan to kill all the hosts. - Official Synopsis"
        },{
          text: "Season 02 - Episode 10",
          fileDegree: "Degree plot s02 episode 10.png",
          fileNetwork: "Network s02 episode 10.png",
          synopsis: "Everyone converges at the Valley Beyond. - Official Synopsis"
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