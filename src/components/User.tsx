import React, { useState } from 'react'

type User = {
    name: string;
    email: string;
}

const User = () => {
    const [user, setUser] = useState<User>({} as User);
    const isLogin = () => {
        setUser({
            name: "yamada",
            email: "test@test.com",
        });
    };

    return (
        <div>
            <button onClick={isLogin}>ログイン</button>
            <p>ユーザー名：{user.name}</p>
            <p>メールアドレス：{user.email}</p>
        </div>
    )
}

export default User