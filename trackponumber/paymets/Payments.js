import React from 'react';
import styles from "./style.module.css";
import star from "../images/star.png"
import Image from 'next/image';

const Payments = () => {
    return (
        <div className={styles.container}>
            <p>Payment details</p>

            <div className={styles.mform}>
                <div className="form-group">
                    <label >Payment method <span><Image src={star} alt="img" /> </span></label>
                    <select className="form-control">
                        <option>UPI</option>
                        <option>Credit</option>
                        <option>Debit</option>
                        <option>Rupay</option>
                        <option>others</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control mt-4" placeholder="45days" />
                </div>
                <div className="form-group ">
                    <label >Payment Status  <span><Image src={star} alt="img" /> </span></label>
                    <select className="form-control" >
                        <option>Upaid</option>
                        <option>awaiting</option>
                        <option>success</option>

                    </select>
                </div>
            </div>

            <form>
                <div className="form-group">
                    <label >Payment method <span><Image src={star} alt="img" /> </span></label>
                    <select className="form-control">
                        <option>UPI</option>
                        <option>Credit</option>
                        <option>Debit</option>
                        <option>Rupay</option>
                        <option>others</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control mt-4" placeholder="45days" />
                </div>

                <div className="form-group ">
                    <label >Payment Status  <span><Image src={star} alt="img" /> </span></label>
                    <select className="form-control" >
                        <option>Upaid</option>
                        <option>awaiting</option>
                        <option>success</option>

                    </select>
                </div>
            </form>
        </div>
    )
}

export default Payments;
