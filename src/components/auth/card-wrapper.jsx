'use client'
import Header from '@/components/auth/header'
import Social from './social'
import BackButton from './back-button'
import {Card, CardHeader, CardFooter, CardContent} from '.././ui/card'
export default function CardWrapper({children, headerLabel, backButtonLabel, backButtonHref, showSocial}){
	return(
		<Card className='w-[400px] shadow-md'>
			<CardHeader>
				<Header label={headerLabel}/>
			</CardHeader>
			<CardContent>
				{children}
			</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton 
					label={backButtonLabel}
					href={backButtonHref}
				/>
			</CardFooter>
		</Card>
	)
}