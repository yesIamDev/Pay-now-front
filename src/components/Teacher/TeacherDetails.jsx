import { currentTeacher } from "../../atoms/teachers";
import { useRecoilValue } from "recoil";


function TeacherDetails() {

  const teacher = useRecoilValue(currentTeacher)
  if(teacher === null){
    return null
  }

  return (
    <div className=" rounded-sm bg-white my-5 p-8 flex flex-col w-[280px]">
       <h1> Profile teacher</h1>
       <ul>
        <li>Name : {teacher.name}</li>
        <li>Age: {teacher.age}</li>
       </ul>
    </div>
  );
}

export default TeacherDetails;
