<script>
  // https://www.behance.net/gallery/97124351/Poster-Collection/modules/560843111
</script>

<div class="poster">
  <section class="poster__container--wrapper">
    <section class="poster__container--overlay" />
    <section class="poster__container--bg" />
    <section class="poster__container--title">
      <h1 class="text--title--header">The Faerie Queene</h1>
      <h2 class="text--title--subheader">Edmund Spenser</h2>
      <p class="text--title" />
    </section>
    <section class="poster__container poster__container--knights">
      <section class="poster__container--pop">
        <h1 class="text--info text--info--header">Original Poster</h1>
        <h2 class="text--info text--info--subheader">
          <a
            href="https://www.behance.net/gallery/97124351/Poster-Collection/modules/560843111"
            target="_blank"
            class="text--info text--info--link">Link</a
          >
        </h2>
        <p class="text--info" />
      </section>
    </section>
    <section class="poster__container poster__container--red-crosse ">
      <section class="poster__container--pop">
        <h1 class="text--info text--info--header">Red Crosse Knight</h1>
        <h2 class="text--info text--info--subheader">Knight of Holiness</h2>
        <p class="text--info">Basically, Riverdale with a dragon and a lion.</p>
      </section>
    </section>
    <section class="poster__container poster__container--gunyon">
      <section class="poster__container--pop">
        <h1 class="text--info text--info--header">Gunyon</h1>
        <h2 class="text--info text--info--subheader">Knight of Temperance</h2>
        <p class="text--info">
          King Arthur comes in and kills a bunch of zombies. (And I guess
          Gunyon does stuff too.)
        </p>
      </section>
    </section>
    <section class="poster__container poster__container--britomart ">
      <section class="poster__container--pop">
        <h1 class="text--info text--info--header">Britomart</h1>
        <h2 class="text--info text--info--subheader">Knight of Chastity</h2>
        <p class="text--info">
          Britomart proves to be the most capable knight in all of the books and
          Merlin shows up to tell her to marry a boring dude with a robot.
        </p>
      </section>
    </section>
    <section class="poster__container poster__container--friendship ">
      <section class="poster__container--pop">
        <h1 class="text--info text--info--header">Cambell and Telamond</h1>
        <h2 class="text--info text--info--subheader">Knights of Friendship</h2>
        <p class="text--info">
          Britomart meets her future husband with a robot, but should realize
          she needs to get with Amoret who is way cooler. (Britomart X Amoret
          For Life)
        </p>
      </section>
    </section>
    <section class="poster__container poster__container--artegall ">
      <section class="poster__container--pop">
        <h1 class="text--info text--info--header">Aretgall</h1>
        <h2 class="text--info text--info--subheader">Knight of Justice</h2>
        <p class="text--info">
          Britomart's husband with a robot goes to a thinly veiled metaphor for
          Ireland and kills everyone. (Seriously, Spenser hates Ireland)
        </p>
      </section>
    </section>
    <section class="poster__container poster__container--calidore ">
      <section class="poster__container--pop">
        <h1 class="text--info text--info--header">Calidore</h1>
        <h2 class="text--info text--info--subheader">Knight of Courtesy</h2>
        <p class="text--info">
          I haven't read this one yet, but any page I go to there are
          mentions of planets; so I am just imagining Space Knights fighting
          Space Demons.
        </p>
      </section>
    </section>
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";
  @import url("https://use.typekit.net/pwc5ubl.css");

  $mgPosterBorderWidth: 16px;
  $mainColor: hsl(268, 100%, 44%);
  $white: white;

  @mixin fontCondensed() {
    font-family: acumin-pro-condensed, sans-serif;
  }

  @mixin font() {
    font-family: acumin-pro, sans-serif;
  }

  @function posterOffset($offset: 0) {
    @return $mgPosterBorderWidth + $offset;
  }

  @mixin generateScreenBg($color: $mainColor) {
    background-color: $color;
    background-blend-mode: screen;
  }

  @mixin containerTitle($title: "EXAMPLE") {
    &::before {
      content: $title;
      position: absolute;
      top: -16px;
      left: -16px;
      text-transform: uppercase;
      font-family: acumin-pro, sans-serif;
      font-weight: 500;
      font-style: normal;
    }
  }

  p,
  h1,
  h2 {
    margin: 0;
    padding: 0;
  }

  @mixin containerOverlay() {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url("../../public/magasins/folded-paper.jpeg");
    background-size: 110%;
    background-position: center;
    mix-blend-mode: multiply;
    z-index: 99999;
    pointer-events: none;
  }
  @mixin containerBackground() {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url("../../public/magasins/bg-grafitti.png");
    background-size: 140%;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(3px);
    @include generateScreenBg();
    z-index: -1;
  }

  @mixin posterContainerPop() {
    $popBorderSize: 0.25em;
    border: $popBorderSize solid $mainColor;
    position: relative;
    background-color: $white;
    padding: 0.5em;

    &::after {
      content: "";
      position: absolute;
      width: calc(100% + #{$popBorderSize * 2});
      height: calc(100% + #{$popBorderSize * 2});
      top: $popBorderSize * 0.1;
      left: $popBorderSize * 0.1;
      background: $mainColor;
      z-index: -1;
    }
  }

  @mixin knightContainer($top: 0, $left: 0) {
    position: absolute;
    top: posterOffset($top);
    left: posterOffset($left);
  }

  .text {
    &--info {
      @include font();
      color: $mainColor;
      font-size: 0.75em;
      &--header {
        font-family: acumin-pro-wide, sans-serif;
        font-weight: 500;
        font-weight: 400;
        font-size: 1.25em;
      }
      &--subheader {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1em;
      }
    }
    &--title {
      @include fontCondensed();
      font-weight: 700;
      font-size: 0.75;
      &--header {
        font-family: sirin-stencil, sans-serif;
        font-weight: 400;
        font-style: normal;
        text-transform: uppercase;
        font-size: 1.25em;
      }
      &--subheader {
        font-family: rufina-stencil-alt-02, sans-serif;
        font-weight: 700;
        font-style: normal;
        text-transform: uppercase;
        font-size: 1em;
        padding-top: 0.25em;
      }
    }
  }

  .poster {
    @include poster();
    &__container {
      &--knights {
        @include knightContainer(
          $top: 16px - $mgPosterBorderWidth,
          $left: 302px - $mgPosterBorderWidth
        );
        width: 12 em;
      }
      &--red-crosse {
        @include containerTitle("Book 1");
        position: absolute;
        top: 97px;
        left: 66px;
        width: 20em;
      }
      &--gunyon {
        @include containerTitle("Book 2");
        position: absolute;
        top: 213px;
        left: 282px;
        width: 15em;
      }
      &--britomart {
        @include containerTitle("Book 3");
        position: absolute;
        top: 240px;
        left: 31px;
        width: 15em;
      }

      &--friendship {
        @include containerTitle("Book 4");
        position: absolute;
        top: 389px;
        left: 232px;
        width: 17em;
      }
      &--artegall {
        @include containerTitle("Book 5");
        position: absolute;
        top: 440px;
        left: 30px;
        width: 12em;
      }

      &--calidore {
        @include containerTitle("Book 6");
        position: absolute;
        top: 541px;
        left: 257px;
        width: 15em;
      }

      &--pop {
        @include posterContainerPop();
      }
      &--title {
        position: absolute;
        top: posterOffset(0);
        left: posterOffset(0);
        width: 20em;
      }
      &--content {
        width: 100%;
        height: 100%;
      }

      &--overlay {
        @include containerOverlay();
      }

      &--bg {
        @include containerBackground();
      }

      &--wrapper {
        @include containerWrapper();
        position: relative;
      }
    }
  }
</style>
