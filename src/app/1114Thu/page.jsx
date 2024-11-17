'use client';
import React from 'react';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { GrFormClose } from 'react-icons/gr';
import { LuMilk } from 'react-icons/lu';
import { FaSpoon } from 'react-icons/fa6';
import { RiKnifeLine } from 'react-icons/ri';
import { GiElectric } from 'react-icons/gi';

// const HomePage = () => {
//     // 삼항연산자는 그 자체가 값을 반환한다!

//     // changeName
//     const [name, setName] = useState('Rucker');
//     // name은 변수, setName은 함수
//     function changeName() {
//         setName(name === 'Rucker' ? 'Lucid' : 'Rucker');
//     }

//     // Counter
//     const [number, setNumber] = useState(0);
//     function decrease() {
//         setNumber(number - 1);
//     }
//     function increase() {
//         setNumber(number + 1);
//     }

//     // isOpen
//     const [isOpen, setIsOpen] = useState(false);

//     // tab
//     const sortNav = [
//         { value: 'MOB', icon: <LuMilk /> },
//         { value: 'RITSU', icon: <FaSpoon /> },
//         { value: 'TERU', icon: <RiKnifeLine /> },
//         { value: 'SHOU', icon: <GiElectric /> },
//     ];
//     const [selected, setSelected] = useState(0);

//     return (
//         <div className="flex flex-col gap-10 m-20">
//             <div>
//                 <h2>changeName</h2>
//                 <div>
//                     <button
//                         className="bg-slate-200 py-2 px-7 rounded"
//                         onClick={changeName}
//                     >
//                         {name}
//                     </button>
//                 </div>
//             </div>
//             <div>
//                 <h2>Counter</h2>
//                 <div className="flex flex-row">
//                     <button
//                         onClick={decrease}
//                         className="w-8 h-8 bg-slate-700 text-white"
//                     >
//                         -
//                     </button>
//                     <div className="flex justify-center items-center w-12 h-8 ">
//                         {number}
//                     </div>
//                     <button
//                         onClick={increase}
//                         className="w-8 h-8 bg-slate-700 text-white"
//                     >
//                         +
//                     </button>
//                 </div>
//             </div>
//             <div>
//                 <h2>isOpen</h2>
//                 <button
//                     onClick={() => {
//                         setIsOpen(!isOpen);
//                     }}
//                 >
//                     {isOpen ? (
//                         <GrFormClose />
//                     ) : (
//                         <TiThMenu />
//                     )}
//                 </button>
//             </div>
//             <div>
//                 <h2>tab</h2>
//                 <div className="flex flex-row gap-10">
//                     {sortNav.map((item, index) => (
//                         <button
//                             className={`flex flex-col items-center ${
//                                 selected === index
//                                     ? 'border-b-4 border-blue-500'
//                                     : ''
//                             }`}
//                             onClick={() => {
//                                 setSelected(index);
//                             }}
//                             key={index}
//                         >
//                             {item.icon}
//                             {item.value}
//                         </button>
//                     ))}
//                 </div>
//                 <div>
//                     {sortNav.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`w-full py-5 ${
//                                 selected === index
//                                     ? 'display'
//                                     : 'hidden'
//                             }`}
//                         >
//                             {`${item.value} 귀여워`}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;
