import React from "react";
//Props as Class Component
// class Student extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>Hello {this.props.name}</h1>
//             </>
//         )
//     }
// }
function Student(props){
    const {name} = props;
    return(
        <>
        <h1>Hello {props.name}</h1>
        </>
    )
}
// export default Student;
export default Student;