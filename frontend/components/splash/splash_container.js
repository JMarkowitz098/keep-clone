import Splash from './splash'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'

const MSTP = () => {
    return {}
}

const MDTP = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(MSTP, MDTP)(Splash)