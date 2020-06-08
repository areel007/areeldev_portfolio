<template>
  <div id="biodata">
    <div id="image">
      <img src="../../assets/img/hngi.jpg" alt="profile image" />
    </div>
    <div id="detail">
      <p id="greet">Hi, I am</p>
      <span id="name">Sunday Morenikeji</span>
      <p id="profession">{{ this.profession }}</p>
    </div>
    <div id="sidebar"></div>
  </div>
</template>

<script>
export default {
  name: "biodata",
  data() {
    return {
      name: "Sunday Morenikeji",
      profession: "Frontend Dev"
    };
  }
};
</script>

<style scoped>
#biodata {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
}
#image {
  grid-area: 1/1/2/2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
#image image {
    width: 100%;
}
#detail {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
}
#detail p {
  font-size: 2rem;
  width: 100%;
  padding-left: 1rem;
}
#name {
  font-size: 5rem;
  font-weight: 800;
  width: 100%;
  padding-left: 1rem;
}
#profession {
    background-color: #14eeb7;
    color: #fff;
    padding: .5rem;
}
/* Responsiveness */
@media screen and (max-width: 1000px) {
    #biodata {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        height: auto;
        padding: 0;
    }
    #detail {
        grid-area: 1/1/2/2;
        z-index: 5;
        width: 100%;
    }
    #image {
        height: auto;
        width: 100vw;
    }
    #image img {
        width: 100%;
    }
    #name {
        text-align: center;
        color: #f0f0f0;
        text-shadow: 0 0 2px green;
        padding-left: 0;
    }
    #profession {
        text-align: center;
        padding: .5rem 0;
    }
    #greet {
        display: none;
    }
}
@media screen and (max-width: 450px) {
    #name {
        font-size: 3rem;
    }
}
@media screen and (max-width: 260px) {
    #detail {
        padding: 0
    }
}
</style>