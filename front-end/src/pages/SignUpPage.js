import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SignUpPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {
        
    }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com"
            />
            <input
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                type="password"
                placeholder="password"
            />
            <input
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                type="password"
                placeholder="password"
            />
            <hr />
            <button
                disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue}
                onClick={onSignUpClicked}
            >
                Sign Up
            </button>
            <button
                onClick={() => history.push('signup')} 
            >
                Don't have an account? Sign Up
            </button>
        </div>
    )
}