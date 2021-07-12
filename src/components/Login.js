import React from 'react'

function Login() {
    return (
			<div data-test='component-login'>
                <div>Login</div>
				<input data-test='login-input' placeholder='Email address'></input>
				<input data-test='login-input' placeholder='password' type='password'></input>
                <button>Login</button>
			</div>
		);
}

export default Login
