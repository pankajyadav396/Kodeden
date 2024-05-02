import sliderimg1 from "../assets/images/png/slider1st-img.png";
import sliderimg2 from "../assets/images/png/slider2nd-img.png";
import sliderimg3 from "../assets/images/png/slider3rd-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Linkedin from "../common/Icons";
import Commonbtn from "../common/Commonbtn";

const Section5 = () => {
    const array1 = [
        {
            title: 'Ross O’Rourke Founder, iC-1 Solutions. CEO Agile Onboarding',
            para: 'Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. ',
            para2: 'Read More...',
            img: sliderimg1,
            name: 'Ross O’Rourke',
            name1: '@Ross O’Rourke',
        },
        {
            title: '“Luke O’Malley Tech Lead Agile',
            title1: 'Onboarding.”',
            para: 'I highly recommend kody Doherty. I have had the pleasure of working with him on variety of software projects over the past three years and his guidance has been intergral to my personal success. He is a driven, organized engineer who develops inspiring relationships with his students. ',
            para2: 'Read More...',
            para3: 'Vitae elit dapibus',
            img: sliderimg2,
            name: 'Luke O’Malley',
            name1: '@Luke O’Malley',
        },
        {
            title: 'Leslie Sage Director of Data Science at DevResults',
            para: 'I had the pleasure of working with Kolton in 2019. In a team of a dozen people, Kolton stood out for his curiosity and drive. He executed ambitious projects with efficiency and attention to detail. He executed ambitious projects with efficiency and attention to detail.',
            para2: 'Read More...',
            para3: 'Vitae elit dapibus',
            img: sliderimg3,
            name: 'Leslie Sage',
            name1: '@Leslie Sage',
        },
        {
            title: 'Ross O’Rourke Founder, iC-1 Solutions. CEO Agile Onboarding',
            para: 'Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. ',
            para2: 'Read More...',
            img: sliderimg1,
            name: 'Ross O’Rourke',
            name1: '@Ross O’Rourke',
        },
    ]

    return (
        <div className="mt-xl-5 pt-lg-5 pt-3 px-3" id="choose">
            <div className="container p-0 max-w-1140 mt-lg-5 pt-md-5 position-relative">
                <h2 data-aos="fade-up" className="color-lightwhite mt-4 fs-2xl fw-medium text-center text-uppercase  lh-xl1 m-0 pb-5">
                    What our <span className="color-gradient">students</span> are saying
                </h2>
                <Swiper
                    speed={1000}
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    loop={true}
                    className="pb-5"
                    breakpoints={{
                        720: {
                            slidesPerView: 2,
                        },
                        1108: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {array1.map((even, index) => {
                        return (
                            <SwiperSlide data-aos="fade-up" className={`${index == 2 ? " px-3" : ""} && ${index == 1 ? " px-xxl-2" : ""} && ${index == 0 ? " px-xl-1 ps=xxl-2" : ""}  slider-card`} >
                                <h4 className=" m-0 fw-normal fs-md3 lh-36 text-ellipsis ff-jost color-white">
                                    {even.title}
                                </h4>
                                <h4 className={`${index == 0 ? "d-none" : ""} && ${index == 2 ? "d-none" : ""} m-0 fw-normal fs-md3 lh-36 text-ellipsis ff-jost color-white`}>
                                    {even.title1}
                                </h4>
                                <p className="m-0 fs-sm1 fw-normal ps-xxl-1 ff-jost lh-25 color-grey2 pt-1 pb-1">
                                    {even.para} <span className={`${index == 1 ? "d-no ne d-xxl-none" : ""} && ${index == 2 ? "d-block d-xl-none" : ""}  && ${index == 0 ? "d-none" : ""} `}>{even.para3}</span>
                                </p>
                                <p className="fw-semibold fs-sm1 ps-1 ff-jost text-white pt-6 m-0">
                                    {even.para2}
                                </p>
                                <div className="d-flex align-items-center pe-3 ff-jost me-1 justify-content-between pt-26">
                                    <div className="d-flex align-items-center">
                                        <img width={52} height={52} src={even.img} alt="img1-slider ps-1" />
                                        <div className="ps-2 ms-1">
                                            <p className="text-white ff-jost m-0 fw-normal fs-md2">
                                                {even.name}
                                            </p>
                                            <p className="m-0 fw-normal ff-jost fs-sm color-grey">
                                                {even.name1}
                                            </p>
                                        </div>
                                    </div>
                                    <Linkedin />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <button className="bg-transparent prev border-0 hover-scale position-absolute z-2 prev-btn">
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="22" cy="22" r="22" fill="url(#paint0_linear_2_1773)" />
                        <path
                            d="M26.7992 16.0001L20.7992 22.0001L26.7992 28.0001L25.5992 30.4001L17.1992 22.0001L25.5992 13.6001L26.7992 16.0001Z"
                            fill="#F4F4F4"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2_1773"
                                x1="-1.14444e-07"
                                y1="1.29412"
                                x2="20.5626"
                                y2="32.2782"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FF2801" />
                                <stop offset="1" stop-color="#FF6B0A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
                <button className="bg-transparent next border-0 hover-scale position-absolute z-2 next-btn">
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="22"
                            cy="22"
                            r="22"
                            transform="matrix(-1 0 0 1 44 0)"
                            fill="url(#paint0_linear_2_1776)"
                        />
                        <path
                            d="M17.2008 16.0001L23.2008 22.0001L17.2008 28.0001L18.4008 30.4001L26.8008 22.0001L18.4008 13.6001L17.2008 16.0001Z"
                            fill="#F4F4F4"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2_1776"
                                x1="-1.14444e-07"
                                y1="1.29412"
                                x2="20.5626"
                                y2="32.2782"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FF2801" />
                                <stop offset="1" stop-color="#FF6B0A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
                <div className=" text-center pt-3"><Commonbtn /></div>
            </div>
        </div>
    );
}

export default Section5;