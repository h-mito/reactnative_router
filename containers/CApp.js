import {connect} from "react-redux"
import {HOST_ADDR} from "../constants/index"
import App from "../components/App"
import {boards_read, users_read} from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return {
    store: ownProps.store
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onInit: () => {
      readInit(dispatch)
    }
  }
}

const readInit = (dispatch)=> {

  fetch('http://' + HOST_ADDR + '/board/readBoardAndUser')
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(boards_read(responseJson.boards))
      dispatch(users_read(responseJson.users))

    })
    .catch((error) => {
      console.error(error);
    });


}


const CApp = connect(mapStateToProps,mapDispatchToProps)(App)

export default CApp
