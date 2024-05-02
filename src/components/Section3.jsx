import React from 'react'
import img1 from "../assets/images/png/manlaptop2.png";
import img2 from "../assets/images/png/goldpotli.png";
import img3 from "../assets/images/png/gallery.png";
import arrow from '../assets/images/png/arrowellipse3.png'

const Section3 = () => {
    const array = [
        {
            title: '01',
            para: 'Master ',
            para1: 'Full-Stack Coding Skills',
            img: img1,
        },
        {
            title: '02',
            para: 'Build a',
            para1: 'Standout Portfolio',
            img: img2,
        },
        {
            title: '03',
            para: 'Launch ',
            para1: 'Your Tech Career',
            img: img3,
        },
    ]
    return (
        <>
            <div className=' pt-xl-5 mt-lg-5'>
                <div className='pt-5 container max-w-1140 position-relative'>
                    <img src={arrow} alt="img" className=' position-absolute arrow3 d-none d-lg-block' />
                    <h2 className=' color-lightwhite mt-xl-5 fs-2xl fw-medium ff-jost text-center lh-68'>“From Confused to Coder”: Kodeden's <span className=' d-lg-block'></span> Exclusive 6-Month <span className=' color-gradient'> Software Engineering  </span>Course </h2>
                    <p className=' color-lightwhite fs-sm1 fw-normal text-center mt-2 ff-jost'>Through twice-weekly live lectures and at-home exercises, you’ll:</p>
                    <p className=' color-grey fs-sm1 fw-normal text-center mb-5 pb-4 ff-jost'>Learn everything you need to know to break into tech from senior engineers with experience at <span className=' d-block'></span> Apple, Amazon, and the DOD. </p>
                    <div className="container max-w-941">
                        <div className=' row'>
                            {array.map((e, index) => {
                                return (
                                    <div className={`${index == 2 ? "mt-4 mt-lg-0" : ""} && ${index == 1 ? "mt-4 mt-sm-0" : ""} col-lg-4 col-sm-6 col-12`}>
                                        <div className='box-gold justify-content-end d-flex flex-column position-relative pb-3'>
                                            <p className=' fs-lg ff-jost m-0 fw-semibold color-grey'>{e.title}</p>
                                            <p className=' fs-md color-lightwhite m-0 ff-jost fw-bold'>{e.para}</p>
                                            <p className=' fs-md color-lightwhite m-0 ff-jost fw-bold mb-1'>{e.para1} <span className=' ms-1 pb-2 accordion'><svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.5085 3.41614L8.87116 6.67088V0.161393L14.5085 3.41614ZM9.4349 3.97988H0.978827V2.8524H9.4349V3.97988Z" fill="#E4E4E4" />
                                            </svg>
                                            </span></p>
                                            <img src={e.img} alt="dc" className={`${index == 2 ? "mt-2" : ""} img-boxgold anime-bounce1 position-absolute top-0 end-0`} width={132} />
                                            <img src={e.img} alt="dc" className={`${index == 2 ? " mt-2" : ""}  position-absolute anime-bounce1 top-0 end-0`} width={132} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3