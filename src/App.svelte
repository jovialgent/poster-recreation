<script lang="ts">
  import GurafikuReviewPoster from "./lib/GurafikuReviewPoster.svelte";
  import LucioCapece from "./lib/LucioCapece.svelte";
</script>

<main>
  <div class="app">
    <GurafikuReviewPoster />
    <LucioCapece />
  </div>
</main>

<style lang="scss">
  @import "../node_modules/normalize.css/normalize.css";
  @import "./scss/responsive.scss";
  .app {
    width: 100vw;
    height: 100vh;
    display: grid;
    gap: 4em;
    padding: 2em;
    grid-template-columns: 1fr;

    @include respond-to("small") {
      grid-template-columns: 1fr 1fr;
    }

    .poster {
      margin: 1rem;
    }
  }
</style>
