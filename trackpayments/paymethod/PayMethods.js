import React from 'react';
import styles from "./style.module.css";

const PayMethods = () => {
    return (
        <div className={styles.container}>
            <h6>Payment method</h6>
            <div className={styles.check}>
                <p>Wallet payment</p>
                <div className='d-flex justify-content-between m-3 '>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label className="form-check-label" for="exampleRadios1">
                            Phone Pe
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" for="exampleRadios2">
                            Gpay
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label className="form-check-label" for="exampleRadios1">
                            Paytm
                        </label>
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" for="exampleRadios2">
                            BHIM
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label className="form-check-label" for="exampleRadios1">
                            PayPal
                        </label>
                    </div>
                </div>
                <span className='mt-2'> You are choosing to pay through Phone Pe UPI  </span>
                <hr />
            </div>
            <p>Payment with cards</p>

            <div className={styles.cards}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                        Debit card/Credit card
                    </label>
                </div>
                <span className='mt-2'> You are choosing to pay through Phone Pe UPI  </span>
            </div>

            <div className={styles.method}>
                <p>Card details</p>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name on card</label>
                    <input type="text" className="form-control" placeholder="Enter full name as on card" />
                </div>
            </div>
            <div className={styles.cardmethod}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Card number</label>
                    <input type="number" className="form-control" placeholder="xxxx xxxx xxxx xxxx" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Valid through (MM/YY)</label>
                    <input type="text" className="form-control" placeholder="MM/YY" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">CVV(3 digits)</label>
                    <input type="number" className="form-control" placeholder="3 digit" />
                </div>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"  />
                 <label className="form-check-label">Save my card details</label>
            </div>

        </div>
    )
}

export default PayMethods