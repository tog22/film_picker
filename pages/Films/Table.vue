<template>

    <table className="group_films big_table">

        <thead>
            <tr className="column_titles">
	            <th className="cell poster">
	            </th>
	            <th className="cell details">
	            </th>

	            <th
                    v-for="(user, uid) in users"
		                v-html="user"
		                class="cell"
		                :key="'u'+uid"
	            >
	            </th>
            </tr>
        </thead>

        <tbody>
            <Film
                v-for="(film, fid) in films"
                    :film="film"
                    :fid="fid"
                    :key="'f'+fid"
                    :update_ranking="update_ranking"
            />
        </tbody>

    </table>


</template>

<script>
import Film from '../../pages/Films/Film'
import dummy_server from '../../Dummy_Server/Data'
import getb from '../../Libraries/synchronous_requests'


/*
 <Film
v-for="(film, fid) in films"
    :key="'f'+fid"
    update_local_ranking="update_local_ranking"
    update_remote_ranking="this.update_remote_ranking"
/>
*/

export default {

	name:   		'Group_Films_Table',

	components: {
        Film
	},

    methods: {
        update_ranking(ranking, fid, uid) {

            let url = 'https://filmpicker.philosofiles.com/sync/?action=update_ranking&film='+fid+'&user='+uid+'&ranking='+ranking
            lo(url)
            let was_updated = getb.basic_ec(url)
            if (was_updated) {
                // Update local ranking
                this.films[fid].rankings[uid].ranking = ranking
                lo(this.films)
            } else {
                alert ('remote ranking update failed')
            }

        }
    },

	data() {
        return {
            films:  dummy_server.films,
            users:  dummy_server.users
        }
	}

}

let lo = function (to_log) {
    console.log(to_log)
}


</script>
