const init_state = {
  fetching: false,
  dog: null,
  error: null
}

const reducers = (state = init_state, action) => {
  switch (action.type) {
    case 'DOG_REQUESTED': return { ...state, fetching: true }
    case 'DOG_FETCH_SUCCESS': return { ...state, fetching: false, dog: action.dog, error: null }
    case 'DOG_FETCH_FAILED': return { ...state, fetching: false, error: action.error, dog: null }
    default: return { ...state }
  }
}

export default reducers;