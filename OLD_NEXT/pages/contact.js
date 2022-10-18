import React from 'react';
import { useState, useEffect } from 'react';
import Loader from "./components/Loader";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';


export default function Contact() {

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 6000);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Head>
                <title>BENADJAL DRISS PORTFOLIO</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className='contact'>
                <div className='container-contact'>
                    <div className='contact-text'>
                        <h1>CONTACT ME</h1>
                        <p>
                            If you have any questions or want to work together, please feel free to contact me.
                        </p>
                    </div>
                    <div className='contact-form'>
                        <form action="https://formspree.io/xqjqxqjq" method="POST">
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type={'text'} name="subject" placeholder="Subject" />
                            <textarea name="message" placeholder="Message" rows="10"></textarea>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}