import React, { useRef } from "react";
import { Modal} from "antd";
import { useRecoilState } from "recoil";
import { useState } from "react";

import { teacherState } from "../atoms/teachers";

function AddTeacher() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachers, setTeachers] = useRecoilState(teacherState);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const nameRef = useRef();
  const lastnameRef = useRef();
  const ageRef = useRef();
  const salaryRef = useRef();
  const genderRef = useRef();

  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      lastname: lastnameRef.current.value,
      salary: salaryRef.current.value,
      sex: genderRef.current.value,
      age: ageRef.current.value,
    };

    if (Object.values(payload).some((val) => !val))
      return alert("Tous les champs sont obligatoire");

    try {
      const response = await fetch("http://127.0.0.1:3333/api/v1/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newTeacher = await response.json();
        setTeachers([...teachers.teachers, newTeacher]);
      } else {
        console.log("Fail to add new teacher");
      }
    } catch (error) {
      console.log("Error :", error);
    }

    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="border px-2 py-1 rounded-sm text-blue-600 font-semibold hover:bg-blue-600 hover:text-white duration-500"
      >
        Add teacher
      </button>

      <Modal
        footer={false}
        width={300}
        destroyOnClose
        closable={false}
        cancelText="Annuler"
        okText="Enregistrer"
        okType="default"
        open={isModalOpen}
        onOk={submit}
        onCancel={handleCancel}
      >
        <h1 className="text-center text-lg font-semibold text-blue-600">
          Add a new teacher
        </h1>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={nameRef}
              autoFocus
              className="border h-6 px-4 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastname"> lastName </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              ref={lastnameRef}
              autoFocus
              className="border h-6 px-4 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="salary"> Salary </label>
            <input
              type="number"
              name="salary"
              id="salary"
              ref={salaryRef}
              autoFocus
              className="border h-6 px-4 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="age"> Age </label>
            <input
              type="number"
              name="age"
              id="age"
              ref={ageRef}
              autoFocus
              className="border h-6 px-4 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gender"> Sex </label>
            <select
              name="gender"
              id="gender"
              ref={genderRef}
              className="px-4 h-6 py-2 border bg-transparent outline-none"
            >
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>

          <footer className="flex justify-center gap-8 mt-3">
            <button
              type="button"
              className="py-1 px-7 rounded-md bg-blue-600 text-white"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              onSubmit={submit}
              className="py-1 px-7 rounded-md bg-blue-600 text-white"
            >
              Save
            </button>
          </footer>
        </form>
      </Modal>
    </>
  );
}

export default AddTeacher;
