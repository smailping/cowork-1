import { useReducer, useState } from "react";

const Info = () => {
    const [state, dispatch] = useReducer(reducer, { name: "", nickname: ""});
    const [name, nickname] = state;
    // const [name, setName] = setState('');
    // const [nickname, setnickname] = useState('');
   // useEffect(() => {
    const onChange = (e) => dispatch(e.target);
    return (
        <><div>
            <input name="name" value={name} onChange={onChangeName} />
            <input name="nickname" value={nickname} onChange={onChangeName} />
        </div><div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div></>
    );
};
export default Info;