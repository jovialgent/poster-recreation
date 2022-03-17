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
    left: 130px;
    clip-path: polygon(100% 0, 0 37%, 90% 25%);

    @include bgPosition();
  }
  #poster-shape-2 {
    position: absolute;
    height: 63px;
    width: 51px;
    top: 83px;
    transform: rotate(-24deg);
    left: 305px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    @include bgPosition();
  }
  #poster-shape-3 {
    position: absolute;
    height: 250px;
    width: 250px;
    top: 24px;
    transform: rotate(-24deg) rotateY(180deg);
    left: 358px;
    clip-path: polygon(100% 0, 0 37%, 90% 25%);

    @include bgPosition();
  }
  #poster-shape-4 {
    position: absolute;
    height: 215px;
    width: 182px;
    top: 125px;
    transform: rotate(-82deg);
    left: 150px;
    clip-path: polygon(20% 0%, 100% 81%, 41% 91%, 0% 86%);

    @include bgPosition();
  }
  #poster-shape-5 {
    position: absolute;
    height: 215px;
    width: 182px;
    top: 125px;
    transform: rotate(-82deg);
    left: 150px;
    clip-path: polygon(50% 0%, 0% 100%, 34% 80%);

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
      }
    }
  }
</style>
