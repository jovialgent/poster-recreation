<script>
  //  https://www.designspiration.com/save/10914589481/
  let eles = [...new Array(16)];
</script>

<div class="poster">
  <section class="poster__container--wrapper">
    <section class="poster__container--shape">
      {#each eles as el, i}
        <div class="poster__shape" id="poster-shape-{i + 1}">
          <div class="poster__shape__isolate">
            <div class="poster__shape__noise" />
            <div class="poster__shape__overlay" />
          </div>
        </div>
      {/each}
    </section>
    <section class="poster__container--title">
      <h1 class="text text__title">Neon Lady</h1>
      <h1 class="text text__title">
        <a
          class="text text__link"
          href="https://www.designspiration.com/save/10914589481/"
          >Original Poster</a
        >
      </h1>
    </section>
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";
  @import url("https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;1,500&display=swap");

  @mixin bgImage() {
    background: url("../../public/born-ruffians/bg.jpeg");
  }

  @mixin bgPosition() {
    @include bgImage();
    background-repeat: no-repeat;

    // background: rgb(random(255), random(255), random(255));
  }

  #poster-shape-1 {
    position: absolute;
    height: 250px;
    width: 250px;
    top: 125px;
    transform: rotate(-24deg);
    left: 59px;
    clip-path: polygon(100% 0, 0 37%, 90% 25%);
    @include bgPosition();
    background-size: 357%;
    background-position: 0% 57%;
  }
  #poster-shape-2 {
    position: absolute;
    height: 63px;
    width: 51px;
    top: 83px;
    transform: rotate(-24deg);
    left: 235px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    @include bgPosition();
    background-size: 635%;
    background-position: 52% 80%;
  }
  #poster-shape-3 {
    position: absolute;
    height: 250px;
    width: 250px;
    top: 24px;
    transform: rotate(-24deg) rotateY(180deg);
    left: 288px;
    clip-path: polygon(100% 0, 0 37%, 90% 25%);
    @include bgPosition();
    background-size: 635%;
    background-position: 52% 80%;
  }
  #poster-shape-4 {
    position: absolute;
    height: 215px;
    width: 182px;
    top: 125px;
    transform: rotate(-82deg);
    left: 81px;
    clip-path: polygon(20% 0%, 100% 81%, 41% 91%, 0% 86%);
    @include bgPosition();
    background-size: 1015%;
    background-position: 55% 7%;
  }
  #poster-shape-5 {
    position: absolute;
    height: 215px;
    width: 182px;
    top: 181px;
    transform: rotate(-81deg);
    left: 72px;
    clip-path: polygon(50% 0%, 0% 100%, 33% 86%);
    @include bgPosition();
    background-size: 577%;
    background-position: 70% 39%;
  }
  #poster-shape-6 {
    position: absolute;
    height: 215px;
    width: 177px;
    top: 129px;
    transform: rotate(-25deg);
    left: 238px;
    clip-path: polygon(54% -8%, 81% 37%, 37% 61%, 9% 46%, 31% 0);
    @include bgPosition();
    background-size: 689%;
    background-position: 50% 3%;
  }
  #poster-shape-7 {
    position: absolute;
    top: 259px;
    left: 210px;
    transform: rotate(-28deg);
    clip-path: polygon(13% 54%, 61% 0%, 100% 36%, 31% 94%);
    height: 96px;
    width: 118px;
    @include bgPosition();
    background-size: 678%;
    background-position: 68% 8%;
  }
  #poster-shape-8 {
    position: absolute;
    top: 301px;
    left: 249px;
    transform: rotate(-19deg);
    clip-path: polygon(0% 3%, -45% 28%, 100% 102%);
    height: 146px;
    width: 118px;
    @include bgPosition();
    background-size: 1688%;
    background-position: 54% 72%;
  }
  #poster-shape-9 {
    position: absolute;
    top: 274px;
    left: 293px;
    transform: rotate(-136deg);
    clip-path: polygon(1% 21%, 4% 92%, 97% 0%);
    height: 145px;
    width: 143px;
    @include bgPosition();
    background-size: 430%;
    background-position: 71% 46%;
  }
  #poster-shape-10 {
    position: absolute;
    top: 274px;
    left: 275px;
    transform: rotate(9deg);
    clip-path: polygon(21% 0%, 80% 0%, 100% 63%, -1% 93%);
    height: 99px;
    width: 150px;
    @include bgPosition();
    background-size: 630%;
    background-position: 69% 61%;
  }
  #poster-shape-11 {
    position: absolute;
    top: 31px;
    left: 289px;
    transform: rotate(-28deg);
    clip-path: polygon(1% 31%, 13% 100%, 82% 68%);
    height: 119px;
    width: 272px;
    @include bgPosition();
    background-size: 437%;
    background-position: 60% 30%;
  }
  #poster-shape-12 {
    position: absolute;
    top: 262px;
    left: 363px;
    transform: rotate(-6deg);
    clip-path: polygon(35% 20%, 100% 0%, 70% 101%, 41% 96%);
    height: 89px;
    width: 121px;
    @include bgPosition();
    background-size: 714%;
    background-position: 45% 4%;
  }
  #poster-shape-13 {
    position: absolute;
    top: 189px;
    left: 316px;
    transform: rotate(1deg);
    clip-path: polygon(35% 0%, 78% 48%, 65% 99%, 0% 86%);
    height: 93px;
    width: 135px;
    @include bgPosition();
    background-size: 714%;
    background-position: 71% 19%;
  }
  #poster-shape-14 {
    position: absolute;
    top: 211px;
    left: 412px;
    transform: rotate(37deg);
    clip-path: polygon(0 48%, 20% 100%, 83% 30%);
    height: 93px;
    width: 74px;
    @include bgPosition();
    background-size: 814%;
    background-position: 85% 11%;
  }
  #poster-shape-15 {
    position: absolute;
    top: 47px;
    left: 415px;
    transform: rotate(40deg);
    clip-path: polygon(50% 0%, 0% 104%, 99% 106%);
    height: 186px;
    width: 74px;
    @include bgPosition();
    background-size: 678%;
    background-position: 39% 8%;
  }
  #poster-shape-16 {
    position: absolute;
    top: 63px;
    left: 445px;
    transform: rotate(19deg);
    clip-path: polygon(50% 0%, 1% 100%, 99% 119%);
    height: 190px;
    width: 72px;
    @include bgPosition();
    background-size: 1078%;
    background-position: 24% 8%;
  }

  .text {
    font-family: "Cormorant", serif;
    font-style: italic;
    &__title {
      color: white;
      margin: 0;
      text-transform: uppercase;
      font-size: 1em;
    }
    &__link {
      color: white;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
  }

  .poster {
    @include poster();

    &__container {
      &--title {
        position: absolute;
        top: 66%;
        left: 1.5em;
        border-bottom: 1px solid white;
        display: flex;
        justify-content: space-between;
        width: calc(100% - 3em);
        opacity: 0.75;
      }
      &--shape {
        position: absolute;
        top: 57px;
        left: -108px;
        transform-origin: center;
        transform: rotate(-7deg) scale(1.25);
      }
      &--wrapper {
        @include containerWrapper();
        @include bgImage();
        background-size: cover;
        background-position: center;
        position: relative;
      }
    }
  }
</style>
