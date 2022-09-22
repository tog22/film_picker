import { reactive, watch } from "vue";

const STATE_NAME = "film_picker_datastore";


const default_state = {
		test_initialization:  'initialized',
		user: {
			uid: 1,
			name: 'Tom'
		},
		sections: {
				add_film:   {
					search_results: {}
				}
		}
}

const getdefault_state = () => {
	if (localStorage.getItem(STATE_NAME) !== null) {
		let saved_state = JSON.parse(localStorage.getItem(STATE_NAME))
		update_recursively(saved_state, default_state)
		return saved_state
	} else {
		return default_state;
	}
};

const state = reactive(getdefault_state());

console.log(state)

const methods = {
	// addTask(todo){
	//   state.text = ''
	// }

}

const getters = {}

watch(
	() => state,
	() => {
	localStorage.setItem(STATE_NAME, JSON.stringify(state));
	},
	{ deep: true }
);

function update_recursively(to_update, to_match) {
	for (var key in to_match) {
		if (!to_match.hasOwnProperty(key)) {
			continue;
		} else if (typeof to_match[key] == "object" && to_match[key] !== null) {
			if (key in to_update) {
				update_recursively(to_update[key], to_match[key])
			} else {
				to_update[key] = to_match[key]
			}
		} else {
			if (!(key in to_update)) {
				lo('to_match=')
				lo(to_match)
				to_update[key] = to_match[key]
				let bpt = 1
			}
		}
	}
}

function lo(to_log) {
	console.log(to_log)
}


export default {
	state,
	methods,
	getters,
}
