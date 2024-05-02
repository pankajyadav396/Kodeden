import React from 'react'
import img from '../assets/images/png/manlaptop.png'
import ellipse from '../assets/images/png/arrowellipse2.png'
import Commonbtn from '../common/Commonbtn'
const Section2 = () => {
    return (
        <>
            <div className=' py-sm-5 mt-5 position-relative' id='aboutus'>
                <div className=' container max-w-1140 position-relative'>
                    <img src={ellipse} alt="img" className=' position-absolute arrow2 d-none d-lg-block' />

                    <div className="row pt-lg-5 justify-content-center align-items-center">
                        <div data-aos="fade-up" className=" col-lg-7 pe-lg-0">
                            <h2 className=' color-lightwhite fw-medium text-center text-lg-start lh-68 ff-jost fs-2xl'>What is KodeDen's <span className=' color-gradient'>6-Month</span> <span className=' text-xxl-nowrap'> Software Engineering Course?</span></h2>
                            <ul className=' ps-4 justify-content-center align-items-center d-flex d-lg-block flex-column'>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>With 6-figure salaries, unlimited PTO, and the flexibility to work anywhere in the world—(or</li>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>simply pick your kids up from school), you want in.</li>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>But who has $25k+ to drop on a bootcamp?</li>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>Or semesters of free time to dedicate to going back to school?</li>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>Or YEARS to go through the trial and error involved in teaching yourself?</li>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>Heck, most people don’t even know where to start.</li>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>Heck, most people don’t even know where to start.</li>
                                <li className=' color-grey text-center text-lg-start list-style-disks fs-sm1 ff-jost lh-32 fw-normal'>If that's you, you’ve been dreaming of a high-paying tech career but paralyzed when it comes time to take action.</li>

                            </ul>
                            <p className=' color-gradient text-center text-lg-start mb-lg-5 mb-4 fs-sm1 fw-semibold ff-jost'>I want to Start My Software Engineering Journey!</p>
                            <div className=' d-block text-center text-lg-start'> <Commonbtn />  </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-5 col-md-7  col-sm-8 col-11 ps-lg-0 mt-5 mt-lg-0">
                            <img src={img} alt="img" className=' w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2