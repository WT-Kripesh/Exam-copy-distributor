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
    element: <Login />
  },
  {
    path: '/login',
    element : <Login />
  },
  { 
    path: '/admin',
    element: <Layout />,
    children:[
        {
          path: '/admin',
          element: <Home />
        },
        {
          path: '/admin/packages',
          element : <PackageHome />
        },
        { 
          path: '/admin/add-new-package',
          element: <AddPackage />
        },
        {
          path: '/admin/edit-package/:packageID',
          element : <AddPackage />
        },
        {
          path: '/admin/assign-package/:personID',
          element: <AssignPackage />,
        },
        
        {
          path: "/admin/intermediate",
          element: <Intermediate />,
        },
        
        {
          path: "/admin/receivePackage/:assignmentID",
          element: <ReceivePackage />,
        },
        
        // Exam Router
        {
          path: "/admin/add-new-exam",
          element: <AddNewExam />,
        },
        
        {
          path: "/admin/edit-exam/:examID",
          element: <AddNewExam />,
        },
        
        {
          path: "/admin/exam-details/:examID",
          element: <ExamDetails />,
        },
        
        // Person route
        {
          path: "/admin/edit-person/:personID",
          element: <Person />,
        },
        {
          path: '/admin/add-new-person',
          element: <Person />
        },
        
        // subject routes
        {
          path: '/admin//subjects',
          element: <Subject /> ,
        },
        
        {
          path: "/admin/add-new-subject",
          element: <AddNewSubject /> ,
        },
        
        {
          path: "/admin/edit-subject/:subjectID",
          element: <AddNewSubject />,
        },
        
        //department routes
        {
          path: "/admin/departments",
          element: <Department />,
        },
        
        {
          path: '/admin/add-new-department',
          element: <AddDepartment />,
        },
        
        {
          path: '/admin/edit-department/:departmentID',
          element: <AddDepartment />,
        },
        
        // programs routes
        {
          path: '/admin/add-new-program',
          element: <AddNewProgram />,
        },
        {
          path: '/admin/edit-program/:programID',
          element: <AddNewProgram />
        },
        {
          path: '/admin/programs' ,
          element: <Program />
        },
        {
          path: '/admin/exams',
          element: <ExamTable />
        },
        {
          path: '/admin/session',
          element: <Session />
        },
        {
          path: '/admin/test',
          element : <Test />
        },
        {
          path: '/admin/delete/:type/:id',
          element: <Delete />
        },
        
        {
          path: '*',
          element : <h1>404 Not Found</h1>
        }
    ]
  },

])

export default router;
