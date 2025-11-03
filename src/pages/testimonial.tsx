import React from 'react'
import { Card ,CardHeader , CardContent} from '@/components/ui/card'





const testimonial = () => {



  return (
    <div className='p-24 min-h-screen'>
      <div className='grid grid-cols-3'>
        <Card>
            <CardHeader className='flex text-4xl font-semibold'>
                    250 +
                    <br /> <span className='text-xl'>Client</span>
            </CardHeader>
            <CardContent className='font-delius'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate ex architecto quae quas dolor nisi magni est ratione id.
            </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default testimonial
