import React from 'react';
import { FirstName, LastName } from './App';

const CompC = () => {
//   return (
//     <FirstName.Consumer>{
//         (fname) => {
//             return (
//                 <div>{fname}</div>
//             )
//         }    
//     }</FirstName.Consumer>
//   )

return (
    <FirstName.Consumer>
        {
            (fname) => {
                return (
                    <LastName.Consumer>
                        {
                            (lname) => {
                                return (
                                    <div>my name is {fname} - {lname}</div>
                                )
                            }
                        }
                    </LastName.Consumer>
                )
            }
        }
    </FirstName.Consumer>
)
}

export default CompC