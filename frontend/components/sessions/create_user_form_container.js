import SessionForm from './session_form'
import { connect } from 'react-redux';
import { createNewUser, clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Create User'
    }
}

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(createNewUser(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)