import React from 'react';


function page() {
	return (
		<div>
			<h2>My Requests</h2>
			{/*  */}
			<div>
				Request 1
				
				<button className='py-2 px-5 bg-blue-500 rounded-lg' type='button'>Cancel request</button>
			</div>
			{/*  */}
			<div>
				Request 2
			</div>
			{/*  */}
			<button className='py-2 px-5 bg-blue-500 rounded-lg' type='button'>Request More</button>
		</div>
	);
}

export default page;