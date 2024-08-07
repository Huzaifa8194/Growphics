import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='/' className="cs-center border-black">
        <Icon icon="fa6-brands:linkedin-in" className='text-black' />
      </Link>
      <Link href='/' className="cs-center border-black">
        <Icon icon="fa6-brands:twitter" className='text-black'/>               
      </Link>
      <Link href='/' className="cs-center border-black">
        <Icon icon="fa6-brands:youtube" className='text-black'/>              
      </Link>
      <Link href='/' className="cs-center border-black">
        <Icon icon="fa6-brands:slack" className='text-black'/>
      </Link>
    </Div>
  )
}
