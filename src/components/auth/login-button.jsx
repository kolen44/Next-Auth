'use client'
import {useRouter} from 'next/navigation'

export default function LogginButton({children, mode}){
	const router = useRouter()
	const onClick = () => {
		router.push('/auth/login')
	}
	if(mode=='modal'){
		return(
			<span>
				TODO: Implement modal
			</span>
		)
	}
	return(
		<span className='cursor-pointer' onClick={onClick}>
			{children}
		</span>
	)
}