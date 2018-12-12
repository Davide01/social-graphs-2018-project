<template>
  <div class="home">
    <div class="container">
      <b-row>
      <b-col>
        <h2> The sentiments of the characters</h2>
        <p> In the figure below the sentiment of each character is displayed based on their description. </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
      <img class="sentiments" src="../assets/characters/charactersSentiment.png">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p> As we can see the happiest character is Grace and the saddest is Angela. 
          Grace is a human and Angela a host. As we can see most of the characters 
          below the average happiness are hosts. These could be because they are programmed 
          and often they got a sad scenario. Most of the humans are on the other side of 
          the plot, they are happier then the hosts. Of course there are exceptions, 
          for example Logan. </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p> Average sentiment of characters is <strong>{{Math.round(mean * 1000 )/ 1000}} </strong> </p>
        <p> The standard deviation is <strong>{{Math.round(std * 1000 )/ 1000}} </strong></p>
      </b-col>
    </b-row>
    <h2>{{characters}}</h2>
    <b-row>
      <b-col>
        <p> In this page all the important characters are displayed. The wordclouds represent their characteristics based on the most appearing words in their description on the wiki pages.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p> The wordclouds can be considered as a description of the characters. They can tell a lot about a character. If he/she is violent, or in which context he appears the most, what characters is he mostly connected to, which clan is he from or has to most connections to and many more.</p>
      </b-col>
    </b-row>
    <char-display v-for="c in names" :key="c.name" :character="c.name" :ext="c.ext" :description="c.text" :sentiment="c.sentiment" :role="c.role" :happiness="c.happiness"></char-display>
    </div>
  </div>
</template>

