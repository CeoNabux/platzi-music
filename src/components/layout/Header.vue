<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-left
            .navbar-item
              strong Platzi music
          .navbar-right.nav-menu

    .hero-body
      .container.has-text-centered
        h1.title Platzi music
        h2.subtitle Canciones que estan Vue
        pm-player

</template>

<script>
import PmPlayer from "@/components/Player"

export default {
  components: {PmPlayer}
}
</script>