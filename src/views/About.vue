<template>
  <div class="region-tab background-default">
    <div class="region-menu">
      <div class="region-logo">
        <img style="width: 150px" src="../assets/logo.png" />
      </div>
      <div class="region-scroll">
        <div class="card">
          <div class="card-about-container">
            <p>
              A mobile application that provides a list of the local handmade
              products and delicacies from all 17 municipalities of Aklan
            </p>
          </div>
        </div>
        <div class="region-space-15"></div>
        <div class="card-alt">
          <div class="card-about-container">
            <p>
              It aims to promote the province of Aklan locally, nationally and internationally by introducting the local products and delicacies that are authentically made by Aklanons.
            </p>
          </div>
        </div>
        <div class="region-space-15"></div>
        <div class="card">
          <div class="card-about-container">
            <p>
              The direct translation of the application, Bugna it Akea, literally means "Blessing of Aklan."
            </p>
          </div>
        </div>
        <div class="region-space-15"></div>
        <div class="card">
          <div class="card-about-container">
            <p>
              The name of the application entails that the products that are made by local business owners of Aklan should be considered as blessings of the provice
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-product-title {
  font-size: 20px;
}

.card p {
  font-family: 'GlacialIndifferenceRegular';
  font-weight: bold;
  font-style: normal;
  font-size: 13px;
  color: white;
}

.card-alt p {
  font-family: 'GlacialIndifferenceRegular';
  font-weight: bold;
  font-style: normal;
  font-size: 13px;
  color: black;
}

.region-menu {
  width: 100%;
  max-width: 400px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.region-scroll {
  height: 75%;
  overflow: scroll;
}
.region-menu-logo {
  position: absolute;
  bottom: 5px;
  left: 0px;
  height: 5em;
}

.region-menu-map {
  position: absolute;
  bottom: 5px;
  right: 0px;
  height: 5em;
}

.region-space-15 {
  height: 15px;
  width: 100%;
}

.card {
  width: 80%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  padding: 20px;
  background-color: #a5210a;
  color: #edbf09;
  box-shadow: 2px 6px #edbf09;
  min-height: 75px;
}

.card-product {
  display: flex !important;
  flex-direction: row !important;
}

.card-product-image-container {
  width: 40%;
  height: 100%;
}

.card-product-image-container img {
  height: 80%;
  width: 100%;
}

.card-about-container {
  width: 100%;
  height: 100%;
  padding: 5px;
}

.card-product-description {
  font-size: 12px;
  letter-spacing: 2px;
  text-align: justify;
}

.card-alt {
  width: 80%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  padding: 20px;
  background-color: #edbf09;
  color: #a5210a;
  box-shadow: 2px 6px #a5210a;
  min-height: 75px;
}

.font-glacial {
  font-family: "GlacialIndifferenceRegular";
  font-weight: bold;
  font-style: normal;
}
.region-title {
  font-family: "Shrikhand";
  font-size: 40px;
  color: #ea8643;
}
</style>
