<script></script>

<div class="poster">
  <section class="poster__container--wrapper" />
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";

  .poster {
    @include poster();

    &__container {
      &--wrapper {
        @include containerWrapper();
      }
    }
  }
</style>
