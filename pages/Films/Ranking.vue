<template>
    <td class="rcell cell">
        <div class="ranking_container">
            <div class="do_rank">
                <div
                    class="option"
                    @click="update_ranking(4, fid, uid)"
                >
                    <div class="c_symbol">
                        <div class="symbol">
                            👍
                        </div>
                    </div>
                </div>
                <div
                    class="option"
                    @click="update_ranking(3, fid, uid)"
                >
                    <div class="c_symbol">
                        <div class="symbol">
                            👌
                        </div>
                    </div>
                </div>
                <div
                    class="option"
                    @click="update_ranking(2, fid, uid)"
                >
                    <div class="c_symbol">
                        <div class="symbol">
                            🤷‍♂️
                        </div>
                    </div>
                </div>
                <div
                    class="option"
                    @click="update_ranking(1, fid, uid)"
                >
                    <div class="c_symbol">
                        <div class="symbol">
                            👎
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking">
                <div class="c_symbol">
                    <div
                        class="symbol"
                        v-html="ranking_image">
                    </div>
                </div>
            </div>
        </div>
    </td>
</template>

<script>

export default {
	name: 'Ranking',

    props: [
        'ranking',
        'uid',
        'fid',
        'update_ranking'
    ],

    updated() {
        lo('updated ranking compo')
        lo(this)
    },

    computed: {

        ranking_image: function() {

            let ranking_image = 'default'

            switch(this.ranking) {
                case 4:
                    ranking_image = '👍'
                    break
                case 3:
                    ranking_image = '👌'
                    break
                case 2:
                    ranking_image = '🤷‍♂️'
                    break
                case 1:
                    ranking_image = '👎'
                    break
                default:
                    break
            }

            return ranking_image

        }

    },

    data() {

    }

}


let lo = function (to_log) {
    console.log(to_log)
}

</script>
