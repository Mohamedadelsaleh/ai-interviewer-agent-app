'use client'

import { Button } from '@/components/ui/button';
import { Plus, Video } from 'lucide-react';
import React, { useState } from 'react'

function LatestInterviews() {

    const [interviewList, setInterviewList] = useState([]);

  return (
    <div className='my-5'>
        <h2 className='text-2xl font-bold'>Previously Created Interviews</h2>
        {interviewList.length === 0 &&  (
            <div className='p-5 flex flex-col gap-4 items-center mt-5 bg-white rounded-xl'>
                <Video className='w-10 h-10 text-primary'/>
                <h2 className='text-lg font-bold'>No Interviews Created Yet</h2>
                <Button className='cursor-pointer'> <Plus /> Create New Interview</Button>
            </div>    
        )}
    </div>
  )
}

export default LatestInterviews