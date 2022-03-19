<script>
  //  https://www.designspiration.com/save/10914589481/
  let eles = [...new Array(13)];
</script>

<div class="poster">
  <section class="poster__container--wrapper">
    {#each eles as el, i}
      <div class="poster__shape" id="poster-shape-{i + 1}">
        <div class="poster__shape__isolate">
          <div class="poster__shape__noise" />
          <div class="poster__shape__overlay" />
        </div>
      </div>
    {/each}
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";

  @mixin bgImage() {
    background: url("../../public/born-ruffians/bg.jpeg");
  }

  @mixin bgPosition() {
    //   @include bgImage();
    background: rgb(random(255), random(255), random(255));
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
  }

  .poster {
    @include poster();

    &__container {
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
