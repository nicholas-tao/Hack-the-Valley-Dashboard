import React from 'react';
import Slider from '../..';
import customCss from '../custom.css';
import content from '../content';

function Custom() {
	return (
		<div>
			<Slider classNames={customCss}>
				{content.map((item, index) => (
					<div
						key={index}
						className={customCss.sliderContent}
						style={{ background: `black` }}
					>
						<div className={customCss.inner}>
							<h1>Songs in Common</h1>
							<p>{item.songsInCommon}</p>
							
							<button onclick="window.location.href = '{item.userProfile}';">View Profile</button>
						</div>
						<section>
							<img src={item.userProfile} alt={item.user} />
							<span>
								<strong1>{item.score}% Match</strong1>
								<strong>{item.user}</strong>
							</span>
						</section>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Custom;
