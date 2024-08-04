import { useEffect, useState } from "react";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students");

                if (!response.ok) {
                    throw new Error("Network not ok");
                }

                const result = await response.json();
                // console.log(result);

                setStudents(result);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {students.map((student) => (
                <p key={student.id}>{student.name}</p>
            ))}
        </div>
    );
}

export default StudentList;