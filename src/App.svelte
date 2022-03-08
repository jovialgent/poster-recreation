<script lang="ts">
  import GurafikuReviewPoster from "./lib/GurafikuReviewPoster.svelte";
  import LucioCapece from "./lib/LucioCapece.svelte";
  import MagasinsGeneraux from "./lib/MagasinsGeneraux.svelte";
  import Metro from "./lib/Metro.svelte";
  import Strasbourg from "./lib/Strasbourg.svelte";
</script>

<main>
  <div class="app">
    <MagasinsGeneraux />
    <GurafikuReviewPoster />
    <LucioCapece />
    <Metro />
    <Strasbourg />
  </div>
</main>

<style lang="scss">
  @import "../node_modules/normalize.css/normalize.css";
  @import "./scss/responsive.scss";

  body {
    overflow-x: hidden;
  }
  .app {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 4em;
    padding: 2em 0em;
    grid-template-columns: 1fr;

    @include respond-to("small") {
      grid-template-columns: 1fr 1fr;
    }

    .poster {
      margin: 1rem;
    }
  }
</style>
