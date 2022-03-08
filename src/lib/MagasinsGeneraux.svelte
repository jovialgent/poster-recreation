<script>
// https://www.behance.net/gallery/97124351/Poster-Collection/modules/560843111

</script>

<div class="poster">
  <section class="poster__container--wrapper">
    
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";

  .poster {
    @include poster();
    
    &__container {
      &--wrapper {
        @include containerWrapper();
        position: relative;
      }
    }
  }
</style>
