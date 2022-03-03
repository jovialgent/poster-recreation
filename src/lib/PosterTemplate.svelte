<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";

  .poster {
    @include poster();
    &__container {
      &--wrapper {
        @include containerWrapper();
      }
      &--content {
        @include containerContent();
      }
    }
</style>
