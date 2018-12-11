<template>
    <div>
        <nav class="navbar navbar-dark">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/westworld-logo.png" width="120" height="100">
            </router-link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/home">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/network"> Network Analysis
                        <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/characters">Characters</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/seasons">Seasons</router-link>
                </li>
                <li class="nav-item">
                     <a href="http://nbviewer.jupyter.org/github/Davide01/social-graphs-2018-project/blob/master/Explainer%20Notebook.ipynb">Explainer Notebook</a> 
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      msg: ""
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
ul {
  display: inline-block;
  margin: 0;
  padding: 0;
}
ul li {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  min-width: 90px;
}
.navbar-dark {
  background: #000;
  color: white;
  text-transform: uppercase;
}
.navbar-nav {
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.navbar .navbar-nav .router-link {
  text-transform: uppercase;
  color: white;
}

.navbar .navbar-nav .nav-link.router-link-active {
  text-transform: uppercase;
  color: white;
  position: relative;
  &:after {
    content: "";
    width: 70px;
    height: 2px;
    background: rgb(41, 91, 255);
    /*background: #fff;*/
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
