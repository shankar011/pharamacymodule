import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import star from "../images/star.png";


const Payments = () => {
    return (
        <div className={styles.container}>
            <p>Payment details</p>

            <form className={styles.mform}>
                <div className="form-group">
                <div className="form-group ">
                    <label className='ms-3' >Your name<span><Image src={star} alt="img" /> </span></label>
                    <input type="text" className="form-control" placeholder="First Name" />

                </div>
                </div>

                <div className={styles.minput}>
                    <div className="form-group">
                        <input type="text" className="form-control mt-4" placeholder="Last Name" />
                    </div>
                </div>

                <div className="form-group ">
                    <label className='ms-3' >Email address  <span><Image src={star} alt="img" /> </span></label>
                    <input type="email" className="form-control" placeholder="Enter Email" />

                </div>
            </form>
        </div>
    )
}

export default Payments;
