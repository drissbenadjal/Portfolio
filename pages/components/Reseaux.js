import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Reseaux() {
  return (
    <>
      <div className='reseaux'>
          <ul>
              <Link href="https://www.linkedin.com/in/driss-benadjal/"><li><a target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li></Link>
              <Link href="https://instagram.com/driss_benadjal"><li><a target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li></Link>
              <Link href="https://twitter.com/driss_benadjal"><li><a target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li></Link>
          </ul>
      </div>
    </>
  )
}
