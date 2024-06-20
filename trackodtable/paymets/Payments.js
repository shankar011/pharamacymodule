import React from 'react';
import styles from "./style.module.css";
import star from "../images/star.png"
import Image from 'next/image';

const Payments = () => {
    return (
        <div className={styles.container}>
            <p>Payment details</p>

            <div className={styles.mpaymets}>
                <div className="form-group">
                    <label className='ms-1 mb-1' >Payment method <span><Image src={star} alt="img" /> </span></label>
                    <select className="form-control">
                        <option>UPI</option>
                        <option>Credit</option>
                        <option>Debit</option>
                        <option>Rupay</option>
                        <option>others</option>
                    </select>
                </div>

                <div className="form-group ">
                    <label className='ms-1 mb-1' >Payment Status  <span><Image src={star} alt="img" /> </span></label>
                    <select className="form-control" >
                        <option>Upaid</option>
                        <option>awaiting</option>
                        <option>success</option>

                    </select>
                </div>
                <div className="form-group">
                    <label className='ms-4 mb-1' for="exampleInputtext1">Lorry no..</label>
                    <input type="text" class="form-control" aria-describedby="textHelp" placeholder="Enter lorry number" />
                </div>
            </div>


            <form>
                <div className='d-flex flex-wrap ms-3'>
                    <div className="form-group">
                        <label className='ms-1 mb-1' >Payment method <span><Image src={star} alt="img" /> </span></label>
                        <select className="form-control">
                            <option>UPI</option>
                            <option>Credit</option>
                            <option>Debit</option>
                            <option>Rupay</option>
                            <option>others</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label></label>
                        <input type="text" className="form-control" placeholder="45days" />
                    </div>

                    <div className="form-group ">
                        <label className='ms-1 mb-1' >Payment Status  <span><Image src={star} alt="img" /> </span></label>
                        <select className="form-control" >
                            <option>Upaid</option>
                            <option>awaiting</option>
                            <option>success</option>

                        </select>
                    </div>
                </div>
                <div className='d-flex flex-wrap mt-3'>
                    <div className="form-group">
                        <label className='ms-4 mb-1' for="exampleInputtext1">Lorry no..</label>
                        <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter lorry number" />
                    </div>

                    <div class="form-group">
                        <label className='ms-4 mb-1' for="exampleInputtext1">Distributors invoice number  <span><Image src={star} alt="img" /> </span></label>
                        <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter distributors invoice number" />
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Payments;
