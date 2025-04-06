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
		<Box id='sideMenu-box'>
			<PersonalDetails />
			<div id='hr-box'>
				<div className='border border-stone-400 sm:w-11/12'></div>
			</div>
			<ContactDetails />

			<div
				className='w-full flex justify-around md:justify-center md:gap-x-16 md:items-end lg:justify-center flex-wrap lg:gap-x-7 lg:py-3'
				id='social-media-container'>
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
		</Box>
	)
}

