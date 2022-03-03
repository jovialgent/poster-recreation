<script>
  // Poster Original: https://www.designspiration.com/save/55725025182/
</script>

<div class="poster">
  <section class="poster__container--wrapper">
    <section class="poster__container--content" />
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";

  :host {
    --metro-background: black;
  }

  .poster {
    @include poster();

    &__container {
      &--wrapper {
        @include containerWrapper();
      }
      *--content {
        background: var(--metro-background);
        width:100%;
        height:100%;
      }
    }
  }
</style>
