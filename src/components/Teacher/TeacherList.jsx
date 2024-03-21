import React from "react";

import { useRecoilValueLoadable, useRecoilState } from "recoil";
import { teacherState, fetchTeachers } from "../../atoms/teachers";


import { Table,Modal } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import AddTeacher from "../../modals/AddTeacher";

export default function TeacherList() {
  const teachersLoadable = useRecoilValueLoadable(fetchTeachers);
  const [teachers, setTeachers] = useRecoilState(teacherState);

  if (teachersLoadable.state === "loading") {
    return <div>Chargement en cours...</div>;
  }

  if (teachersLoadable.state === "hasError") {
    return (
      <div>Une erreur s'est produite lors du chargement des enseignants.</div>
    );
  }

  const teachersList = teachersLoadable.contents;

  const handleClick =  (teacherId) => {
    setTeachers((s) => ({ ...s, currentTeacher: teacherId }));
  };

  const handleDelet =  () => {
      Modal.confirm({
        title: 'Are you sure, you want to delete this teacher ?',
        okText: 'Yes',
        okType: 'danger',
        onOk: () => {
            console.log("Succes")
        }
      })
  }

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
      key: "actions",
      render: (record) => {
        return <>
          <EditOutlined />
          <DeleteOutlined onClick={() => {
              handleDelet()
          }}  style={{color: 'red', marginLeft:'12px'}} />
        </>
      },
    },
  ];
  

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
