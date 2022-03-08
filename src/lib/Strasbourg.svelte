<script>
  import { text } from "svelte/internal";

  // https://www.designspiration.com/save/135459255201/
  let eles = [...new Array(8)];

  let title = "roadtrip";
  let titleEls = [...title];
  let allLines = [
    [..."reconnec"],
    [..."ts-"],
    [..."resort"],
    [..."02.-05. "],
    [...` 06.${new Date().getFullYear()}`],
    [..."trails"],
    [..."  sand"],
  ];
</script>

<div class="poster">
  <section class="poster__container--wrapper">
    {#each eles as el, i}
      <div
        class="strasbourg__shape__column"
        class:strasbourg__shape__column--even={i % 2 === 0}
        class:strasbourg__shape__column--odd={i % 2 === 1}
        id="strasbourg-shape-column-{i}"
      />
    {/each}
    <section class="strasbourg__container strasbourg__container--header">
      <p class="strasbourg__text strasbourg__text__title">
        {#each titleEls as titleEl, i}
          <span
            id="strasbourg-text-letter-{titleEl}-{i}"
            class="strasbourg__text__letter"
            class:strasbourg__text--dark={i % 2 === 0}
            class:strasbourg__text--light={i % 2 === 1}
          >
            {titleEl}
          </span>
        {/each}
      </p>
    </section>

    {#each allLines as line, i}
      <section
        class="strasbourg__container strasbourg__container--line-{i + 2}"
      >
        <p class="strasbourg__text strasbourg__text__line-{i + 2}">
          {#each line as lineEl, j}
            <span
              id="strasbourg-text-letter-line-{i + 2}-{j}"
              class="strasbourg__text__letter"
            >
              {lineEl}
            </span>
          {/each}
        </p>
      </section>
    {/each}

    <section
      class="strasbourg__container strasbourg__container--original-poster"
    >
      <a
        class="strasbourg__text strasbourg__text--link"
        target="_blank"
        href="https://www.designspiration.com/save/135459255201/"
        >Original Poster</a
      >
    </section>
  </section>
</div>

<style lang="scss">
  @use "sass:math";
  @import "../scss/poster.scss";
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

  @mixin dark() {
    color: darken(hsl(181, 83%, 53%), 10%);
    filter: saturate(110%) brightness(90%);
  }

  @mixin light() {
    color: darken(hsl(50, 100%, 61%), 0);
    filter: saturate(110%) brightness(90%);
  }

  #strasbourg-shape-column-1 {
    background-position-x: -589px;
  }
  #strasbourg-shape-column-3 {
    background-position-x: -657px;
  }
  #strasbourg-shape-column-5 {
    background-position-x: -725px;
  }
  #strasbourg-shape-column-7 {
    background-position-x: -792px;
  }
  #strasbourg-shape-column-0 {
    background-position-x: -301px;
  }
  #strasbourg-shape-column-2 {
    background-position-x: -369px;
  }
  #strasbourg-shape-column-4 {
    background-position-x: -437px;
  }
  #strasbourg-shape-column-6 {
    background-position-x: -504px;
  }

  @mixin strasbourgTextLetterHeadlineTop() {
    top: 45px;
  }
  @mixin strasbourgTextLetterHeadline2Top() {
    top: 120px;
  }
  @mixin strasbourgTextLetterHeadline3Top() {
    top: 190px;
  }
  @mixin strasbourgTextLetterHeadline4Top() {
    top: 260px;
  }
  @mixin strasbourgTextLetterHeadline5Top() {
    top: 330px;
  }
  @mixin strasbourgTextLetterHeadline6Top() {
    top: 400px;
  }
  @mixin strasbourgTextLetterHeadline7Top() {
    top: 470px;
  }
  @mixin strasbourgTextLetterHeadline8Top() {
    top: 540px;
  }

  @mixin letterLeft0() {
    left: 10px;
  }
  @mixin letterLeft1() {
    left: 73px;
  }
  @mixin letterLeft2() {
    left: 140px;
  }
  @mixin letterLeft3() {
    left: 212px;
  }
  @mixin letterLeft4() {
    left: 283px;
  }
  @mixin letterLeft5() {
    left: 349px;
  }
  @mixin letterLeft6() {
    left: 427px;
  }
  @mixin letterLeft7() {
    left: 488px;
  }

  #strasbourg-text-letter {
    &-line-8 {
      &-2 {
        position: absolute;
        @include strasbourgTextLetterHeadline8Top();
        @include letterLeft2();
        @include light();
      }
      &-3 {
        position: absolute;
        @include strasbourgTextLetterHeadline8Top();
        @include letterLeft3();
        @include light();
        margin-left: -5px;
      }
      &-4 {
        position: absolute;
        @include strasbourgTextLetterHeadline8Top();
        @include letterLeft4();
        @include light();
      }
      &-5 {
        position: absolute;
        @include strasbourgTextLetterHeadline8Top();
        @include letterLeft5();
        @include light();
      }
    }
    &-line-7 {
      &-0 {
        position: absolute;
        @include strasbourgTextLetterHeadline7Top();
        @include letterLeft0();
        @include light();
      }
      &-1 {
        position: absolute;
        @include strasbourgTextLetterHeadline7Top();
        @include letterLeft1();
        @include light();
      }
      &-2 {
        position: absolute;
        @include strasbourgTextLetterHeadline7Top();
        @include letterLeft2();
        @include light();
      }
      &-3 {
        position: absolute;
        @include strasbourgTextLetterHeadline7Top();
        @include letterLeft3();
        @include dark();
        margin-left: 10px;
      }
      &-4 {
        position: absolute;
        @include strasbourgTextLetterHeadline7Top();
        @include letterLeft4();
        @include dark();
      }
      &-5 {
        position: absolute;
        @include strasbourgTextLetterHeadline7Top();
        @include letterLeft5();
        @include light();
      }
    }
    &-line-6 {
      &-1 {
        position: absolute;
        @include strasbourgTextLetterHeadline6Top();
        @include letterLeft1();
        @include light();
      }
      &-2 {
        position: absolute;
        @include strasbourgTextLetterHeadline6Top();
        @include letterLeft2();
        @include light();
      }
      &-3 {
        position: absolute;
        @include strasbourgTextLetterHeadline6Top();
        @include letterLeft3();
        @include dark();
        margin-left: 10px;
      }
      &-4 {
        position: absolute;
        @include strasbourgTextLetterHeadline6Top();
        @include letterLeft4();
        @include light();
      }
      &-5 {
        position: absolute;
        @include strasbourgTextLetterHeadline6Top();
        @include letterLeft5();
        @include light();
      }
      &-6 {
        position: absolute;
        @include strasbourgTextLetterHeadline6Top();
        @include letterLeft6();
        @include dark();
      }
      &-7 {
        position: absolute;
        @include strasbourgTextLetterHeadline6Top();
        @include letterLeft7();
        @include light();
      }
    }
    &-line-5 {
      &-0 {
        position: absolute;
        @include strasbourgTextLetterHeadline5Top();
        @include letterLeft0();
        @include dark();
      }
      &-1 {
        position: absolute;
        @include strasbourgTextLetterHeadline5Top();
        @include letterLeft1();
        @include light();
      }
      &-2 {
        position: absolute;
        @include strasbourgTextLetterHeadline5Top();
        @include letterLeft2();
        @include light();
        margin-left: 14px;
      }
      &-3 {
        position: absolute;
        @include strasbourgTextLetterHeadline5Top();
        @include letterLeft3();
        @include light();
      }
      &-4 {
        position: absolute;
        @include strasbourgTextLetterHeadline5Top();
        @include letterLeft4();
        @include dark();
      }
      &-5 {
        position: absolute;
        @include strasbourgTextLetterHeadline5Top();
        @include letterLeft5();
        @include light();
      }
      &-6 {
        position: absolute;
        @include strasbourgTextLetterHeadline5Top();
        @include letterLeft6();
        @include light();
      }
    }
    &-line-4 {
      &-0 {
        position: absolute;
        @include strasbourgTextLetterHeadline4Top();
        @include letterLeft2();
        @include light();
      }
      &-1 {
        position: absolute;
        @include strasbourgTextLetterHeadline4Top();
        @include letterLeft3();
        @include dark();
      }
      &-2 {
        position: absolute;
        @include strasbourgTextLetterHeadline4Top();
        @include letterLeft4();
        @include dark();
      }
      &-3 {
        position: absolute;
        @include strasbourgTextLetterHeadline4Top();
        @include letterLeft5();
        @include light();
      }
      &-4 {
        position: absolute;
        @include strasbourgTextLetterHeadline4Top();
        @include letterLeft6();
        @include light();
      }
      &-5 {
        position: absolute;
        @include strasbourgTextLetterHeadline4Top();
        @include letterLeft7();
        @include light();
      }
    }
    &-line-3 {
      &-0 {
        position: absolute;
        @include strasbourgTextLetterHeadline3Top();
        @include letterLeft0();
        @include dark();
      }
      &-1 {
        position: absolute;
        @include strasbourgTextLetterHeadline3Top();
        @include letterLeft1();
        @include dark();
      }
      &-2 {
        position: absolute;
        @include strasbourgTextLetterHeadline3Top();
        @include letterLeft2();
        @include light();
        margin-left: 1px;
      }
    }
    &-line-2 {
      &-0 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft0();
        @include dark();
      }
      &-1 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft1();
        @include dark();
      }
      &-2 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft2();
        @include light();
      }
      &-3 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft3();
        @include dark();
      }
      &-4 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft4();
        @include dark();
      }
      &-5 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft5();
        @include light();
      }
      &-6 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft6();
        @include dark();
      }
      &-7 {
        position: absolute;
        @include strasbourgTextLetterHeadline2Top();
        @include letterLeft7();
        @include light();
      }
    }
    &-r-0 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft0();
    }
    &-o-1 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft1();
    }
    &-a-2 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft2();
    }
    &-d-3 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft3();
    }
    &-t-4 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft4();
    }
    &-r-5 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft5();
    }
    &-i-6 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft6();
    }
    &-p-7 {
      position: absolute;
      @include strasbourgTextLetterHeadlineTop;
      @include letterLeft7();
    }
  }

  @mixin backgroundFilter() {
    filter: contrast(120%) saturate(40%) brightness(90%) blur(1px);
  }

  .strasbourg {
    &__text {
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      font-size: math.div($posterWidth, 8);
      font-weight: 700;

      &__title {
        display: flex;
      }

      &__letter {
        display: inline-block;
      }

      &--light {
        @include light;
      }
      &--dark {
        @include dark;
      }

      &--link {
        text-decoration: none;
        @include light();
        font-size: 0.75em;

        &:hover {
          @include dark();
        }
      }
    }
    &__container {
      &--header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }
      &--line-2 {
        position: absolute;
        top: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }
      &--line-3 {
        position: absolute;
        top: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }
      &--line-4 {
        position: absolute;
        top: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }
      &--line-5 {
        position: absolute;
        top: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }
      &--line-6 {
        position: absolute;
        top: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }
      &--line-7 {
        position: absolute;
        top: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }
      &--line-8 {
        position: absolute;
        top: 0;
        width: 100%;

        height: math.div($posterWidth, 8);
      }

      &--original-poster {
        position: absolute;
        width: math.div($posterWidth, 8);
        bottom: 25px;
        left: 4px;
      }
    }
    &__shape {
      &__column {
        height: 100%;
        width: math.div($posterWidth, 8);
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        &--odd {
          @include backgroundFilter();
          background: url("../beach.jpeg");
          background-size: cover;
          background-repeat: no-repeat;
        }
        &--even {
          @include backgroundFilter();
          background: url("../mountain.jpg");
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
    }
  }

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
