import React from 'react';
import styles from "./style.module.css";





const Medicine = () => {
    return (
        <div className={styles.container}>
            <div className={styles.paymet}>
                <span className={styles.details}>Add medicines</span>
                <button>Add to inventory</button>
            </div>
           
            <div className="pb-4">
                <form className={styles.forms}>
                    <div className="mb-2 flex-wrap">
                        <label for="exampleInputText" className="form-label">Medicine</label>
                        <input type="text" className="form-control" placeholder='Enter medicne name' aria-describedby="textHelp" />


                        <label for="exampleInputBrand" className="form-label">Brand</label>
                        <input type="text" placeholder='Enter brand name' className="form-control" />

                        <label for="exampleInputName" className="form-label">Distributor name</label>
                        <input type="text" placeholder='Enter Distributer name' className="form-control" />
                    </div>

                    <div className="mb-2 flex-wrap">
                        <label for="exampleInputNumber" className="form-label">Quantity</label>
                        <input type="number" placeholder='Enter quantity' className="form-control" aria-describedby="numberHelp" />


                        <label for="exampleInputPrice" className="form-label">MRP</label>
                        <input type="number" placeholder='Enter MRP' className="form-control" />

                        <label for="exampleInputBatchNo" className="form-label">Batch no.</label>
                        <input type="number" placeholder='Enter batch no.' className="form-control" />
                    </div>


                    <div className="mb-2 flex-wrap">
                        <label for="exampleInputshelf" className="form-label">Shelf label</label>
                        <input type="text" placeholder='Enter purchase date' className="form-control" aria-describedby="dateHelp" />


                        <label for="exampleInputprice" className="form-label">Purchase price</label>
                        <input type="number"  placeholder='Enter purchase date' className="form-control" />

                        <label for="exampleInputdate" className="form-label">Expiry date</label>
                        <input type="date" placeholder='Enter expiry date' className="form-control" />
                    </div>

                   

                </form>

            </div>
        </div>
    )
}

export default Medicine;