<script>
  import { onMount } from "svelte";

  const urlParams = new URLSearchParams(window.location.search);

  // Poster Original: https://www.designspiration.com/save/55725025182/
  let titleEl;
  let title = urlParams.has("title") ? urlParams.get("title") : "Rural";
  let year = new Date().getFullYear();

  onMount(() => {
    titleEl.innerHTML = `<span class="metro__title__label">${title}</span>`;
  });
</script>

<div class="poster">
  <section class="poster__container--wrapper">
    <section class="poster__container--content">
      <div class="poster__container--image" />
      <div class="poster__container--small-type">
        <p class="metro__text">George Petersen</p>
      </div>
      <div class="poster__container--equation">
        <p class="metro__text metro__text--equation">F ± 0</p>
      </div>
      <div class="poster__container--text-top">
        <h3 class="metro__text metro__text--headline">Farmers</h3>
      </div>
      <div class="poster__container--type-words">
        <p class="metro__text">
          Rustic / <br /> Rustique
        </p>
      </div>
      <div class="poster__container--text-top-1">
        <p class="metro__text">
          <span class="metro__text--strong"> Old McDonalds </span>
          had a farm. <br /> E I E I O
        </p>
      </div>
      <div class="poster__container--text-top-2">
        <p class="metro__text">
          <span class="metro__text--strong"> On this farm </span>
          he had an alpaca. <br /> E I E I O
        </p>
      </div>
      <div class="poster__container--image-text">
        <h3 class="metro__text metro__text--headline">Alpaca</h3>
        <p class="metro__text">They are floofy and cute</p>
        <p class="metro__text">
          <span class="metro__text--strong">SHAGGY HAIR</span>and
          <span class="metro__text--strong">LARGE TEETH</span>
        </p>
      </div>
      <div class="poster__container--image-text">
        <h3 class="metro__text metro__text--headline">Alpaca</h3>
        <p class="metro__text">They are floofy and cute</p>
        <p class="metro__text">
          <span class="metro__text--strong">SHAGGY HAIR</span>and
          <span class="metro__text--strong">LARGE TEETH</span>
        </p>
      </div>
      <div class="poster__container--image-text-bottom">
        <h3 class="metro__text metro__text--headline">PET ME!!</h3>
      </div>
      <div class="poster__container--image-text-bottom-text">
        <p class="metro__text">Come on get your hand in there</p>
        <p class="metro__text">
          <span class="metro__text--strong">DO IT NOW</span>
        </p>
      </div>
      <p class="metro__text metro__text--colon">:</p>
      <p class="metro__text metro__text--left-quote">&ldquo;</p>
      <p class="metro__text metro__text--right-quote">&rdquo;</p>
      <h1
        style="--metro-title: '{title}'"
        class="metro__text metro__title"
        bind:this={titleEl}
      >
        <span />
      </h1>
      <div class="poster__container--period">
        <p class="metro__text metro__text--punctuation metro__text--period">
          .
        </p>
      </div>
      <div class="poster__container--semicolon">
        <p class="metro__text metro__text--punctuation metro__text--semicolon">
          ;
        </p>
      </div>
      <div class="poster__container--poster-link">
        <a
          class="metro__text metro__text--link"
          href="https://www.designspiration.com/save/55725025182/"
          target="_blank">ORIGINAL / POSTER</a
        >
      </div>
      <div class="poster__container--year">
        <p class="metro__text">{year}</p>
      </div>
    </section>
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;900&display=swap");

  @mixin metroContentWrapper() {
    @include containerWrapper();
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  .poster {
    --metro-background: black;
    --metro-background-border: #e2e3e0;
    --metro-text-color: white;
    --metro-title: "Test This Out";

    $titleFontSize: 4em;
    $alpacaWidth: 2940px;
    $alpacaHeight: 2588px;
    filter: blur(0.5px);

    @include poster();

    p {
      margin: 0;
    }

    @mixin metroTitleWordChange($bottom: false, $fontSize: 4em) {
      $offset: math.div($fontSize, 10);

      display: inline-block;
      width: 100%;
      position: absolute;
      left: 0;
      @if $bottom {
        top: -$offset;
      } @else {
        top: $offset;
      }
    }

    @mixin metroTitleH1() {
      position: absolute;
      font-size: $titleFontSize;
      letter-spacing: 1rem;
      top: 306px;
      width: 100%;
      text-align: center;

      &::before {
        content: var(--metro-title);
        @include metroTitleWordChange($bottom: true, $fontSize: $titleFontSize);
      }
      &::after {
        content: var(--metro-title);
        @include metroTitleWordChange();
      }
    }

    @mixin metroImage() {
      background: url(images/alpaca.jpeg);
      height: 348.8px;
      width: 238px;
      background-size: cover;
      position: absolute;
      top: 206px;
      left: 150px;
      background-position: center;
    }

    .metro {
      &__text {
        color: var(--metro-text-color);

        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        &--colon {
          font-weight: bolder;
          font-size: $titleFontSize;
          position: absolute;
          top: 348px;
          left: 10%;
        }

        &--equation {
          font-weight: 600;
          font-size: 2em;
        }

        &--left-quote {
          position: absolute;
          top: 94px;
          left: 321px;
        }
        &--right-quote {
          position: absolute;
          top: 94px;
          left: 114px;
        }

        &--headline {
          letter-spacing: 1rem;
        }

        &--strong {
          font-weight: bold;
          text-transform: none;
        }

        &--link {
          text-decoration: none;
        }

        &--punctuation {
          font-size: math.div($titleFontSize, 2);
          font-weight: bolder;
          letter-spacing: 0px;
        }
      }
      &__title {
        @include metroTitleH1();
      }
    }

    @mixin footerOffset() {
      left: 180px;
    }

    &__container {
      &--image {
        @include metroImage();
      }

      &--image-text {
        position: absolute;
        font-size: 0.5em;
        top: 213px;
        @include footerOffset();
      }
      &--image-text-bottom {
        position: absolute;
        top: 491px;
        font-size: 0.5rem;
        letter-spacing: 1px;
        @include footerOffset();
      }
      &--image-text-bottom-text {
        position: absolute;
        font-size: 0.25em;
        top: 519px;
        left: 235.9px;
        transform: scale(0.5);
      }
      &--wrapper {
        @include metroContentWrapper();
        background: var(--metro-background-border);
      }
      &--content {
        background: var(--metro-background);
        width: 100%;
        height: 100%;
        position: relative;
      }

      &--text-top {
        position: absolute;
        font-size: 0.5rem;
        top: 120px;
        @include footerOffset();
        &-1,
        &-2 {
          transform: scale(0.35);
        }

        &-1 {
          position: absolute;
          top: 143px;
          left: 180px;
        }
        &-2 {
          position: absolute;
          top: 167px;
          left: 169px;
        }
      }

      &--type-words {
        position: absolute;
        top: 80px;
        left: 212px;
        font-weight: 600;
        transform: scale(0.5);
      }

      &--period {
        position: absolute;
        bottom: 101px;
        @include footerOffset();
      }
      &--semicolon {
        position: absolute;
        bottom: 234px;
        @include footerOffset();
      }

      &--poster-link {
        position: absolute;
        bottom: 36px;
        @include footerOffset();
      }

      &--year {
        position: absolute;
        bottom: 36px;
        right: 45px;
      }

      &--equation {
        position: absolute;
        top: 45px;
        left: 114px;
      }

      &--small-type {
        position: absolute;
        top: 14px;
        left: -40px;
        transform: scale(0.25);
      }
    }
  }
</style>
