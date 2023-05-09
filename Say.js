import React from "react";
import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState("123");
    const onClickENter = () => setMessage('안녕히 가세요');
    const onClickLeave = () => setMessage('안녕히 가세요');
    return (
        <div>
            <button onClick={onClickENter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={( color )}>{message}</h1>
            <button
            style={{ color: "red"}}
            onClick={() => {
                setColor("red");
            }}

            >
                빨간색
            </button>
            <button
            style={{ color: "green"}}
            onClick={() => {
                setColor("green");
            }}
            >
                초록색
            </button>
            <button
            style={{ color: "blue"}}
            onClick={() => {
                setColor("blue");
            }}
            ></button>
        
            
            
        </div>
    )

}