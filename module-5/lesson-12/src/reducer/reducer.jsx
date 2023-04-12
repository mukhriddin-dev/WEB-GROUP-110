const initialState = {
  number: 0,
  data: [],
  load: false
}

export const reducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'DATA':
      return {
        ...state
      }
    case 'INCR':
      return {
        ...state,
        number: state.number + 1
      }
    case 'ADD':
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case 'POST':
      return {
        ...state,
        data: [...state.data, ...action.payload]
      }
    case 'LOAD':
      return {
        ...state,
        load: true
      }
    default:
      return state
  }
}
