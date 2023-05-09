import React, { useState} from "react";

const EventPractice = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ':' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                    name="message"
                    placeholder='아무거나 입력해보세요'
                    value={this.state.message}
                    onChange={this.handeClikc}
                    onKeyPress={this.handleKeyPress}
                    />
                <button onClick={this.handeClikc}>확인</button>   
            </div>
        );   
    };
export default EventPractice;