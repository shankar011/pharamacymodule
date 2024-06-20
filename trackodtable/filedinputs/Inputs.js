import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import star from "../images/star.png";
import file from "../images/file.png";
import remove from "../images/remove.png";
import sfile from "../images/sfile.png";
import sremove from "../images/sremove.png";
import tablet from "../images/tablet.png";




const Inputs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <span>Dolo</span>
                <span>40 no.</span>
                <span className='d-flex'>Purchase Price <p>&#8377; 40</p> </span>
                <span>MRP price - Rs. 50</span>
                <span>  <Image className='me-2' src={remove} alt='img' /> <Image src={file} alt='img' /> </span>

            </div>

            <div className={styles.mpaymets}>

                <div className={styles.top}>
                    <Image src={tablet} alt='img'/>
                    <p>Aspirine</p>
                    <span>( Quantity - 40 tablets)</span>
                    <span><Image src={sfile}  alt='img'/> </span>
                   <span> <Image src={sremove} alt='img'/> </span>

                </div>

                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">  Revised quantity <span><Image src={star} alt="img" /> </span></label>
                    <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter quantity" />
                </div>
                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">Batch no.  <span><Image src={star} alt="img" /> </span></label>
                    <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter batch no" />
                </div>
                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">Purchase price<span><Image src={star} alt="img" /> </span></label>
                    <input type="number" className="form-control" aria-describedby="textHelp" placeholder="&#8377;40" />
                </div>
                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">MRP price<span><Image src={star} alt="img" /> </span></label>
                    <input type="number" className="form-control" aria-describedby="textHelp" placeholder="&#8377;40" />
                </div>
                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">      Expiry date<span><Image src={star} alt="img" /> </span></label>
                    <input type="date" className="form-control" aria-describedby="textHelp" placeholder="Enter date" />
                </div>
                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">        GST%  <span><Image src={star} alt="img" /> </span></label>
                    <input type="text" className="form-control" aria-describedby="textHelp" placeholder="12%" />
                </div>
                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">Shelf label</label>
                    <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter shelf label" />
                </div>
                <div className="form-group">
                    <label className='mb-1' for="exampleInputtext1">HSN<span><Image src={star} alt="img" /> </span></label>
                    <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter HSN" />
                </div>

            </div>
            

            <form>

                <div className='d-flex flex-wrap '>
                    <div className="form-group">
                        <label className='mb-1' for="exampleInputtext1">Batch no. *  <span><Image src={star} alt="img" /> </span></label>
                        <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter batch no" />
                    </div>

                    <div className="form-group">
                        <label className='mb-1' for="exampleInputtext1">Revised quantity * <span><Image src={star} alt="img" /> </span></label>
                        <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter revised quantity" />
                    </div>

                    <div className="form-group">
                        <label className='mb-1' for="exampleInputtext1">Expiry date  <span><Image src={star} alt="img" /> </span></label>
                        <input type="date" className="form-control" aria-describedby="textHelp" placeholder="Enter expiry date" />
                    </div>
                </div>

                <div className='d-flex flex-wrap mt-3'>
                    <div className="form-group">
                        <label className='mb-1' for="exampleInputtext1">HSN<span><Image src={star} alt="img" /> </span></label>
                        <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter HSN" />
                    </div>

                    <div className="form-group">
                        <label className='mb-1' for="exampleInputtext1">Shelf label</label>
                        <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter shelf label" />
                    </div>

                    <div className="form-group">
                        <label className=' mb-1' for="exampleInputtext1">GST% *<span><Image src={star} alt="img" /> </span></label>
                        <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter GST%" />
                    </div>

                </div>

            </form>

        </div>
    )
}

export default Inputs