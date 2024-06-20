import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import sales from "../../../../public/images/sales.png";
import gross from "../../../../public/images/gross.png";
import dollar from "../../../../public/images/dollar.png";
import watch from "../../../../public/images/watch.png";
import Purchase from '../purchase/Purchase';




const Sales = () => {
  return (
    <div className={styles.container}>


      <div>
        <div className={styles.sale}>
          <div className={styles.month}>
            <p>Sales Overview</p>
            <select>
              <option>This month</option>
              <option>This Week</option>
            </select>
          </div>

          <div className={styles.margin}>
            <div>
              <p><Image src={sales} alt='img' /> Sales </p>
              <h6>₹832</h6>
            </div>
            <div>
              <p><Image src={gross} alt='img' /> Gross margin </p>
              <h6>₹832</h6>
            </div>
          </div>
        </div>

        <div className={styles.sale}>
          <div className={styles.month}>
            <p>Inventory summary</p>
          </div>

          <div className={styles.margin}>
            <div>
              <p><Image src={dollar} alt='img' /> Total value </p>
              <h6>₹832</h6>
            </div>
            <div>
              <p><Image src={watch} alt='img' /> Total awaiting </p>
              <h6>₹832</h6>
            </div>
          </div>

        </div>

      </div>

      <div>
        <Purchase />
      </div>



    </div>


  )
}

export default Sales;