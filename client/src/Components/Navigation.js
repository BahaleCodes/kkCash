import React from 'react';

const Navigation = (props) => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'
					>
						{' '}
						<span className='sr-only'>Toggle navigation</span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
					</button>
					<div className='nav-icons'>
						<a className='navbar-brand page-scroll' href='/'>
							<div className="nav-pic">
								<img alt="Company Logo" className="img" src="img/icon.jpg" />
							</div>
						</a>{' '}
						<div className='row'>
							<div className='social'>
								<ul>
									<li>
										<a href={props.data ? props.data.facebook : '/'}>
											<i className='fa fa-facebook'></i>
										</a>
									</li>
									<li>
										<a href={props.data ? props.data.instagram : '/'}>
											<i className='fa fa-instagram'></i>
										</a>
									</li>
									<li>
										<a href={props.data ? props.data.twitter : '/'}>
											<i className='fa fa-twitter'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

				</div>
				<div
					className='collapse navbar-collapse'
					id='bs-example-navbar-collapse-1'
				>
					<ul className='nav navbar-nav navbar-right'>
						<li>
							<a href='/how-it-works' className='page-scroll'>
								How It Works
							</a>
						</li>
						<li>
							<a href="/contact" className='page-scroll'>
								Contact
							</a>
						</li>
						<li>

						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navigation;