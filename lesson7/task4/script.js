const allStudentsList = ['Den', 'John', 'Ann', 'Mike'];
const studentsForRetake = ['John', 'Mike'];

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudents = allStudentsList.filter(
    (name) => !studentsForRetake.includes(name)
  );

  return passedStudents.map((name) => 'Good job, ' + name);
};

//find passed students
//add God job

// examples

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []

console.log(getMessagesForBestStudents(allStudentsList, studentsForRetake));
