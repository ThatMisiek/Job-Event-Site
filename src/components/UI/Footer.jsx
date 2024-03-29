import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					If you want to made an event and need best sound experiance, you are
					in right place !
				</p>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>About Me</h2>
						<Link to='/'>How it works</Link>
						<Link to='/'>Testimonials</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Terms of Service</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Contact Us</h2>
						<Link to='/'>Contact</Link>
						<Link to='/'>Support</Link>
						<Link to='/'>Destinations</Link>
						<Link to='/'>Sponsorships</Link>
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Videos</h2>
						<Link to='/'>Submit Video</Link>
						<Link to='/'>Ambassadors</Link>
						<Link to='/'>Agency</Link>
						<Link to='/'>Influencer</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Social Media</h2>
						<Link to='/'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						<Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link>
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>				
					<small className='website-rights'>Hire Sound Engineer © 2023</small>
					<div className='social-icons'>
						<Link
							className='social-icon-link facebook'
							to='/'
							target='_blank'
							aria-label='Facebook'>
							<i className='fab fa-facebook-f' />
						</Link>
						<Link
							className='social-icon-link instagram'
							to='/'
							target='_blank'
							aria-label='Instagram'>
							<i className='fab fa-instagram' />
						</Link>
						<Link
							className='social-icon-link youtube'
							to='/'
							target='_blank'
							aria-label='Youtube'>
							<i className='fab fa-youtube' />
						</Link>
						<Link
							className='social-icon-link twitter'
							to='/'
							target='_blank'
							aria-label='Twitter'>
							<i className='fab fa-twitter' />
						</Link>
						<Link
							className='social-icon-link linkedin'
							to='/'
							target='_blank'
							aria-label='LinkedIn'>
							<i className='fab fa-linkedin' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
