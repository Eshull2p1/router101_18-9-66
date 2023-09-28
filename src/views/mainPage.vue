<template>
  <jumbo-title></jumbo-title>
  <div class="ColShop">
    <div class="col" v-for="(item, index) in travelList" :key="index">
      <div class="card" style="width: 18rem">
        <img class="card-img-top" :src="item.imageSrc" alt="Travel Destination" />
        <div class="card-body">
          <h5 class="card-title">{{ item.Name }}</h5>
          <p class="card-text">ราคาเริ่มต้นที่ {{ item.price }}</p>
          <router-link :to="item.path" class="router-link ">สนใจ {{ item.Name }} </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import JumboTitle from './JumboTitle.vue'


const travelList = ref([
  { Name: 'สุนทรารมณ์', price: 219, path: '/Bar1', imageSrc: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t39.30808-6/275785111_104666465518677_1157293760977336208_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGfOBCX2uU4HXosa58T46NDmqAF2dZmucuaoAXZ1ma5y9kH8BDaezbGoo4UntP1oBBLjFS8hMdiSqGxUYFF5qrv&_nc_ohc=U6Pq-gLdjaoAX_YWmHk&_nc_ht=scontent.fbkk8-3.fna&oh=00_AfAOO0Rf6RpKKnkQD2-7135BeBQJm04GpOCLVPXrzV-Svg&oe=651797D3' },
  { Name: 'ฯลฯ', price: 199, path: '/Bar2', imageSrc: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t39.30808-6/326435697_501993212005268_2267045348590722770_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeH6wOSgjmnBu0mx2CdHF44GxTbvRg4F5HPFNu9GDgXkc69Xy8MF7kytaavwQfgDD0pujV73nQ0rtrM3iipacngf&_nc_ohc=xiXWAA8jLckAX-2HbNj&_nc_ht=scontent.fbkk8-3.fna&oh=00_AfBoK-yKmezGLe0x3J7YSiOThBxAYsRo1lVtBDrahS23ZA&oe=651873CF' },
  { Name: 'Tamma Cafe', price: 500, path: '/Bar3', imageSrc: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t39.30808-6/361305041_779199773993037_7111305937619716444_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeE8AmCqgV6vH2N-XXd2RtluKhovrXyAa8YqGi-tfIBrxtoycFMAaCWmeArKq2l-FXQVlFi6wW5SrIh2WO-he8vv&_nc_ohc=rhHMth21Se8AX90vz6V&_nc_ht=scontent.fbkk8-3.fna&oh=00_AfDVIRyv7w7lOY-iBJ8oila98e20gWJ8gcdhAwA_1Dp8Hg&oe=6518B587' },
  { Name: 'OverNight', price: 299, path: '/Bar4', imageSrc: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t39.30808-6/314943429_107842845474701_641691726405226769_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeE2jtbOWcxEQxWt5VOcktcwEYxzLzXtdwsRjHMvNe13CzOH8qAa3eRI-d2PHcleZmuOx09IYZ10rhrdDC906sgc&_nc_ohc=7LL9V4RNpl4AX9nIxO2&_nc_ht=scontent.fbkk8-3.fna&oh=00_AfDPIZXIuQZ3FQ1onD__C3i0YjB9gDSGbwYGPWczTBDwdw&oe=65178BF1' },
  { Name: 'ChaChaBBT', price: 150, path: '/Bar5', imageSrc: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t39.30808-6/292577944_2874300502863526_1864911112707267674_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFTVvLO_SoSo_9mO4RfKbOm57bsMusfZCLntuwy6x9kInRRt7m9HesmrZBgpWO_8JPtaGD_SZysUAHqoavECuKF&_nc_ohc=8o1fxX51u50AX8hGZGe&_nc_ht=scontent.fbkk8-3.fna&oh=00_AfAPqTRqYIU03tVLi7l-FkwQIOpZZ7UB9uyqIxB3GbnmqA&oe=6518C726' },
  { Name: 'ในใจเทอ', price: 0, path: '/Bar6', imageSrc: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/381662888_702854637842947_1835758075658419294_n.png?stp=dst-png_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHjXlTQpuq6w_VDBA6yOYpBlXM7sEpoNe-VczuwSmg174l6jnqhCuvJAvmU_RFyvM0KaEE2rD_IE_i5VLp9LlXc&_nc_ohc=LhJTSsoEAkQAX8IqDdb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSEWpg4kG6RmHqyZRJ_BE2ZL0ny-o7eOgAfXr30d3TlKg&oe=653AA360' }
])
</script>

<style scoped>
.ColShop {
  margin-left: 6%;
  margin-right: 6%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 20px;
  padding: 30px;
  max-width: 1200px;
}

.card {
  background-color: #ccc7fa;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-left: 11%;
  margin-right: 11%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  color: #777;
}

.router-link:hover {
  text-decoration: line;
  color: #000000;
  cursor: pointer;
  font-weight: bolder;
}
.router-link {
  text-decoration: line;
  color: #000000;
  cursor: pointer;
  font-weight: 300px;
}

</style>
