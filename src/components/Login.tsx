import React, { useState } from 'react'

const Login = () => {
    const [status, setStatus] = useState(false);
    const isLogin = () => {
        setStatus(true);
    };
    const isLogout = () => {
        setStatus(false);
    };

    return (
        <div>
            <button onClick={isLogin}>ログイン</button>
            <button onClick={isLogout}>ログアウト</button>
            <p>ユーザーは{status? "ログイン" : "ログアウト" }しています</p>
        </div>
    )
}

export default Login