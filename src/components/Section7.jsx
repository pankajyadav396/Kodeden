import img from '../assets/images/webp/2man.webp'
import Commonbtn from '../common/Commonbtn'
import arrow from '../assets/images/png/arrowellipse3.png'
const Section7 = () => {
    return (
        <>
            <div className=' mt-xl-5 mb-5 pt-5 pb-lg-5'>
                <div className=' container mt-lg-5 pt-md-5 max-w-1140 position-relative'>
                    <img src={arrow} alt="img" className=' position-absolute end-0 bottom-0 d-none d-md-block' />
                    <h2 data-aos="fade-up" className=' color-lightwhite fs-2xl pb-2 fw-medium ff-jost lh-68 text-center'>Who Are <span className=' color-gradient'>We</span>?</h2>
                    <div className=' row mt-5 pt-3 justify-content-between align-items-center'>
                        <div data-aos="fade-up" className="col-md-6 col-sm-10 mx-auto">
                            <img src={img} alt="img" className=' w-100 max-w-474' />
                        </div>
                        <div data-aos="fade-up" className="col-md-6 col-sm-10 mt-4 mx-auto mt-md-0 d-flex align-items-center justify-content-center">
                            <div>
                                <p className=' fs-sm color-lightwhite ff-jost text-center text-md-start'>MEET YOUR INSTRUCTORS</p>
                                <div className=' max-w-494'>
                                    <p className=' fw-medium fs-lg ff-jost color-lightwhite text-center text-md-start'>Hi, We’re Kody Doherty <span className=' d-block'></span> And Kolton Starr 👋</p>
                                    <p className=' fw-normal fs-sm1 ff-jost m-0 color-grey2 text-center text-md-start'>And we know firsthand that building a career as a software engineer without a computer science degree is possible.</p>
                                    <p className=' fw-normal fs-sm1 ff-jost m-0 color-grey2 text-center text-md-start'>We started where you are *right now*—without engineering degrees, a professional portfolio, or years of experience.</p>
                                    <p className=' fw-normal fs-sm1 ff-jost m-0 color-grey2 text-center text-md-start'>Then we climbed the ranks to hold senior positions at tech titans like Amazon, Apple, and the US government.
                                    </p>
                                    <p className=' fw-normal fs-sm1 ff-jost m-0 color-grey2 text-center text-md-start'>Throughout our careers, we’ve managed entire teams of engineers, directed $30 million program budgets, and built 2 successful tech startups (one that we sold).
                                    </p>
                                    <p className=' fw-normal fs-sm1 ff-jost m-0 color-grey2 text-center text-md-start'>Learning to code did more than add a few impressive lines to our resumes. It literally changed our lives…
                                    </p>
                                    <p className=' fw-semibold fs-sm1 ff-jost m-0 color-gradient mt-3 mb-lg-5 mb-3 text-center text-md-start'>I want to live my dream now!  </p>
                                    <div className=' text-center text-md-start'><Commonbtn /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section7