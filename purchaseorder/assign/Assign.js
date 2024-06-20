import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import cross from "../images/cross.png";
import star from "../images/star.png";

const Assign = () => {
  return (
    <div className={styles.container}>
            <div className={styles.assign}>
            <p>Assign Contractor</p>    
            <Image src={cross} alt='img' />
            </div> 
            <form>
                <div>
                    <label htmlForfor="exampleInputSelect" class="form-label">Select Contractor
                    <span><Image src={star} alt='img' /> </span>
                    </label>
                    <select class="form-select">
                        <option>Credit</option>
                    </select>
                </div>
                <div className={styles.dates}>
                    <label htmlFor='days' className="form-label">Delivery Date<span><Image src={star} alt='img' /> </span></label>
                    <input type="date" placeholder='45 days' className="form-control" />
                </div>
                <div className='mt-4'>
                    <button>Assign</button>
                </div>

            </form>
    </div>
  )
}

export default Assign