import { Box } from '@mui/material'
import React from 'react'
import myProfile from '../../assets/my-avatar.png'
import './styles.css'

export default function PersonalDetails() {
	return (
		<Box id="presonal-details-box">
			<div className='flex justify-center items-center flex-wrap'>
				<div className='sm:w-max w-fit overflow-hidden rounded-3xl flex justify-center items-center' id="profile-box">
					<img src={myProfile} alt='profile emoji' 
                    className='sm:w-8/12 md:w-6/12 w-6/12'/>
				</div>
			</div>

			<div className='lg:p-2 text-xl lg:text-3xl md:text-2xl font-semibold flex justify-center flex-wrap lg:items-center'>
				<h2 className='font-mono tracking-wide'>Gurunath Patil</h2>
			</div>

			<div className='flex justify-center flex-wrap'>
				<h4 className='p-1 lg:px-3 sm:text-base text-xs text-black font-semibold rounded-md ' id="job-title-box">Web Developer</h4>
			</div>
		</Box>
	)
}
