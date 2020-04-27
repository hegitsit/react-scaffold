import CREATE_STUDENT from './types';

export default (state, action) => {

  console.log('action.type', action)
  console.log('state', state)

  return {
    ...state,
    studentList: action.payload
  }
}