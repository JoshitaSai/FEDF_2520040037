import { useContext } from "react";
import StudentContext from "../StudentContext";

function StudentList() {

    const { students } = useContext(StudentContext);

    return (
        <div>
            <h3>Student List</h3>

            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
