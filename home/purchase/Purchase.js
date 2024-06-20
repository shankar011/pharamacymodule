
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import circle from "../../../../public/images/circle.png"
import cart from "../../../../public/images/cart.png"
import watch from "../../../../public/images/watch.png"
import downarrow from "../../../../public/images/downarrow.png"
import rcircle from "../../../../public/images/returned.png"


const Purchase = () => {

        return (
            <div>
                <div className={styles.sale}>
                    <div className={styles.month}>
                        <p>Purchase overview</p>
                        <select>
                            <option>This month</option>
                            <option>This Week</option>
                        </select>
                    </div>
                    <div className='d-flex flex-sm-wrap justify-content-between p-3'>

                        <div className={styles.circle}> 

                        <Image src={circle} alt='img' />
                        </div>
                        

                        <div className={styles.margin}>
                            <p><Image src={cart} alt='img' /> Purchase ordered  </p>
                            <p><Image src={watch} alt='img' /> Awaiting  </p>
                            <p><Image src={downarrow} alt='img' /> Received  </p>
                            <p><Image src={rcircle} alt='img' /> Returned  </p>
                        </div>

                        <div className={styles.number}>
                            <h6>402</h6>
                            <h6>332</h6>
                            <h6>332</h6>
                            <h6>332</h6>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    
};

export default Purchase;
