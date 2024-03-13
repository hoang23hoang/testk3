import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const loginData = {
                username: username,
                password: password
            };

            const response = await axios.post('http://localhost:3001/auth/login', loginData);
            console.log(response.data); 
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken);
                window.alert('Đăng nhập thành công!');
                //window.location.href = '/';
                } else {
                    throw new Error("Lỗi đăng nhập!");
            }
        } catch (error) {
            window.alert('Đăng nhập không thành công! Vui lòng kiểm tra lại thông tin.');
        }
    };

    return (
        <div className="register-login-container-form">
            <div className='register-login-form'>
                <h1>Đăng nhập</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailOrPhone">username:</label><br />
                    <div>
                        <input
                            type="text"
                            id="emailOrPhone"
                            name="emailOrPhone"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /><br /><br />
                        <label htmlFor="password">Password:</label><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br /><br />
                        <input type="submit" value="Đăng nhập" style={{backgroundColor:'green'}}/>
                    </div>
                </form>
            </div>
        </div>
    );
}
