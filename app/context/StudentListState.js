import React, { useReducer } from 'react';
import StudentListContext from './studentListContext';
import StudentListReducer from './studentListReducer';
import CREATE_STUDENT from './types';


const StudentListState = props => {
  const initialState = {
    studentList: [{
      firstName: '1',
      lastName: '2',
      address: '3',
      city: '4',
      stateName: '5',
      zipCode: '6',
      phoneNumber: '7',
      gpa: '8',
    },
    {
      firstName: '8',
      lastName: '7',
      address: '6',
      city: '5',
      stateName: '4',
      zipCode: '3',
      phoneNumber: '2',
      gpa: '1',
    }
    ],
    student: {}
  }


  const [state, dispatch] = useReducer(StudentListReducer, initialState)

  // Create Student
  const createStudent = (obj) => {
    var newState = state.studentList.push(obj)

    dispatch({
      type: CREATE_STUDENT,
      payload: newState
    });

  }






  return <StudentListContext.Provider
    value={{
      studentList: state.studentList,
      createStudent
    }}
  >
    {props.children}
  </StudentListContext.Provider>
}

export default StudentListState;