import { Avatar, Box } from '@mui/material'
import React from 'react'
import PersonalDetails from './personalDetails'
import ContactDetails from './contactDetails'

export default function SideMenuConatiner() {
	const logoDetails = [
		{
			URL: 'https://static.cdnlogo.com/logos/l/66/linkedin-icon.svg',
			networkName: 'Linkedin',
			accountURL: 'https://www.linkedin.com/in/gurunath-patil/',
		},
		{
			URL: 'https://static.cdnlogo.com/logos/g/69/github-icon.svg',
			networkName: 'Github',
			accountURL: 'https://github.com/gurunath-patil',
		},
		{
			URL: 'https://static.cdnlogo.com/logos/t/96/twitter-icon.svg',
			networkName: 'Twitter',
			accountURL: 'https://x.com/Gurunath861',
		},
	]
	return (
		<Box className='bg-[#0b192c] rounded-lg md:grid md:grid-cols-[350px_80px_1fr] md:py-4 lg:flex lg:flex-col lg:gap-y-4 lg:w-4/12 xl:w-4/12'>
			<PersonalDetails />
			<div className='px-3 w-full lg:row-start-2 lg:row-end-3 lg:px-6'>
				<div className='md:h-64 lg:h-0 lg:w-full md:w-px h-0 w-full border border-stone-400 sm:w-11/12 mb-2 sm:mb-0'></div>
			</div>
			<div className='max-h-full lg:row-start-3 lg:row-end-4 xl:flex xl:justify-center'>
				<ContactDetails className='md:col-start-2' />
			</div>

			<div className='lg:row-start-4 md:w-[45rem] lg:w-full'>
				<div className='w-full flex justify-around md:justify-center md:gap-x-16 md:items-end lg:justify-center flex-wrap lg:gap-x-7 lg:py-3 py-4 sm:pb-0'>
					{logoDetails &&
						logoDetails.map((item, index) => {
							return (
								<a href={item.accountURL} target='_blank' key={index}>
									<button className='group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#3E3F5B] text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:from-[#331029] hover:to-[#310413]'>
										<img
											className='w-7'
											// stroke='currentColor'
											fill='currentColor'
											strokeWidth='0'
											viewBox='0 0 448 512'
											height='1.1em'
											width='1em'
											src={item.URL}
											alt={item.networkName}
										/>
										<span className='absolute opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:text-md group-hover:-translate-y-10 duration-500'>
											{item.networkName}
										</span>
									</button>
								</a>
							)
						})}
				</div>
			</div>
		</Box>
	)
}
