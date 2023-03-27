import React from 'react'
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../../../redux/actions/logoutSlice';
import { useDispatch } from 'react-redux';
import './LogOutButton.scss'
function LogOutButton() {
	const history = useNavigate();
	const dispatch = useDispatch()
	const handleClickButton = () => {
		dispatch(logoutUser());
		history('/')
	}
  return (
	 <div>
		<button className='btn' onClick={() => handleClickButton()}>Выйти</button>
	 </div>
  )
}

export default LogOutButton