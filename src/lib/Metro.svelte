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

  @mixin metroContentWrapper() {
    @include containerWrapper();
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  .poster {
    --metro-background: black;
    --metro-background-border: #e2e3e0;
    @include poster();

    &__container {
      &--wrapper {
        @include metroContentWrapper();
        background: var(--metro-background-border);
      }
      &--content {
        background: var(--metro-background);
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
