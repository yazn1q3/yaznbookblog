"use client";

import NavigationMenuDemo from '@/components/header'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import {  LinkIcon } from 'lucide-react';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



export default function Home() {
  return (
    <main >
   <NavigationMenuDemo />
   <div className='h-[100%] p-5' >
    <div className='flex p-2 items-center' >
 <Label> Yaznbook Ai</Label>
<Badge className='m-1' >Coming soon...</Badge>


</div>
<Label className='text-[29px]'>Yaznbook Ai</Label>
<br />
<br />
<Skeleton className='w-[100%] h-10 m-2' />
<Skeleton className='w-[80%] h-8 m-2' />
<Skeleton className='w-[50%] h-6 m-2' />

<div className='h-2' />
<HoverCard>
  <HoverCardTrigger><Button variant="outline" >Join Whitelist</Button></HoverCardTrigger>

  <HoverCardContent>
  Successfully
  </HoverCardContent>
</HoverCard>
   </div>


   <div className='h-[100%] p-5' >
    <div className='flex p-2 items-center' >
 <Label> Yaznbook a Note App</Label>
<Badge className='m-1' >New</Badge>


</div>
<div className="flex">
<LinkIcon className='h-[20px] w-[20px] m-1 text-blue-700' /> <Link href='https://www.yaznbook.com' className='  text-blue-700 underline'>https://www.yaznbook.com</Link>
</div>

<div className='h-2' />
<Button variant="outline" >Make a note</Button>
   </div>
   <div className='h-[25em] p-5 w-[100%] ' >
    <div className='flex p-2 items-center' >
 <Label> Doucment By Doucment</Label>
<Badge className='m-1' >New</Badge>


</div>
<div className="flex">

</div>

<div className='h-2' />
<img src="https://images.alphacoders.com/127/thumbbig-1271701.webp" className='w-97% h-[19em] rounded-[20px] p-2' />


<Label className='p-3' >
  Live for Yaznbook features,

</Label>

   </div>

 
    </main>
  )
}
