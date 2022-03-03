<script lang="ts">
  import { onMount } from "svelte";

  // Inspired By this: https://www.designspiration.com/save/2446036870567/
  let eles = [...new Array(12)];
  const posterMulti: number = 30;
  const posterWidth: number = 18 * posterMulti;
  const contentWidth: number = posterWidth - posterMulti;
  const urlParams = new URLSearchParams(window.location.search);
  const title: string = urlParams.has("title")
    ? urlParams.get("title")
    : "EXAMPLE";

  let contentTitle;
  let titleTop;

  const positionCircle = (i: number): string => {
    const size: number = contentWidth - i * 40;

    return `width: ${size}px; height:${size}px; left:calc(50% - ${
      size / 2
    }px); top:calc(50% - ${size / 2}px);`;
  };

  onMount(() => {
    titleTop = `calc(50% - ${contentTitle.clientHeight / 2}px)`;
  });
</script>

<div class="poster">
  <section class="poster__container--wrapper">
    <section class="poster__container--content">
      {#each eles as el, i}
        <div class="poster__circle" style={positionCircle(i)} />
      {/each}
      <h1
        bind:this={contentTitle}
        style:top={titleTop}
        class="poster__content__title"
      >
        {#each title as letter}
          {#if letter !== " "}
            <span
              class="poster__content__letter poster__content__letter__content"
              >{letter}</span
            >
          {:else}
            <span
              class="poster__content__letter poster__content__letter__divider"
            />
          {/if}
        {/each}
      </h1>
      <p class="poster__content__description">
        This is inspired by a poster I found on designspiration. You can see the
        original <a
          class="poster__content__link"
          target="_blank"
          href="https://www.designspiration.com/save/2446036870567/">here</a
        >.
      </p>
    </section>
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:wght@100;400;700&display=swap");

  $colors: darken(#90cdde, 10%), #aed5e2, #c6dddd, #efd7d9, darken(#f3bec7, 10%);

  @mixin gradient($degrees: 180deg) {
    background: linear-gradient($degrees, $colors);
  }

  @mixin containerContent() {
    width: $posterWidth - $posterSize;
    height: $posterHeight - $posterSize;
    position: relative;
    @include gradient(0deg);
  }

  .poster {
    @include poster();
    &__container {
      &--wrapper {
        @include containerWrapper();
        @include gradient();
      }
      &--content {
        @include containerContent();
      }
    }

    &__content {
      &__title {
        color: white;
        word-break: break-all;
        position: absolute;
        z-index: 1;
        left: calc(50% - 1rem);
        letter-spacing: 2rem;
        font-size: 2rem;
        margin: 0;
      }
      &__letter {
        display: block;
        text-align: center;
        &__divider {
          padding: 1em;
        }
      }
      &__description {
        width: math.div($posterWidth, 4);
        font-weight: 100;
        color: white;
        padding: 0;
        position: absolute;
        right: 0;
        top: 0;
        margin: 0.5rem 0rem;
      }
      &__link {
        color: white;
      }
    }

    &__circle {
      position: absolute;
      border-radius: 50%;
      @include gradient(0deg);
    }
  }
</style>
