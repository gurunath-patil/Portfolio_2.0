import React, { useEffect, useState } from 'react'
import './pages-style.css'
import TitleBar from '../title-txt'
import { Button, Card, CardContent, CardMedia, Divider, Skeleton, Typography } from '@mui/material'
import { PortfolioCardSkeleton } from '../customSkeleton'

export default function PortfolioPage() {
	const projectDetails = [
		{
			projectName: 'Nandan Dairy ERP',
			imgURL: 'https://www.baramatidoodhsangh.com/new/Home%20Page%20Display-1.webp',
			status: false,
			sourceURL: null,
		},
		{
			projectName: 'Bways ERP',
			imgURL: 'https://compservtech.com/site/assets/files/1425/bways_erp_logo.png',
			status: false,
			sourceURL: null,
		},
		{
			projectName: 'Bloging Website',
			sourceURL: 'https://github.com/gurunath-patil/blog-website',
			status: true,
			imgURL:
				'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			projectName: 'Weather Forcast',
			sourceURL: 'https://weather-forcast-nu.vercel.app/',
			status: true,
			imgURL:
				'https://images.pexels.com/photos/29034990/pexels-photo-29034990/free-photo-of-serene-mountain-view-above-sunrise-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			projectName: 'QR Code Generater',
			sourceURL: 'https://generate-qr-code-omega.vercel.app/',
			status: true,
			imgURL:
				'https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	]

	const [timerFlag, setTimerFlag] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setTimerFlag(false)
		}, 4000)
	}, [])
	if (timerFlag == true) {
		return (
			<section className='px-10 py-7 text-white'>
				<TitleBar titleTxt={'Portfolio'} />
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 mt-10'>
					{projectDetails.map((item, index) => {
						return <PortfolioCardSkeleton key={index}/>
					})}
				</div>
			</section>
		)
	} else {
		return (
			<section className='px-10 py-7 text-white'>
				<TitleBar titleTxt={'Portfolio'} />
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10'>
					{projectDetails.map((item, index) => {
						return <ProjectCard data={item} key={index} />
					})}
				</div>
			</section>
		)
	}
}

function ProjectCard(prop) {
	const { projectName, imgURL, status, sourceURL } = prop.data
	return (
		<Card sx={{ maxWidth: 280 }}>
			<CardMedia sx={{ height: 126 }} image={imgURL} title={projectName} component='img' />
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2px',
					justifyContent: 'start',
					alignItems: 'start',
				}}>
				<Typography variant='h5' component='div'>
					{projectName}
				</Typography>
				{status == true ? (
					<Button variant='contained' size='small' href={sourceURL} target='_blank'>
						Link
					</Button>
				) : (
					<Button variant='contained' size='small' href={sourceURL} disabled>
						Link
					</Button>
				)}
			</CardContent>
		</Card>
	)
}
