<template>
  <div class="home">
    <!-- <CarouselAccueil/> -->
    <div class="container">
      <div class="flexible">
        <div v-for="(item,i) in groupe" :key="i">
          <div class="card">
            <div class="circle">
              <img :src="item.src"  class="image"/>
            </div>
            <div class="information">
              <div>{{item.nom}}</div>
              <div>{{item.prenom}}</div>
            </div>
            <div class="action">
              <v-btn class="orangeBtn" dark to="/Equipe">
                A propos
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="img-right">
        <img :src="imgRight">
      </div>
    </div>
  </div>
</template>

<script>
// import CarouselAccueil from '@/components/CarouselAccueil';
export default {
  name: 'Home',
  
  data: () => ({
    imgRight: require('../assets/carousel/plage-fete_5365123.jpg'),
    groupe: [
      {
        nom:"RAFIEFERANA ",
        prenom:"Tiavina Alinah",
        classe:"ESIIA3",
        src: require('../assets/carousel/beer.jpg'),
      },
      {
        nom:"JJ",
        prenom:"HH",
        classe:"KK",
        src: require('../assets/carousel/beer.jpg'),
      },
      {
        nom:"KJK",
        prenom:"JJ",
        classe:"KK",
        src: require('../assets/carousel/beer.jpg'),
      },
      {
        nom:"JJ",
        prenom:"HH",
        classe:"KK",
        src: require('../assets/carousel/beer.jpg'),
      },
      {
        nom:"KJK",
        prenom:"JJ",
        classe:"KK",
        src: require('../assets/carousel/beer.jpg'),
      },
    ]
  }),
  components: {
    // CarouselAccueil,
  },
}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-between;
  }
  .flexible{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .img-right{
    margin-top: 25px;
  }
  .img-right img{
    width: 90%;
    margin-left: 10%;
    height: 70vh;
    object-fit: cover;
    
    position: sticky;
    top: 25px;
  }
  .card{
    width: 100%;
    box-shadow: 0px 0px 25px rgba(190, 190, 190, 0.322);
    margin: 15px 15px;
    padding: 25px;
    display: flex;
    align-content: center;
    border-radius: 4px;
  }
  .card .information{
    margin-left: 20px;
    margin-right: 20px;
    width: 40%;
  }
  .card .circle{
    width: 100px;
    height: 100px;
  }
  .card .circle .image{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid black;
    object-fit: cover;
  }
  .orangeBtn{
    background: #FC997C !important;
    align-self: flex-end;
  }
</style>
