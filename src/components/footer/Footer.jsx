import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <div >
                <div>©2023 Key-Web . All rights reserved.</div>
                <div >
                    <Image src="/1.png" width={15} height={15} alt="Key-Web Facebook Account" />
                    <Image src="/2.png" width={15} height={15} alt="Key-Web " />
                    <Image src="/3.png" width={15} height={15} alt="Key-Web " />
                    <Image src="/4.png" width={15} height={15} alt="Key-Web " />
                </div>
            </div>
        </div>
    );
};

export default Footer;