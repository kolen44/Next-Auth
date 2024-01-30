'use client'
import {Card, CardHeader, CardFooter, CardContent} from '.././ui/card'
export default function CardWrapper({children, headerLabel, backButtonLabel, backButtonHref, showSocial}){
	return(
		<Card className='w-[400px] shadow-md'>
			{children}
		</Card>
	)
}