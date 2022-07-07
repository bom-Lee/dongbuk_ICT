import React from 'react';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
    <>
        <h1>😥</h1>
        <h3> Can not found the page.</h3>
        <h2>올바른 주소로 접속해주세요.</h2>
        <button onClick ={()=> navigate(-1)}>Please go back go Main page</button> 
    </>
    );
}

export default NotFound;