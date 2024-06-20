import React from 'react';
import styles from "./style.module.css";

const AddStore = () => {
  return (
    <div className={styles.container}>
        <div className={styles.add}>
            <p>Add store details</p>
            <button>Add to list</button>
        </div>
        <div className={styles.storeinfo}>
            <div className='mt-2'>
                <p>Store name</p>
                <input type='text' placeholder='Enter store name' />
            </div>
            <div className={styles.address}>
                <p>Store address</p>
                <input type='text' placeholder='Enter store adress' />
            </div>
        </div>
    </div>
  )
}

export default AddStore