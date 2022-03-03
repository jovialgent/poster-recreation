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

  .app {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    

    .poster {
      margin: 1rem;
    }
  }
</style>
