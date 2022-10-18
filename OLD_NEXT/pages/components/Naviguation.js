import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";


export default function Naviguation() {

    useEffect(() => {
        window.onscroll = function() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.querySelector("nav").classList.add("navbar-scrolled");
            } else {
                document.querySelector("nav").classList.remove("navbar-scrolled");
            }
        }
    });

  return (
    <nav>
        <ul className='left'>
            <Link href="/">
                <li><h2>D<span>BENADJAL</span></h2></li>
            </Link>
        </ul>
        <ul className='mid'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/"><li>About</li></Link>
            <Link href="/"><li>Skills</li></Link>
            <Link href="/"><li>Projets</li></Link>
        </ul>
        <ul className='right'>
            <Link href="/contact"><li>Contact me</li></Link>
        </ul>
    </nav>
  )
}
