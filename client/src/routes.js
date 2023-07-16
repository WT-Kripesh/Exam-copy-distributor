import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";

//HOC
import Layout from "./hoc/layout.js";
// Components
import Home from "./components/Home/home.js";

import AddPackage from "./components/Elements/Package/addpackage.js";
import Intermediate from "./components/Elements/Assignment/intermediate.js";
import AssignPackage from "./components/Elements/Assignment/assignPackage.js";
import PackageHome from "./components/Elements/Package/packageHome.js";
// import PackageHistory from "./components/Elements/Package/History/packageModal.js";
import ReceivePackage from "./components/Elements/Package/receivePackage.js";

import AddNewExam from "./components/Elements/Exam/addExam.js";
import ExamTable from "./components/Elements/Exam/examTable.js";
import ExamDetails from "./components/Elements/Exam/examDetails.js";

import Department from "./components/Elements/Department/departmentHome.js";
import AddDepartment from "./components/Elements/Department/addDepartment.js";

import Subject from "./components/Elements/Subjects/subjectTable.js";
import AddNewSubject from "./components/Elements/Subjects/addSubject.js";

import Person from "./components/Elements/Person/person.js";

import Program from "./components/Elements/Program/programTable.js";
import AddNewProgram from "./components/Elements/Program/addProgram.js";

import Delete from "./components/Elements/Delete";

import Test from "./components/Widgets/test.js";
import Login from "./components/Elements/Login/login.js";
import AuthenticatedContext from "./Context/AuthenticatedContext.js";
import Session from "./components/Elements/Session/Session.js";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element : <Login />
  },

  {
    path: '/packages',
    element : <PackageHome />
  },
  { 
    path: '/add-new-package',
    element: <AddPackage />
  },
  {
    path: '/edit-package/:packageID',
    element : <AddPackage />
  },
  {
    path: '/assign-package/:personID',
    element: <AssignPackage />,
  },

  {
    path: "/intermediate",
    element: <Intermediate />,
  },

  {
    path: "/receivePackage/:assignmentID",
    element: <ReceivePackage />,
  },

  // Exam Router
  {
    path: "/add-new-exam",
    element: <AddNewExam />,
  },

  {
    path: "/edit-exam/:examID",
    element: <AddNewExam />,
  },

  {
    path: "/exam-details/:examID",
    element: <ExamDetails />,
  },

  // Person route
  {
    path: "/edit-person/:personID",
    element: <Person />,
  },
  {
    path: 'add-new-person',
    element: <Person />
  },

  // subject routes
  {
    path: '/subjects',
    element: <Subject /> ,
  },

  {
    path: "/add-new-subject",
    element: <AddNewSubject /> ,
  },

  {
    path: "/edit-subject/:subjectID",
    element: <AddNewSubject />,
  },

  //department routes
  {
    path: "/departments",
    element: <Department />,
  },

  {
    path: '/add-new-department',
    element: <AddDepartment />,
  },

  {
    path: '/edit-department/:departmentID',
    element: <AddDepartment />,
  },

  // programs routes
  {
    path: '/add-new-program',
    element: <AddNewProgram />,
  },
  {
    path: '/edit-program/:programID',
    element: <AddNewProgram />
  },
  {
    path: '/programs' ,
    element: <Program />
  },
  {
    path: '/exams',
    element: <ExamTable />
  },
  {
    path: '/session',
    element: <Session />
  },
  {
    path: '/test',
    element : <Test />
  },
  {
    path: '/delete/:type/:id',
    element: <Delete />
  },

  {
    path: '*',
    element : <h1>404 Not Found</h1>
  }
])

export default router;
