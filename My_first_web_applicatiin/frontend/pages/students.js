import React from 'react';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

let BACKEND_URL = 'http://localhost:8000';

if(publicRuntimeConfig.BACKEND_URL) {
    BACKEND_URL = publicRuntimeConfig.BACKEND_URL;
}

class StudentsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
        }
    }
    async componentDidMount() {
        const response = await fetch(`${BACKEND_URL}/students/random`);
        const data = await response.json();
        this.setState({ students: data.students });
    }
    render() {
        const { students } = this.state;
        console.log('students', students)
        return (
            <div>
                This is students page.
                Using class component
                <div>
                    {students.map(student => (
                    <div key={student.name}>
                        Name: {student.name} --- Age: {student.age}
                    </div>))}
                </div>
            </div>
        )
    }
}

export default StudentsPage;
