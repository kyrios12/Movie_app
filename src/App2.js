import Student from "./Student";

function App(){
    return(
        <>
        <Student name="danny" />
        </>
    );
}
Student.default.props = {
    name : "Student"
}
export default App;