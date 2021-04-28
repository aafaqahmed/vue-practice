<template>
  <div>
    <app-hero></app-hero>
    <app-about></app-about>
    <br><hr><br>
    <app-about01></app-about01>
    <br><hr><br>
    <app-text class="text-center" :text="text"></app-text>
    <br><hr><br>
    <app-image>
      <img slot="img01" src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" alt="">
      <img slot="img02" src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" alt="">
      <img slot="img03" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="">
    </app-image>
  </div>
</template>

<script>
import About from '../components/home/About.vue'
import About01 from '../components/home/About01.vue'
import Image from '../components/home/Image.vue'
import Text from '../components/home/Text.vue';
import Hero from '../common/Hero.vue'
export default {
  data(){
    return{
      text:'This is text using props!!!'
    }
  },
  components:{
    'app-about':About,
    'app-about01': About01,
    'app-text': Text,
    'app-image': Image,
    'app-hero' : Hero
  }
}
</script>