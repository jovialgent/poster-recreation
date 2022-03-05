<script>
  //Inspired By https://www.designspiration.com/save/534386732452/
  let eles = [...new Array(13)];
</script>

<div class="poster">
  <div class="poster__container--wrapper">
    <div class="poster__container--content">
      {#each eles as el, i}
        <div class="poster__shape" id="poster-shape-{i + 1}">
          <div class="poster__shape__isolate">
            <div class="poster__shape__noise" />
            <div class="poster__shape__overlay" />
          </div>
        </div>
      {/each}
      <div class="poster__container--names">
        <p class="poster__text poster__text--name">George Petersen</p>
        <p class="poster__text poster__text--name">Copy Poster</p>
        <p class="poster__text poster__text--name">
          <a
            class="poster__text poster__text--name__link"
            href=" https://www.designspiration.com/save/534386732452/"
            >ORIGINAL POSTER</a
          >
        </p>
      </div>
      <div class="poster__container--info">
        <div class="poster__container--info--main">
          <p class="poster__text poster__text--info">Livê</p>
          <p class="poster__text poster__text--info">Låügh</p>
          <p class="poster__text poster__text--info">
            (Lôve)<super class="poster__text poster__text--info--super"
              >100</super
            >
          </p>
        </div>
        <div class="poster__container--info--secondary" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:wght@100;400;700&family=Work+Sans:wght@400;600&display=swap");

  $background: #80c499;

  @mixin containerContent() {
    background: $background;
    width: 100%;
    height: 100%;
    position: relative;
  }

  #poster-shape-1 {
    @include posterNoise($angle: 270deg, $contrast: 160%);
    height: 250px;
    width: 250px;
    top: 25px;
    left: -40px;
    clip-path: polygon(41% 1%, 65% 16%, 65% 76%, 44% 78%, 27% 24%);
  }
  #poster-shape-2 {
    @include posterNoise($angle: 270deg, $contrast: 200%);
    height: 188px;
    width: 96px;
    clip-path: polygon(15% 12%, 99% 0%, 86% 69%, 15% 92%);
    top: 43px;
    left: 105px;
  }
  #poster-shape-3 {
    @include posterNoise($angle: 270deg, $contrast: 300%);
    height: 188px;
    width: 197px;
    clip-path: polygon(39% 0, 83% 84.3%, 44% 101%, 11% 79.2%);
    top: -114px;
    left: 37px;
  }
  #poster-shape-4 {
    @include posterNoise($angle: 120deg, $contrast: 210%);
    height: 240px;
    width: 240px;
    clip-path: polygon(2% 0%, 100% 12%, 87% 35%, 1% 27%);
    top: 37px;
    left: 157px;
    transform: rotate(23deg);
  }
  #poster-shape-5 {
    @include posterNoise($angle: 310deg, $contrast: 480%);
    height: 240px;
    width: 240px;
    top: 167px;
    left: 285px;
    transform: rotate(52deg);
    clip-path: polygon(0 0, 40% -13%, 65% 37%, 0% 27%);
  }
  #poster-shape-6 {
    @include posterNoise($angle: 310deg, $contrast: 480%);
    height: 240px;
    width: 267px;
    top: 71px;
    left: 188px;
    transform: rotate(1deg);
    clip-path: polygon(5% 0%, 70% 33%, 101% 96%, 43% 59%);
  }
  #poster-shape-7 {
    @include posterNoise($angle: 310deg, $contrast: 480%);
    height: 124px;
    width: 156px;
    top: 264px;
    left: 306px;
    transform: rotate(-25deg);
    clip-path: polygon(0 0, 0% 100%, 100% 0);
  }
  #poster-shape-8 {
    @include posterNoise($angle: 310deg, $contrast: 480%);
    height: 242px;
    width: 242px;
    top: 237px;
    left: 298px;
    clip-path: polygon(50% 0%, 78% 75%, 50% 100%, 19% 76%);
    transform: rotate(5deg);
  }
  #poster-shape-9 {
    @include posterNoise($angle: 310deg, $contrast: 480%);
    height: 157px;
    width: 172px;
    top: 432px;
    left: 373px;
    clip-path: polygon(26% 19%, 75% 1%, 52% 91%, 6% 100%);
    transform: rotate(-15deg);
  }
  #poster-shape-10 {
    @include posterNoise($angle: 250deg, $contrast: 220%, $brightness: 500%);
    height: 157px;
    width: 137px;
    top: 432px;
    left: 300px;
    clip-path: polygon(9% 1%, 72% 19%, 99% 100%, 11% 79%);
    transform: rotate(19deg);
  }
  #poster-shape-11 {
    @include posterNoise($angle: 278deg, $contrast: 480%);
    height: 423px;
    width: 351px;
    top: 156px;
    left: 79px;
    clip-path: polygon(20% 0%, 72% 38%, 63% 100%, 0 100%);
    transform: rotate(-19deg);
  }
  #poster-shape-12 {
    @include posterNoise($angle: 275deg, $contrast: 163%, $brightness: 500%);
    height: 342px;
    width: 311px;
    top: 213px;
    left: -93px;
    clip-path: polygon(45% 10%, 73% 0, 63% 89%, 39% 100%);
    transform: rotate(-15deg);
  }
  #poster-shape-13 {
    @include posterNoise($angle: 21deg, $contrast: 118%);
    height: 117px;
    width: 312px;
    top: 437px;
    left: -77px;
    clip-path: polygon(32% 24%, 1% 68%, 42% 96%);
    transform: rotate(-113deg);
  }

  .poster {
    @include poster();

    &__text {
      text-transform: uppercase;
      opacity: 0.65;
      font-family: "Work Sans", sans-serif;
      font-weight: 600;
      color: black;
      margin: 0.25em 0em;
      &--name {
        &__link {
          color: black;
          text-decoration: none;
          &:hover {
            color: white;
          }
        }
      }
      &--info{
          &--super{
              font-size: 0.5em;
              position:relative;
              bottom:0.5em;
          }
      }
    }
    &__container {
      &--wrapper {
        @include containerWrapper();
      }
      &--content {
        @include containerContent();
        overflow: hidden;
      }
      &--names {
        position: absolute;
        right: 6px;
        top: 10px;
      }
      &--info {
        position: absolute;
        left: 0px;
        bottom: 40px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        width:100%;
        &--main {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
</style>
