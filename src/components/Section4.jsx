import img from '../assets/images/png/programimg.png'

const Section4 = () => {
    return (
        <>
            <div className=' pt-lg-5 mt-xl-5' id='faqs'>
                <div className=' container mt-5 pt-sm-5 pt-3 max-w-1140'>
                    <div className=' row pt-4 justify-content-lg-around align-items-center'>
                        <div data-aos="fade-up" className=' col-lg-5 mx-auto col-md-6 col-sm-11'>
                            <img src={img} alt="ig" className=' w-100' />
                        </div>
                        <div data-aos="fade-up" className="col-lg-6 mx-auto col-md-11 mt-5 mt-lg-0 d-flex align-items-center justify-content-center flex-column">
                            <div className=' d-flex d-lg-block align-items-center justify-content-center flex-column'>
                                <h2 className=' color-lightwhite text-center text-lg-start fs-2xl fw-medium ff-jost lh-68'>Are You A Good Fit For Our Program?</h2>
                                <p className=' color-lightwhite fs-sm1 ff-jost mb-3'>About Who The Program is For</p>
                                <p className=' color-gradient fs-sm1 pt-1 ff-jost mb-2 text-center text-lg-start'>Our 6-Month Software Engeering Course is for individuals that...</p>
                                <p className=' color-grey fs-sm1 text-center text-lg-start ff-jost'>Want to take action now but don't have years to waste in university Are extremely motivated and want to succeed Have dreamed of becoming a software engineer but don't have hundreds of thousands of dollars lying around</p>
                                <p className=' color-gradient fs-sm1 pt-1 mb-1 ff-jost'>It isn't for...</p>
                                <p className=' color-grey fs-sm1 pt-1 text-center text-lg-start ff-jost'>People that aren't self-starters People that don't have a sense of urgency to become a software engineeer People that aren't serious about fulfilling their dream</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4