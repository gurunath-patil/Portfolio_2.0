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
			name: 'Boostrap',
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
						<div class='div h-[6em] w-[7em] sm:w-[12rem] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0'>
							<div class='circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op'></div>
							<div class='flex gap-3 items-center h-full align-center z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]'>
								<div class=''>
									<img class='h-16 w-10 sm:w-full' src={item.LogoURL} />
								</div>
								<h2 class='sm:text-3xl text-sm text-black sm:text-white'>{item.name}</h2>
							</div>
						</div>
					)
				})}
		</>
	)
}

/*  previous tech skills card code that show water waves ----
<div className='card' key={index}>
	<div className='wave'></div>
	<div className='wave'></div>
	<div className='wave'></div>
	<div className='content'>
		<div>
			<img src={item.LogoURL} alt='logo' className='languages-card-img' />
		</div>
		<span className='text-stone-300 hover:text-lime-300 text-sm md:text-xl lg:text-xl font-bold'>
			{item.name}
		</span>
	</div>
</div>
*/