"use client";

import NavigationMenuDemo from '@/components/header'

import { Label } from '@/components/ui/label';


const docs =() => {
  return (
    <main >
   <NavigationMenuDemo />
   <div className='h-[100%] p-5' >
    <div className='flex p-2 items-center' >
 <Label> Yaznbook</Label>


</div>
<Label className='text-[29px]'>Wolcome Bloger Yazn</Label>
<br />
<br />


<div className='h-2' />

   </div>

   <div className='h-[100%] p-5' >
    <div className='flex p-2 items-center' >
 <Label> Yazn Albalawi</Label>


</div>
<Label className='text-[29px]'>i am Here Vilger "بجده"</Label>
<br />
<br />
<img src="wow.jpeg" className="    w-[15em] h-[19em] rounded-[19px]" />

<div className='h-2' />

   </div>




 
    </main>
  )
}

export default docs;