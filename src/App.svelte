<script lang="ts">
  import GurafikuReviewPoster from "./lib/GurafikuReviewPoster.svelte";
  import LucioCapece from "./lib/LucioCapece.svelte";
  import PosterTemplate from "./lib/PosterTemplate.svelte";
</script>

<main>
  <div class="app">
    <GurafikuReviewPoster />
    <LucioCapece />
    <PosterTemplate />
  </div>
</main>

<style lang="scss">
  @import "../node_modules/normalize.css/normalize.css";

  .app {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4em;
    padding:2em;

    .poster {
      margin: 1rem;
    }
  }
</style>
