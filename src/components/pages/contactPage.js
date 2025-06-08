import React, { useEffect, useState } from 'react'
import TitleBar from '../title-txt'
import { Alert, CircularProgress, LinearProgress, Snackbar } from '@mui/material'
import PetAnimationLoader from '../PetAnimationLoader'

export default function ContactPage() {
	const [formData, setFromData] = useState({
		name: '',
		email: '',
		massage: '',
	})
	const [dataUploadeStatus, setDataUploadeSatus] = useState(false)
	const [serverResStatus, setServerResStatus] = useState(false)
	const [serverMsg, setServerMsg] = useState('')
	const [mapStatus, setMapStatus] = useState(false)
	const [userMsgStatus, setUserMSgStatus] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setMapStatus(true)
		}, 5000)
	}, [])

	useEffect(() => {
		setTimeout(() => {
			if (userMsgStatus == true) {
				setUserMSgStatus(false)
			}
		}, 4000)
	}, [userMsgStatus])

	function formatDate() {
		const date = new Date()
		const hours = date.getHours()
		const minutes = date.getMinutes()
		const ampm = hours >= 12 ? 'PM' : 'AM'
		const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
			.toString()
			.padStart(2, '0')}/${date.getFullYear()}`
		const formattedTime = `${hours % 12 === 0 ? 12 : hours % 12}:${minutes
			.toString()
			.padStart(2, '0')} ${ampm}`

		return `${formattedDate}, ${formattedTime}`
	}

	async function handleSubmit(res) {
		const { name, email, massage } = formData
		if (name == '' || email == '') {
			// alert('please fill up required data!')
			setUserMSgStatus(true)
		} else {
			const emailCondition = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')
			const emailStatus = emailCondition.test(email)
			if (emailStatus) {
				try {
					setDataUploadeSatus(true)
					const currentDate = formatDate()
					let result = await fetch(
						`https://script.google.com/macros/s/AKfycbyh2bCzV8WOzyu5QUdC2319dkQ90SruuOVhFWQhsYonazxCaUmwT-SYVfBFg47j3yGD4A/exec?first=${name}&email=${email}&message=${massage}&date=${currentDate}`
					)
					let output = await result.text()
					if (typeof output == 'string') {
						setDataUploadeSatus(false)
						setServerResStatus(true)
						setTimeout(() => {
							setServerResStatus(false)
						}, 5000)
						setServerMsg('Your Details Received Successfully')
					}
				} catch (err) {
					setDataUploadeSatus(false)
					setServerResStatus(true)
					setTimeout(() => {
						setServerResStatus(false)
					}, 5000)
					setServerMsg('Data Not Save Succefully try again')
				}
			} else {
				alert('Please Enter Valid Email')
			}
		}
		console.log(formData)
	}

	function handleChanges(res) {
		setFromData({ ...formData, [res.target.name]: res.target.value })
	}

	return (
		<section className='px-10 py-7 text-white'>
			{userMsgStatus && userMsgStatus == true ? (
				<Alert
					className='border border-red-400 absolute left-0 top-0 w-11/12 sm:w-3/12 sm:left-auto ms-3 sm:ms-52'
					severity='warning'>
					Please Fill Up Required Data!
				</Alert>
			) : (
				''
			)}

			<TitleBar titleTxt={'Contact'} />
			<div className='mt-4 rounded-lg overflow-hidden'>
				{/* {mapStatus != true ? <LinearProgress color='secondary' /> : ''} */}
				{/* {mapStatus != true ?  : ''} */}
				{mapStatus == false ? (
					<PetAnimationLoader />
				) : (
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79400671698!2d74.15646588457899!3d16.70845223339603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1732965493452!5m2!1sen!2sin'
						width='600'
						height='247'
						style={{ border: '0' }}
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						className={`w-full display-${mapStatus == false ? 'hidden' : 'block'}`}
					/>
				)}
			</div>
			<div></div>
			<div className='mt-10 flex flex-col'>
				<h2 className='text-3xl font-semibold'>Contact Form</h2>
				<form className='max-w-full grid grid-cols-2 mt-3 p-3'>
					<div className='relative z-0 w-9/12 mb-5 group'>
						<input
							type='email'
							name='name'
							id='floating_email'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							onChange={handleChanges}
							required
						/>
						<label
							htmlFor='floating_email'
							className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Name*
						</label>
					</div>

					<div className='relative z-0 w-9/12 mb-5 group'>
						<input
							type='email'
							name='email'
							id='floating_email'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							onChange={handleChanges}
							required
						/>
						<label
							htmlFor='floating_email'
							className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Email*
						</label>
					</div>

					<div className='relative z-0 w-9/12 mb-5 group'>
						<textarea
							name='massage'
							id='floating_email'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							onChange={handleChanges}></textarea>
						<label
							htmlFor='floating_email'
							className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Massage
						</label>
					</div>
				</form>
				<div className='flex justify-center p-2'>
					{dataUploadeStatus == true ? (
						<CircularProgress size='20px' />
					) : (
						<button
							className='relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group'
							onClick={handleSubmit}>
							<span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4'>
								<span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
							</span>
							<span className='absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4'>
								<span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
							</span>
							<span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0'></span>
							<span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white'>
								Send Me
							</span>
						</button>
					)}
				</div>
			</div>
			<Snackbar
				open={serverResStatus}
				message={serverMsg}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}></Snackbar>
		</section>
	)
}
