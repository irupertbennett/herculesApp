const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: "If you arent redirected to your account - please refresh the page"
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return {
                state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'VALIDATE_EMAIL':
            console.log("validate_email")
            return {
                ...state,
                authError: 'Thank you for signing up! An email has be sent to your account, please follow the instructions there.'
            }
        case 'VERIFY_EMAIL':
            console.log("validate_email")
            return {
                ...state,
                authError: 'You have not yet verified your email address - a new verification email has been sent to you.'
            }
        case 'RESET_EMAIL_SUCCESS':
            console.log("RESET_EMAIL_SUCCESS")
            return {
                ...state,
                authError: 'Thank you - A password reset email has been sent.'
            }
        case 'RESET_EMAIL_ERROR':
            console.log("RESET_EMAIL_ERROR")
            return {
                ...state,
                authError: action.err.message
            }
        case 'CREATE_EMAIL_ERROR':
            console.log("CREATE_EMAIL_ERROR")
            return {
                ...state,
                authError: action.err.message
            }
        case 'VALIDATE_EMAIL_ERROR':
            console.log("VALIDATE_EMAIL_ERROR")
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
        
    }
}

export default authReducer