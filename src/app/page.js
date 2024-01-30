import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {Poppins} from 'next/font/google'
import LogginButton from '@/components/auth/login-button.jsx'

const font = Poppins({
    subsets: ["latin-ext"],
    weight: ["600"]
})

export default function Home() {
  return (
    <div className='flex h-full flex-col items-center justify-center bg-sky-500'>
        <div className='space-y-600 text-center'>
            <p className={cn(
                'drop-shadow-md text-white font-semibold text-6xl',
                font.className
            )}>
                Simple auth
            </p>
            <p className='text-white'>simple auth service</p>
            <LogginButton>
                <Button variant='secondary' size='lg'>
                    Sign in
                </Button>
            </LogginButton>

        </div>
    </div>
  )
}