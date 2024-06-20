import React from 'react';
import styles from "./style.module.css";
import star from "../images/star.png"
import Image from 'next/image';
import cross from "../images/cross.png";

const Contractor = () => {
    return (
        <div className={styles.container}>
            <div className='d-flex flex-wrap justify-content-between mb-3 '>
                <p>Assign Contractor</p>
                <Image className='mt-2' src={cross} alt='img' />
            </div>

            <form>
                <div className="form-group me-5">
                    <label >Select Contractor <span><Image src={star} alt="img" /> </span></label>
                    <select className="form-control">
                        <option>Select contractor name</option>
                    </select>
                </div>

                <div className="form-group me-5">

                    <label className="form-label ms-3">Delivery Date<span><Image src={star} alt="img" /> </span></label>
                    <input type="date" class="form-control" />

                </div>
                <div className='ms-5'>
                    <button>Assign</button>
                </div>

            </form>
        </div>
    )
}

export default Contractor