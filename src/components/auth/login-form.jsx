'use client'
import CardWrapper from './card-wrapper'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { LoginSchema } from '../../../schemas'
import {Input} from '@/components/ui/input'
import {Button} from '../ui/button'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'

export default function LoginForm(){
	const form = useForm({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		}
	})

	const onSubmit = (values) => {
		console.log(values)
	}

	return(
		<CardWrapper 
			showSocial={true} 
			headerLabel={'Welcome back'}
			backButtonHref="/auth/register"
			backButtonLabel={`Don't have an account?(`}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6'
				>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='email'
							render={({field, }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input 
											{...field}
											placeholder='pups@gmail.com'
											type='email'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>

						<FormField
							control={form.control}
							name='password'
							render={({field, }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input 
											{...field}
											placeholder='1234qwerty'
											type='password'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						>
						</FormField>
					</div>
					<Button
						type='submit'
						className='w-full'
					>
						Login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	)
}