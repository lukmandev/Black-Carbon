import React from 'react';
import './EditProfile.css'
import {useField} from "formik";

const Input = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <li className=" visit-items">
            <img src={icon} alt=""/>
            <input className=" input-field "
                   {...field}
                   {...props}
                   placeholder="Введите текст"
            />
            {meta.touched && meta.error && <div>{meta.error}</div>}
        </li>

    )
}
export default Input