<template>
    <tr class="main_row">
        <td class="poster cell" rowSpan="2">
            <img :src="film.poster" :alt="film.type" />
        </td>
        <td class="details cell text">
            <h3 class="title" v-html="film.title">
            </h3>
            <div class="metadata">
                <div v-html="film.genre">
                </div>
                <div v-html="film.year+', '+film.director">
                </div>
            </div>
        </td>
        <Ranking
          v-for="(ranking, uid) in film.rankings"
            :ranking="ranking['ranking']"
            :uid="uid"
            :fid="film.fid"
            :update_ranking="update_ranking"
            :key="'f'+film.fid+'u'+uid"
        />
    </tr>
    <tr class="summary_row">
        <td class="summary cell text" colSpan="5">
            <div class="summary_text"
                v-html="film.summary">
            </div>
      </td>
    </tr>
</template>

<script>
import Ranking from '../../pages/Films/Ranking'


export default {

    name:           'Film',

    props: [
        'film',
        'fid',
        'update_ranking'
    ],

    components: {
      Ranking
    },

    data() {
      return {
      }
    }
}

</script>
