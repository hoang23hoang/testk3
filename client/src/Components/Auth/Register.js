import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3001/auth/register', {
                username,
                password,
            });
            window.alert('Đăng ký thành công!');
        } catch (error) {
            if (error.response && error.response.data) {
                window.alert(error.response.data); 
            } else {
                window.alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
            }
        }
    };

    return (
        <div className='register-login-container-form'>
            <div className='register-login-form'>
                <h1>Đăng ký</h1>
                <div>
                    <input
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <button onClick={handleRegister}>Đăng ký</button>
                    <p>Bạn đã có tài khoản ?<a href='/auth/login'>Đăng nhập</a></p>
                </div>
            </div>
        </div>
    );
}