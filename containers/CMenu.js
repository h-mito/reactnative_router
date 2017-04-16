import {connect} from "react-redux"
import { Actions } from 'react-native-router-flux'
import Menu from "../components/Menu"

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onMove: (key) => {
      switch (key) {
        case "test1":
          Actions.test1()
          break;
        case "test2":
          Actions.test2()
          break;
        case "blist":
          Actions.blist()
          break;
        case "cadd":
          Actions.cadd()
          break;
      }
    }
  }
}

const CMenu = connect(mapStateToProps,mapDispatchToProps)(Menu)

export default CMenu
