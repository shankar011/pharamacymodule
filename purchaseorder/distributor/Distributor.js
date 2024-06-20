import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import call from "../images/call.png";
import email from "../images/email.png";


const Distributor = () => {
    return (
        <div className={styles.container}>
            <div className={styles.select}>
                <div className={styles.distributor}>
                    <p>Select distributor</p>
                    <select>
                        <option>Ralph Edwards</option>
                    </select>
                    <button>save</button>
                </div>
                <h4 className='ms-3'>Add medicine</h4>
                <form>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="form-label">Medicine name</label>
                        <input type="password" placeholder='Enter medicine name' className="form-control " />
                    </div>
                    <div className='ms-5'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                        <select className="form-select">
                            <option>Enter quantity</option>
                        </select>
                    </div>
                </form>
                <div className={styles.cart}>
                    <button>Add to cart</button>
                </div>
            </div>

            <div className={styles.mselect}>

                <div className={styles.carts}>
                    <h1>Add Medicine</h1>
                    <button>Add to Cart</button>
                </div>

                <form>
                    <div>
                        <select className="form-select w-75">
                            <option>Ralph Edwards</option>
                        </select>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Medicine name</label>
                        <input type="password" placeholder='Enter medicine name' className="form-control " />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                        <select className="form-select">
                            <option>Enter quantity</option>
                        </select>
                    </div>
                </form>

            </div>



            <div className={styles.details}>
                <h4 className='ps-4'>Distributors details</h4>
                <h6 className='ps-4'>Ralph Edwards</h6>
                <span className='ps-4'><Image src={call} alt='img' />  9455575237</span>
                <span className='ms-3'><Image src={email} alt='img' /> sara@gmail.com</span>
                <div className={styles.lists}>
                    <ul className={styles.list_1}>
                        <li>Sales representative</li>
                        <li>DL no.</li>
                        <li>Food lic no.</li>
                        <li>Awaiting PO</li>
                        <li>Delivered amount</li>
                    </ul>
                    <ul className={styles.list_2}>
                        <li> Savannah Nguyen</li>
                        <li> 45544545554.</li>
                        <li>4544544454</li>
                        <li>444</li>
                        <li>₹ 444</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Distributor;