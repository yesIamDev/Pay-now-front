import React from "react";

import { useRecoilValueLoadable, useRecoilState } from "recoil";

import { teacherState, fetchTeachers } from "../../atoms/teachers";
import { Button, Table } from "antd";
import AddTeacher from "../../modals/AddTeacher";

const Columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name) => {
      return <a className="font-bold">{name}</a>;
    },
  },
  {
    title: "lastName",
    dataIndex: "lastname",
    key: "lastname",
    render: (lastname) => {
      return <p className="font-bold">{lastname}</p>;
    },
  },
  {
    title: "Sex",
    dataIndex: "sex",
    key: "sex",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: () => {
      <button className="border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-lg">
        Voir
      </button>;
    },
  },
];

export default function TeacherList() {
  const teachersLoadable = useRecoilValueLoadable(fetchTeachers);
  const [teachers, setTeachers] = useRecoilState(teacherState);

  const handleClick = function (teacherId) {
    setTeachers((s) => ({ ...s, currentTeacher: teacherId }));
  };

  if (teachersLoadable.state === "loading") {
    return <div>Chargement en cours...</div>;
  }

  if (teachersLoadable.state === "hasError") {
    return (
      <div>Une erreur s'est produite lors du chargement des enseignants.</div>
    );
  }

  const teachersList = teachersLoadable.contents;
  
  return (
    <div className="container">
      <div>
        <AddTeacher />
      </div>
      <div>
        <Table
          size="large"
          dataSource={teachersList}
          rowKey={(record) => record.id}
          columns={Columns}
          pagination={{
            size: "small",
            pageSize: 5,
            showSizeChanger: false,
          }}
        ></Table>
      </div>
    </div>
  );
}
