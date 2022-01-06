import React from "react";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const history = useNavigate();

    return <button id='back-button' onClick={() => history(-1)}><i class="bi bi-backspace"></i></button>
}

export default BackButton;