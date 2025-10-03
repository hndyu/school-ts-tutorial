import React from 'react'

const Form = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log("クリック");
    };
    const deleteTodo = (id: number) => {
        console.log(`${id}を削除`);
    };

    return (
        <div>
            <form>
                <input type="text" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => handleClick(e)}>検索</button>
            </form>
            <div>
                <div>
                    <span>掃除</span>
                    <button onClick={() => deleteTodo(1)}>完了</button>
                </div>
                <div>
                    <span>料理</span>
                    <button onClick={() => deleteTodo(2)}>完了</button>
                </div>
                <div>
                    <span>買い物</span>
                    <button onClick={() => deleteTodo(3)}>完了</button>
                </div>
            </div>
        </div>
    )
}

export default Form