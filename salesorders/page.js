import React from 'react'
import SalesOrder from './salesorder/SalesOrder';
import styles from "./style.module.css";

const page = () => {
  return (
    <div className={styles.container}>
        <SalesOrder />
    </div>
  )
}

export default page