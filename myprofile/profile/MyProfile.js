import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import star from "../../../../public/images/star.png"

const MyProfile = () => {
    return (

        <div className={styles.container}>
            <p className={styles.title}>My Profile</p>

            <div className='d-flex  flex-wrap justify-content-between'>

                <div className="m-2 flex-wrap">
                    <label for="exampleFormControlInput1" className="form-label">Owner name <Image src={star} alt='img'/> </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jenny Wilson" />
                </div>
                <div className="m-2 flex-wrap">
                    <label for="exampleFormControlInput1" className="form-label">Mobile number <Image src={star} alt='img'/></label>
                    <input type="number" className="form-control " id="exampleFormControlInput1" placeholder="7555381084" />
                </div>
                <div className="m-2 flex-wrap">
                    <label for="exampleFormControlInput1" className="form-label">GSTIN <Image src={star} alt='img'/></label>
                    <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="22AAAAA0000A1Z5" />
                </div>

            </div>

            <div className='d-flex flex-wrap justify-content-between'>

                <div className="m-2 flex-wrap">
                    <label for="exampleFormControlInput1" className="form-label">Email address <Image src={star} alt='img'/></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="m-2 flex-wrap">
                    <label for="exampleFormControlInput1" className="form-label">Drug Licence no. <Image src={star} alt='img'/></label>
                    <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="7555381084" />
                </div>
                <div className="m-2 flex-wrap">
                    <label for="exampleFormControlInput1" className="form-label">Food LIC no. <Image src={star} alt='img'/></label>
                    <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="22AAAAA0000A1Z5" />
                </div>

            </div>

        </div>
    )
}

export default MyProfile