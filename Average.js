import { useCallback, useState } from "react";

// const getAverage = numbers => {
//     console.log('평균값 계산 중..');
//     if (numbers. length === 0) return 0; 
//     const sum = numbers.reduce((a, b) => a +b);
//     return sum / numbers.length;    
// };

// const Average = () => {
//     const [list, setList] = useState([]);
//     const [number, setNumber] = useState('');
//     const inputEl = useRef(null);                                                                                                                              

//     const onChange = useCallback(e) => {
//         setNumber(e.target.value);
//     }, []);

//     const onInsert = useCallback(
//         (e) => {

//         }
//     )

//     const onChange = e => setNumber(e.target.value);

//     const onInsert = useCallback(e => {
//         setNumber(e.target.value)
//     }
//         const nexList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     }
    

//     return (
//         <div>
//             <input value={number} onChange={onChange} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value, idx)=> (
//                     <li key={idx}>{value}</li>
//                 ))}
                
//             </ul>
//             <b>평균값</b> : {getAverage(list)}
//         </div>
//     );
// };

// export default Average;