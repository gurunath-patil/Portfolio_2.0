import { Avatar, Box } from '@mui/material'
import React from 'react'
import PersonalDetails from './personalDetails'
import ContactDetails from './contactDetails'
import { logoURL } from './sideMenu.interfaces'

export default function SideMenuConatiner() {
	const logoDetails: Array<logoURL> = [
		{
			URL: 'https://static.cdnlogo.com/logos/l/66/linkedin-icon.svg',
			networkName: 'linkedin',
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

			<div className='w-full flex justify-around md:justify-center md:gap-x-16 md:items-end lg:justify-center flex-wrap lg:gap-x-7 lg:py-3' id="social-media-container">
				{logoDetails &&
					logoDetails.map((item,index) => {
						return (
							<a href={item.accountURL} target='_blank' key={index}>
								<Avatar
									alt={item.networkName}
									src={item.URL}
									sx={{
										opacity: '0.9',
										backgroundColor: 'white',
									}}
								/>
							</a>
						)
					})}
			</div>
		</Box>
	)
}
