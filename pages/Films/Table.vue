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
            />
        </tbody>

    </table>


</template>

<script>
import Film from '../../pages/Films/Film'
import dummy_server from '../../Dummy_Server/Data'

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

	components: 	{
        Film
	},

	data() {
        return {
            films:  dummy_server.films,
            users:  dummy_server.users
        }
	}

}

</script>
