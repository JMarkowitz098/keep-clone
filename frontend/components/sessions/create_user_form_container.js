import SessionForm from './session_form'
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Create User'
    }
}

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(createNewUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)