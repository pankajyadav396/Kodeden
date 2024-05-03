import CircularLinkedin from "../assets/images/svg/linkdin.svg"
import insta from "../assets/images/svg/insta.svg"
import twitr from "../assets/images/svg/twitr.svg"
import telegram from "../assets/images/svg/telegram.svg"

export const Footer = () => {
    return (
        <>
            <div className=" pt-md-4">
                <div className="bt-1">
                    <div className=" container max-w-1140">
                        <p className=" color-grey cursor-pointer fs-md2 ff-jost fw-normal pt-5 py-md-5 my-3 text-center text-md-end">Privacy Policy | Terms of Service | Cookie Policy</p>
                        <div className='text-center d-block d-md-none my-4 mt-md-0 gap-2'>
                            <a target='_blank' className=" text-decoration-none" href="https://twitter.com/"><img src={CircularLinkedin} alt="img" /> </a>
                            <a target='_blank' className=" text-decoration-none" href="https://instagram.com/"><img src={insta} alt="img" /> </a>
                            <a target='_blank' className=" text-decoration-none" href="https://telegram.com/"><img src={twitr} alt="img" /> </a>
                            <a target='_blank' className=" text-decoration-none" href="https://linkedin.com/"><img src={telegram} alt="img" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}