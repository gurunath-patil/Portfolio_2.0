import React, { Suspense, lazy } from 'react'
import TitleBar from '../title-txt'
import './pages-style.css'
import {
	Timeline,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
} from '@mui/lab'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import { Button, CircularProgress, createTheme } from '@mui/material'
const TechStackCardPreview = lazy(() => import("./techStackCard"))

export default function ResumePage() {
	const experinceArr = [
		{
			companyName: 'Incrust Software Pvt. Ltd, Pune',
			date: 'Feb 2025 - Present',
			role: 'Full Stack Developer',
		},
		{
			companyName: 'Compserv Private LTD, Kolhapur',
			date: 'Sep 2023 - Sep 2024',
			role: 'Full Stack Developer Intern',
		},
	]

	const educationArr = [
		{
			collegeName: 'D Y Patil Agriculture & Technical College, Kolhapur',
			course: "Master's Of Computer Application (MCA)",
			date: 'Jun 2022 - Jun 2024',
		},
		{
			collegeName: 'Shivaji University, Kolhapur',
			course: "Bachelor's Of Computer Science (BCS)",
			date: 'Jun 2019 - Jun 2022',
		},
		{
			collegeName: 'Private High School & Jr. College, Kolhapur',
			course: 'HSC (12th)',
			date: 'Jun 2017 - Jun 2019',
		},
		{
			collegeName: 'Shahu Public School, Kolhapur',
			course: 'SSC (10th)',
			date: 'Jun 2016 - Jun 2017',
		},
	]
	return (
		<section className='px-10 py-7 text-white'>
			<TitleBar titleTxt={'Resume'} />

			{/* technical skill section start */}
			<div className='mt-5 md:mt-10'>
				<div className='flex pb-2 gap-x-3'>
					<ResumeInnerTitles
						titleData={{
							logoURL:
								'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25',
							txt: 'Tech Stack',
						}}
					/>
				</div>
				<div
					className='h-64 overflow-y-scroll w-full p-2 grid grid-cols-2 md:grid-cols-5 md:gap-y-7 lg:grid-cols-6 gap-x-5 gap-y-10 scroll-bar-style'
					id='techStack-card-container'>
					<Suspense fallback={<CircularProgress/>}>
						<TechStackCardPreview />
					</Suspense>
				</div>
			</div>
			{/* technical skill section end */}

			<div id='experince-education-box' className=''>
				{/* Experience section Start */}
				<div className=''>
					<div className='flex gap-x-3 py-2'>
						<ResumeInnerTitles
							titleData={{
								logoURL:
									'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z',
								txt: 'Experience',
							}}
						/>
					</div>
					<div className=''>
						<Timeline
							sx={{
								[`& .${timelineItemClasses.root}:before`]: {
									flex: 0,
									padding: 0,
								},
							}}>
							{experinceArr.map((item, index) => {
								return (
									<TimelineItem sx={{ width: '100%', paddingLeft: '1rem' }} key={index}>
										<TimelineSeparator>
											<TimelineDot color={index === 0 ? 'success' : 'error'} />
											{/* <TimelineConnector /> */}{' '}
											{/* commentout when more then one companys you have */}
										</TimelineSeparator>
										<TimelineContent>
											{item.companyName}
											<br />
											<span className="text-[#96A78D]">{item.role}</span>
											<br />
											<span className='text-neutral-400'>{item.date}</span>
										</TimelineContent>
									</TimelineItem>
								)
							})}
						</Timeline>
					</div>
				</div>

				{/* eduction section Start */}
				<div className='h-64'>
					<div className='flex gap-x-3 py-2'>
						<ResumeInnerTitles
							titleData={{
								logoURL:
									'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5',
								txt: 'Education',
							}}
						/>
					</div>
					<div className='overflow-scroll overflow-x-hidden h-52 md:h-96 lg:h-52 scroll-bar-style'>
						<Timeline>
							{educationArr.map((item, index) => {
								return (
									<TimelineItem position='alternate' key={index}>
										<TimelineSeparator>
											<TimelineDot color='warning' />
											<TimelineConnector />
										</TimelineSeparator>
										<TimelineContent>
											<span className='education-txt'>{item.course}</span>
											<br />
											<span className='text-neutral-300 education-txt'>{item.collegeName}</span>
											<br />
											<span className='text-neutral-400 education-txt'>{item.date}</span>
										</TimelineContent>
									</TimelineItem>
								)
							})}
						</Timeline>
					</div>
				</div>
			</div>
		</section>
	)
}

function ResumeInnerTitles(prop) {
	const { logoURL, txt } = prop.titleData
	return (
		<>
			<div className=''>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='yellow'
					className='size-7'>
					<path strokeLinecap='round' strokeLinejoin='round' d={logoURL} />
				</svg>
			</div>
			<h2 className='text-lg font-semibold'>{txt}</h2>
		</>
	)
}
