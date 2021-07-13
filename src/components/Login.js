import React, { useState, useEffect } from 'react';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		console.log('Email address :', email);
		console.log('user password :', password);
	}, [email, password]);

    return (
			<div data-test='component-login'>
				<div>Login</div>
				<div>
					<input
						data-test='login-input'
						placeholder='Email address'
						data-test='inputEmail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>
						<span data-test="getEmail">{email}</span>
				</div>
				<div>
					<input
						data-test='getEmail'
						placeholder='password'
						type='password'
						data-test='inputPassword'
						value={password}
						onChange={(e) => setPassword(e.target.value)}></input>
						{/* <span>{password}</span> */}
				</div>
				<div>
					<button data-test='loginButton' onClick={(e)=>{
						
					}}>Login</button>
				</div>
			</div>
		);
}

export default Login
