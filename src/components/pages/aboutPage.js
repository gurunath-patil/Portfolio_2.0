import React from 'react'
import TitleBar from '../title-txt'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import "./pages-style.css"
import webStructure from '../../assets/web.svg'
import CodeIcon from '../../assets/code.svg'
import backendIcon from '../../assets/storage.svg'

export default function AboutPage() {
	const doingData = [
		{
			imgVar: webStructure,
			title: 'Web Design',
			description: 'The most modern and high-quality design made at a professional level.',
		},
		{
			imgVar: CodeIcon,
			title: 'Web Development',
			description: 'High-quality development of sites at the professional level.',
		},
		{
			imgVar: backendIcon,
			title: 'API Development',
			description: 'Professional development of backend for web site and smart Phone.',
		},
	]
	return (
		<div className='px-10 py-7 text-white' id="about-container">
			<TitleBar titleTxt={'About me'} />
			<section className='py-4 flex flex-col gap-3 text-xs md:text-lg text-justify lg:text-lg lg:pb-7 education-txt tracking-wider'>
				<p>
					I’m a web developer with a Master’s degree in Computer Science, and I love building
					websites and applications that are easy to use and look great.
				</p>
				<p>
					My job is to build your website so that it is functional and user-friendly but at the same
					time attractive. Moreover, I add personal touch to your product and make sure that is
					eye-catching and easy to use. My aim is to bring across your message and identity in the
					most creative way. I created web design for many famous brand companies.
				</p>
			</section>
			<section>
				<h2 className='text-base md:text-2xl lg:text-2xl font-semibold p-3' id="whatI-Did-txt">What I'm Doing</h2>
				<div className='flex flex-wrap lg:flex-row md:flex-col lg:justify-start lg:gap-x-16 md:gap-x-10 md:justify-center gap-y-5 md:gap-y-10 lg:gap-y-11 p-4'>
					{doingData.map((item,index) => {
						return (
							<div className='w-full md:w-11/12 lg:w-5/12' key={index}>
								<CardComponent imgURL={item.imgVar} title={item.title} desc={item.description} />
							</div>
						)
					})}
				</div>
			</section>
		</div>
	)
}

function CardComponent(prop) {
	return (
		<Card sx={{height:'100%',backgroundColor:'#1B1A55',color:'white'}} id="card-container">
			<CardActionArea sx={{ display: 'grid', gridTemplateColumns: '30% 70%' }}>
				<CardMedia
					component='img'
					height='140'
					sx={{ width: '70%', margin: 'auto auto' }}
					image={prop.imgURL}
					alt='logo'
				/>
				<CardContent>
					<Typography sx={{color:'#FFE31A',fontWeight:'bold'}} variant='h6' component='div' id="card-title">
						{prop.title}
					</Typography>
					<Typography variant='body2' sx={{ color: '#FEF3E2' }} id="card-description">
						{prop.desc}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
