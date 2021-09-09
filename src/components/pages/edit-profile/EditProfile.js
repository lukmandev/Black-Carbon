import React from "react";
import Social from "../Visit/social";

import ProfileImg from '../../assets/img/prorfileImg.jpg'
import {Formik} from "formik";
import Input from "./input";
import * as Yup from "yup";
import PhoneInput from "./PhoneInput";


const EditProfile = () => {


    const validation = Yup.object({
        email: Yup.string()
            .required("Поле email обязательно"),
        phone: Yup.string()
            .required("Номер телефона обязательно")

    })

    return (
        <div id="visit">
            <div className="container mx-auto">
                <div className="row visit-bg">
                    <div className="visit-box">
                        <div className="visit-profile">
                            <div className="visit-profile-box">
                                <img className="visit-img" src={ProfileImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="visit-box2">
                        <h1 className="visit-title">
                            Kubanych
                            Akylbek
                        </h1>
                        <p className="visit-description ">Founder in
                            Motion Web</p>

                        {/*<div className="">*/}
                        {/*    <p className="visit-text">what is RFID ?*/}
                        {/*        RFID stands for ' radio frequency identifi*/}
                        {/*        cation'.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="row">
                    <div className="">
                        <div>
                            <ul>
                                <Formik
                                    validationSchema={validation}
                                    initialValues={{
                                        email: "",
                                        website: "",
                                        whatsapp: "",
                                        phone: "",
                                        socialMedia: []
                                    }}
                                    onSubmit={() => {
                                        alert('ERROR')
                                    }}
                                >
                                    {({handleSubmit}) => (
                                        <form onSubmit={handleSubmit}>
                                            <Input icon={require('../../assets/img/email.svg').default} name="email"/>
                                            <Input icon={require('../../assets/img/global.svg').default}
                                                   name="website"/>
                                            <PhoneInput/>
                                            <Input icon={require('../../assets/img/whatsapp.svg').default}
                                                   name="whatsapp"/>
                                            <Social/>
                                            <button type="submit">Изменить</button>
                                        </form>
                                    )}
                                </Formik>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile