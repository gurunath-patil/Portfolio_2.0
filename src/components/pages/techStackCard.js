import React from 'react'

export default function TechStackCard() {
	// const { LogoURL, name } = prop.cardData

	const techStackData = [
		{
			LogoURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
			name: 'HTML5',
		},
		{
			LogoURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
			name: 'CSS3',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
			name: 'JavaScript',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
			name: 'TypeScript',
		},
		{
			LogoURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
			name: 'React JS',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
			name: 'Angular',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
			name: 'Node Js',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
			name: 'Express JS',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
			name: 'Bootstrap',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
			name: 'Tailwind',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
			name: 'SQL Server',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
			name: 'MongoDb',
		},
		{
			LogoURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
			name: 'Redux',
		},
		{
			LogoURL:
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
			name: 'Python',
		},
		{
			LogoURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
			name: 'Vue JS',
		},
	]

	return (
		<>
			{techStackData &&
				techStackData.map((item, index) => {
					return (
						<div className='flex flex-wrap gap-6 justify-center items-center' key={index}>
							<label className='text-gray-400 cursor-pointer'>
								<div className='group flex flex-col gap-4 w-28 sm:w-32 sm:h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-indigo-500 hover:shadow-indigo-500/20 peer-checked:border-indigo-500 peer-checked:from-indigo-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]'>
									<div className='relative'>
										<div className='w-12 h-12 mx-auto bg-indigo-500/20 rounded-lg border-2 border-indigo-500/40 group-hover:border-indigo-400 group-hover:bg-indigo-500/30 peer-checked:border-indigo-400 peer-checked:bg-indigo-500/30 transition-all duration-300'>
											<div className='flex flex-col gap-1 p-2'>
												<img className='w-10 sm:w-full' src={item.LogoURL} />
											</div>
										</div> 
									</div>

									<div className='text-center'>
										<p className='font-medium text-sm group-hover:text-indigo-400 peer-checked:text-indigo-400 transition-colors duration-300'>
											{item.name}
										</p>
									<div className='h-1 w-0 bg-indigo-500 rounded-full mx-auto group-hover:w-6/12 peer-checked:w-full transition-all duration-300'></div>
									</div>
								</div>
							</label>
						</div>
					)
				})}
		</>
	)
}

