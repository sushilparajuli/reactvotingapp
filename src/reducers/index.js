import C from '../constants'

const initialState = {
  angular:0,
  react : 0,
  vuejs :0
}

export default (state=initialState, action) => {
  switch (action.type){
    case C.VOTE_ANGULAR:
      return Object.assign({}, state,{
        angular:state.angular + 1
      })
    case C.VOTE_REACT:
      return Object.assign({}, state,{
        react:state.react + 1
      })

    case C.VOTE_VUEJS:
      return Object.assign({}, state,{
        vuejs:state.vuejs + 1
      })

    default:
      return state

  }
}