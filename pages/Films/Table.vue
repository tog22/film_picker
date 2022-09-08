<template>



    <table
        v-if="loaded.overall"
        class="group_films big_table"
    >

        <thead>
            <tr class="column_titles">
	            <th class="cell poster">
	            </th>
	            <th class="cell details">
	            </th>

	            <th
                    v-for="(user, uid) in users"
		                v-html="user.name"
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

    <div
        v-else
        class="loading loading_group_films"
    >
        Loading films…
    </div>


</template>


<script>
import Film from '../../pages/Films/Film'
import dummy_server from '../../Dummy_Server/Data'
import getb from '../../Libraries/synchronous_requests'
import $ from 'jquery'
import tog from '../../Libraries/tog'
import { toRaw } from 'vue'


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
            let was_updated = getb.basic_ec(url)
            if (was_updated) {
                // Update local ranking
                this.films[fid].rankings[uid].ranking = ranking
            } else {
                alert ('remote ranking update failed')
            }

        },


    },

    mounted() {

    },

	data() {

        let group = 1
        let load_users_url = 'https://filmpicker.philosofiles.com/sync/?action=get_group_users&group='+group
        let load_films_url = 'https://filmpicker.philosofiles.com/sync/?action=get_group_films&group='+group

        let load = {

            users(data, status, request) {
                let response = JSON.parse(data)
                if (response.result === 'success') {
                    this.users = tog.arrays.map_to_object(response.users, 'uid')
                    tog.vue.mark_loaded('users', this)
                }
            },

            users_error(request, status, error) {
                alert('load users error')
            },

            films(data, status, request) {
                let response = JSON.parse(data)
                if (response.result === 'success') {
                   this.films = response.films
                   tog.vue.mark_loaded('films', this)
                }
            },

            films_error(request, status, error) {
                alert('load films error')
            },

        }

        load.users = load.users.bind(this)
        load.films = load.films.bind(this)

        $.ajax({
            url:        load_users_url,
            success:    function(data, status, request) {
                load.users(data, status, request)
            },
            error:      function(request, status, error) {
                load.users_error(request, status, error)
            }
        })

        $.ajax({
            url:        load_films_url,
            success:    function(data, status, request) {
                load.films(data, status, request)
            },
            error:      function(request, status, error) {
                load.films_error(request, status, error)
            }
        })

        return {
            films:      {},
            users:      {},
            test:       'init',
            loaded:     {
                overall:    false,
                users:      false,
                films:      false
            }
        }

	}

}





let lo = function (to_log) {
    console.log(to_log)
}


</script>
