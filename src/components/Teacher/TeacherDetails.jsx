function TeacherDetails({ teacher }) {
  return (
    <div className=" rounded-sm bg-white my-5 p-8 flex flex-col w-[280px]">
      <ul className="text-star text-sm font-light">
        <li className="py-2"> Name : {teacher.name}</li>
        <li className="py-2"> lastName: {teacher.lastname}</li>
        <li className="py-2"> Age : {teacher.age} ans</li>
        <li className="py-2">Sex : {teacher.sex}</li>
        <li className="py-2">Salary : {teacher.salary} USD</li>
      </ul>
    </div>
  );
}

export default TeacherDetails;
