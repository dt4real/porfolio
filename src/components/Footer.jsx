import React from 'react'
import { socialMedia } from '../constants'
import { SectionWrapper } from '../hoc'

const Footer = () => {
    return (
        <div className="flex flex-wrap justify-between gap-10 items-center">
                <p className="md:text-base text-sm md:font-normal font-light text-white">
                    Copyright © 2024 Darlington Otchere
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            onClick={() => window.open(info.link, "_blank")}
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default SectionWrapper(Footer, "");
