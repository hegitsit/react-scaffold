import React, { Fragment, useContext } from 'react';
import StudentListContext from '../context/studentListContext';
import { Link } from 'react-router-dom';

export const StudentDetails = () => {
  const studentListContext = useContext(StudentListContext);
  const { student } = studentListContext;

  // const {
  //   firstName,
  //   lastName,
  //   address,
  //   city,
  //   stateName,
  //   zipCode,
  //   phoneNumber,
  //   gpa
  // } = student;

  return (
    <Fragment>
      <div>
        <img src="https://via.placeholder.com/250x300" />
      </div>
      <div>
      </div>

      <Link to='/students'>Back to Student List</Link>
    </Fragment>
  )
}
