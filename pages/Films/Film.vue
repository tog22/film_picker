<template>
    <tr class="main_row">
        <td class="poster cell" rowSpan="2">
            <img :src="film.poster" :alt="film.type" />
        </td>
        <td class="details cell text">
            <h3 class="title" v-html="film.title">
            </h3>
            <div className="metadata">
                <div v-html="film.genre">
                </div>
                <div v-html="film.year+', '+film.director">
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {

    name:           'Film',

    props: [
        'film',
        'fid'
    ],

    components:     {
    },

    created() {
        console.log(this.film)
    }
}

</script>
