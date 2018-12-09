<template>
  <div class="home">
    <div class="container">
    <h1>{{characters}}</h1>
    <b-row>
      <b-col>
        <p> In this page all the important characters are displayed. The wordclouds represent their characteristics based on the most appearing words in their description on the wiki pages.</p>
      </b-col>
    </b-row>
    <char-display v-for="c in names" :key="c.name" :character="c.name" :ext="c.ext" :description="c.text"></char-display>
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
      names: [
        {
          name: "Angela",
          ext: ".jpg",
          text: "Talulah Riley as Angela, a host who welcomes newcomers to the park."
        },{
          name: "Akecheta",
          ext: ".jpg",
          text: "Zahn McClarnon as Akecheta, a Ghost Nation elder "
        }, {
          name: "Armistice",
          ext: ".jpg",
          text: "Ingrid Bolsø Berdal as Armistice, a host. She is a brutal and ruthless bandit and a member of Hector Escaton's gang."
        },{
          name: "Bernard",
          ext: ".png",
          text: "Jeffrey Wright as Bernard Lowe, head of the Westworld Programming Division, and programmer of artificial people's software. Wright also portrays Arnold Weber, co-founder of Westworld."
        },{
          name: "Charlotte",
          ext: ".jpg",
          text: "Tessa Thompson as Charlotte Hale, Executive Director of the Delos Destinations Board, which oversees Westworld and other parks."
        }, {
          name: "Clementine",
          ext: ".jpg",
          text: "Angela Sarafyan as Clementine Pennyfeather, a host. She works as a prostitute for Maeve and is one of Westworld's most popular attractions.Lili Simmons portrays another host fulfilling the same role when the original Clementine is decommissioned."
        }, {
          name: "Dolores",
          ext: ".jpg",
          text: "Evan Rachel Wood as Dolores Abernathy, the oldest host still working in the park. Initially taking on the role of a rancher's daughter, she comes to discover that her entire life is an elaborately constructed lie."
        }, {
          name: "Elsie",
          ext: ".jpg",
          text: "Shannon Woodward as Elsie Hughes, a rising star in the Programming Division tasked with remedying odd behavior in the park's hosts."
        }, {
          name: "Grace",
          ext: ".png",
          text: "Grace is a character in Westworld played by Katja Herbers; a seasoned guest whose latest visit comes at the park’s darkest hour."
        }, {
          name: "Hector",
          ext: ".png",
          text: "Rodrigo Santoro as Hector Escaton, a host. He is a wanted gang leader bent on robbing the Mariposa Hotel in Sweetwater."
        }, {
          name: "Lawrence",
          ext: ".jpg",
          text: "Clifton Collins Jr. as Lawrence / El Lazo, a host. He is a charming but dangerous outlaw with a knack for maneuvering and negotiating the various criminal elements of Westworld."
        }, {
          name: "Lee",
          ext: ".jpg",
          text: "Simon Quarterman as Lee Sizemore, Westworld's narrative director, whose artistic temperament aggravates his co-workers."
        }, {
          name: "Logan",
          ext: ".jpg",
          text: "As an experienced guest, Logan represents a darker side of humanity among visitors: he's someone who loves 'killing' hosts for the flimsiest of reasons. His family owns Delos, and Logan wants the company to increase its investment in the park."
        }, {
          name: "Maeve",
          ext: ".jpg",
          text: "Thandie Newton as Maeve Millay, a host, who acts as the madam of Sweetwater, but her unreconciled memories of a former role lead to her becoming self-aware."
        }, {
          name: "Peter",
          ext: ".jpg",
          text: "Louis Herthum as Peter Abernathy, Dolores' father. Bradford Tatum also portrayed Peter Abernathy in the first season, after the previous host is decommissioned."
        }, {
          name: "Robert",
          ext: ".jpg",
          text: "Anthony Hopkins as Robert Ford, the co-founder and Park Director of Westworld. Ben Barnes as Logan Delos, a regular guest who introduces William to the park."
        }, {
          name: "Stubbs",
          ext: ".jpg",
          text: "Luke Hemsworth as Ashley Stubbs, head of Westworld security, charged with monitoring host and human interactions and ensuring the safety of the guests."
        }, {
          name: "Teddy",
          ext: ".jpg",
          text: "James Marsden as Teddy Flood, a host. He is a gunfighter returning to Sweetwater to find Dolores, in hopes of rekindling their relationship."
        }, {
          name: "William",
          ext: ".jpg",
          text: "Jimmi Simpson as William, a reluctant first-time visitor to Westworld, joining his future brother-in-law, Logan. Initially dismissive of the park's more lascivious attractions, he slowly uncovers a deeper meaning to the park's narrative."
        }
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
</style>

