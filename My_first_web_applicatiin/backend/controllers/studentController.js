import faker from "faker";
import students from "../dummy/students.js";

class StudentController {
  // Get all students
  static getAllStudents(req, res) {
    console.log('STUDENTS', students)
    return res.status(200).json({
      students,
      message: "All the students"
    });
  }
  // Get a single student
  static getSingleStudent(req, res) {
    const findStudent = students.find(
      student => student.id === parseInt(req.params.id, 10)
    );
    if (findStudent) {
      return res.status(200).json({
        students: findStudent,
        message: "A single student record"
      });
    }
    return res.status(404).json({
      message: "Student record not found"
    });
  }
  // Generate 10 random students
  static random(req, res) {
    const students = [];

    for (let i = 0; i < 10; i++) {
      const randomName = faker.name.findName();
      const randomAge = faker.random.number(80);

      students.push({
        name: randomName,
        age: randomAge
      });
    }

    return res.status(200).json({
      students,
    });
  }
}
export default StudentController;