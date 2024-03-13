import React, { Suspense } from "react";
import PageTransition from "../../components/PageTransition";
import TeacherList from "../../components/Teacher/TeacherList";
import TeacherDetails from "../../components/Teacher/TeacherDetails";

export default function Teacher() {
  return (
    <PageTransition>
      <div className="container flex flex-col  m-5">
        <div className="bg-white m-2 p-3 rounded-md justify-start">
          <h2 className="text-2xl text-blue-600 font-bold">Teachers</h2>
        </div>
        <div className="flex flex-row">
          <div className="m-5 p-5">
            <Suspense fallback={<div>Loading ....</div>}>
              <TeacherList />
            </Suspense>
          </div>
          <div className="m-5 border-r"></div>
          <div className="m-5 p-5">
            <h1 className="text-blue-600 font-bold">Teacher's Details</h1>
            <div>
              <TeacherDetails
                teacher={{
                  name: "David",
                  lastname: "keukeu",
                  age: 12,
                  sex: "Masculin",
                  salary: 500,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
