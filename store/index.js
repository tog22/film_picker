import { reactive, watch } from "vue";

const STATE_NAME = "film_picker_datastore";


const defaultState = {
    test_initialization:  'initialized',
    sections: {
        add_film:   {
          search_results: {}
        }
    }
}

const getDefaultState = () => {
  if (localStorage.getItem(STATE_NAME) !== null) {
  return JSON.parse(localStorage.getItem(STATE_NAME));
  }

  return defaultState;
};

const state = reactive(getDefaultState());

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

export default {
  state,
  methods,
  getters,
}
