import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import person from "../images/personfill.png"
import phone from "../images/phone_fill.png"
import hospital from "../images/hospital.png"
import delivery from "../images/ambulance.png"
import dperson from "../images/delivaryperson.png"




const Payment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.paymet}>
                <span className={styles.details}>Payment details</span>
                <span className={styles.note}>&nbsp; Note: Please confirm the order once the payment is received</span>
            </div>
            <div className={styles.option}>
                <select>
                    <option>Credit</option>
                </select>
                <input type='text' placeholder='45 days' />
            </div>

            <h4>Customer details</h4>

            <div className="pb-4">
                <form className={styles.forms}>
                    <div className="mb-2 flex-wrap">
                        <label for="exampleInputEmail1" className="form-label"><span><Image src={person} alt="img" /> </span>customer name</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-2 flex-wrap">
                        <label for="exampleInputPassword1" className="form-label"> <span><Image src={phone} alt="img" /> </span>Mobile number</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="mb-2 flex-wrap">
                        <label for="exampleInputPassword1" className="form-label"><span><Image src={hospital} alt="img" /> </span>Hospital/Doctor name</label>
                        <input type="password" className="form-control" />
                    </div>

                </form>

                <form className={styles.forms}>
                    <div className="mb-1 flex-wrap">
                        <label for="exampleInputEmail1" className="form-label"><span><Image src={delivery} alt="img" /> </span>Delivery address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-1 flex-wrap">
                        <label for="exampleInputPassword1" className="form-label"> <span><Image src={dperson} alt="img" /> </span>Delivery person</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Chose your employee</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="mb-1 flex-wrap">
                        <label for="exampleInputPassword1" class="form-label"><span><Image src={hospital} alt="img" /> </span>Delivery status</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Out for deliver</option>
                            <option value="delivered">Delivered</option>
                            <option value="return">Return</option>      
                        </select>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Payment