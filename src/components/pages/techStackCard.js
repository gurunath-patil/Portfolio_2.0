import React from "react"

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
	]

    
	return (
		<>
			{techStackData &&
				techStackData.map((item, index) => {
					return (
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
					)
				})}
		</>
	)
}