<script>
import CharDisplay from "@/components/CharDisplay.vue"
export default {
  name: "Characters",
  components: {
      CharDisplay
  },
  data() {
    return {
      characters: "The characters of Westworld",
      mean: 3.9280614067035096,
      std: 0.35382743772001507,
      names: [
        {
          name: "Angela",
          ext: ".jpg",
          text: "Talulah Riley as Angela, a host who welcomes newcomers to the park.",
          role: "host",
          sentiment: 3.432165150713031,
          happiness: ""
        },{
          name: "Akecheta",
          ext: ".jpg",
          text: "Zahn McClarnon as Akecheta, a Ghost Nation elder ",
          role: "host",
          sentiment: 4.107870216044494,
          happiness: ""
        }, {
          name: "Armistice",
          ext: ".jpg",
          text: "Ingrid Bolsø Berdal as Armistice, a host. She is a brutal and ruthless bandit and a member of Hector Escaton's gang.",
          role: "host",
          sentiment: 3.4388618224394434
        },{
          name: "Bernard",
          ext: ".png",
          text: "Jeffrey Wright as Bernard Lowe, head of the Westworld Programming Division, and programmer of artificial people's software. Wright also portrays Arnold Weber, co-founder of Westworld.",
          role: "host",
          sentiment: 4.07399274982028,
          happiness: ""
        },{
          name: "Charlotte",
          ext: ".jpg",
          text: "Tessa Thompson as Charlotte Hale, Executive Director of the Delos Destinations Board, which oversees Westworld and other parks.",
          role: "human",
          sentiment: 4.383771775180085,
          happiness: ""
        }, {
          name: "Clementine",
          ext: ".jpg",
          text: "Angela Sarafyan as Clementine Pennyfeather, a host. She works as a prostitute for Maeve and is one of Westworld's most popular attractions.Lili Simmons portrays another host fulfilling the same role when the original Clementine is decommissioned.",
          role: "host",
          sentiment: 3.60524176672506,
          happiness: ""
        }, {
          name: "Dolores",
          ext: ".jpg",
          text: "Evan Rachel Wood as Dolores Abernathy, the oldest host still working in the park. Initially taking on the role of a rancher's daughter, she comes to discover that her entire life is an elaborately constructed lie.",
          role: "host",
          sentiment: 4.033799501085795,
          happiness: ""
        }, {
          name: "Elsie",
          ext: ".jpg",
          text: "Shannon Woodward as Elsie Hughes, a rising star in the Programming Division tasked with remedying odd behavior in the park's hosts.",
          role: "human",
          sentiment: 3.7001214420084723,
          happiness: ""
        }, {
          name: "Grace",
          ext: ".png",
          text: "Grace is a character in Westworld played by Katja Herbers; a seasoned guest whose latest visit comes at the park’s darkest hour.",
          role: "human",
          sentiment: 4.661257648285833,
          happiness: ""
        }, {
          name: "Hector",
          ext: ".png",
          text: "Rodrigo Santoro as Hector Escaton, a host. He is a wanted gang leader bent on robbing the Mariposa Hotel in Sweetwater.",
          role: "host",
          sentiment: 3.5032521404433044,
          happiness: ""
        }, {
          name: "Lawrence",
          ext: ".jpg",
          text: "Clifton Collins Jr. as Lawrence / El Lazo, a host. He is a charming but dangerous outlaw with a knack for maneuvering and negotiating the various criminal elements of Westworld.",
          role: "host",
          sentiment: 4.242234326625113,
          happiness: ""
        }, {
          name: "Lee",
          ext: ".jpg",
          text: "Simon Quarterman as Lee Sizemore, Westworld's narrative director, whose artistic temperament aggravates his co-workers.",
          role: "human",
          sentiment: 4.273979159991181,
          happiness: ""
        }, {
          name: "Logan",
          ext: ".jpg",
          text: "As an experienced guest, Logan represents a darker side of humanity among visitors: he's someone who loves 'killing' hosts for the flimsiest of reasons. His family owns Delos, and Logan wants the company to increase its investment in the park.",
          role: "human",
          sentiment: 3.826361568012193,
          happiness: ""
        }, {
          name: "Maeve",
          ext: ".jpg",
          text: "Thandie Newton as Maeve Millay, a host, who acts as the madam of Sweetwater, but her unreconciled memories of a former role lead to her becoming self-aware.",
          role: "host",
          sentiment: 3.678143151935371,
          happiness: ""
        }, {
          name: "Peter",
          ext: ".jpg",
          text: "Louis Herthum as Peter Abernathy, Dolores' father. Bradford Tatum also portrayed Peter Abernathy in the first season, after the previous host is decommissioned.",
          role: "host",
          sentiment: 3.6202261063219714,
          happiness: ""
        }, {
          name: "Robert",
          ext: ".jpg",
          text: "Anthony Hopkins as Robert Ford, the co-founder and Park Director of Westworld. Ben Barnes as Logan Delos, a regular guest who introduces William to the park.",
          role: "human",
          sentiment: 4.342279331405906,
          happiness: ""
        }, {
          name: "Stubbs",
          ext: ".jpg",
          text: "Luke Hemsworth as Ashley Stubbs, head of Westworld security, charged with monitoring host and human interactions and ensuring the safety of the guests.",
          role: "human",
          sentiment: 3.899072093277744,
          happiness: ""
        }, {
          name: "Teddy",
          ext: ".jpg",
          text: "James Marsden as Teddy Flood, a host. He is a gunfighter returning to Sweetwater to find Dolores, in hopes of rekindling their relationship.",
          role: "host",
          sentiment: 3.599179105813697,
          happiness: ""
        }, {
          name: "William",
          ext: ".jpg",
          text: "Jimmi Simpson as William, a reluctant first-time visitor to Westworld, joining his future brother-in-law, Logan. Initially dismissive of the park's more lascivious attractions, he slowly uncovers a deeper meaning to the park's narrative.",
          role: "human",
          sentiment: 4.211357671237685,
          happiness: ""
        }
      ]
    };
  },
  mounted() {
    for(let i = 0; i < this.names.length; i++){
      if (this.names[i].sentiment < (this.mean - this.std)) {
        this.names[i].happiness = "sad";
      } else if (this.names[i].sentiment > (this.mean + this.std)) {
        this.names[i].happiness = "happy";
      } else {
        this.names[i].happiness = "neutral";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  h1 {
    margin:30px;
    font-size: 35px;
    text-transform: uppercase;
  }

  .sentiments {
    max-width: 1000px;
  }

  h2 {
    margin-top: 50px;
    font-size: 25px;
    text-transform: uppercase;
  }
</style>

