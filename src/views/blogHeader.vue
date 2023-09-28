<script setup></script>

<template>
  <nav class="menu-bar">
    <div class="group">
      <a class="logo"
        ><img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/381678158_847307653734544_8165485903006211424_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeG5ZuQLDwcSs6NOW-Eg3WmcTxABgVTbEwZPEAGBVNsTBuZP6O0N7DPuq2uhK9SclBXhFOnWvDY5yGX-B8D8quNg&_nc_ohc=R4IXIzVl3j8AX_wUzPI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRSihgEhNGpHkSFEHDYyyrdQF4MRgjtP99uru_hNcUtaQ&oe=653B5D80"
          alt=""
          style="max-width: 80px"
      /></a>
    </div>
    <p class="namePage">กับข้าวกับเบียร์</p>
    <div class="group">
      <p class="item">Review</p>
      <p class="item">About</p>
    </div>
  </nav>
</template>
<style scoped>
.menu-bar {
  background-color: #140970;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.item {
  color: white;
  margin-top: 15%;
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 20px;
}
.logo {
  color: white;
  background-color: transparent;
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 20px;
}
.namePage{
  color: white;
  margin: auto;
  font-size: xx-large;
  padding: 14px 20px;
}
.item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
