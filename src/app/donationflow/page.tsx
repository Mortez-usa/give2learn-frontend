'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../nav/Nav.tsx';
import './donationForm.css'

export default function Page() {

	const [submitted, setSubmitted] = useState(false);

	const url = 'https://give2learn-backend.onrender.com/donations';
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		fromState: '',
		fromCity: '',
		address1: '',
		address2: '',
		zipCode: '',
		deviceType: '',
		isPC: '',
		brand: '',
		modelType: '',
		quantityToDonate: '',
		isPicked: '',
		donateDate: ''
	});
	
function handleChange(e) {
	const newData = { ...data };
	newData[e.target.id] = e.target.value;
	setData(newData);
	console.log(data);
}

	 async function handleSubmit(e) {
		e.preventDefault();
		await axios.post(url, data);
		setSubmitted(true);
	}

	return (
		<div>
			<Nav />
			<div className='px-20 bg-g2l-pale-yellow'>
				<p className='pl-0 p-10'>
					<Link href='/'>&lt; Back to homepage</Link>
				</p>
				{/* <h1 className='text-lg font-bold'>Device Donations</h1> */}
				<div className='progressbar flex items-center w-80 h-1 mr-80 mb-5 mt-5 justify-between bg-gray-200 rounded-full z-0'>
					<div className='bg-blue-800 text-white progressbar-step flex w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
						1
					</div>
					<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
						2
					</div>
					<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
						3
					</div>
					<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
						4
					</div>
				</div>
				<form
					className='p-10'
					onSubmit={handleSubmit}
					method='post'
					action='POST'>
					<div className='visible flex flex-col gap-4'>
						<h3 className='mb-12 font-bold text-md'>
							Donate a Device
						</h3>

						<div className='grid'>
							<label className='font-bold text-md' htmlFor='deviceType'>
								Choose a device you'd like to donate
							</label>
							<div className='flex gap-8'>
								<select
									onChange={(e) => handleChange(e)}
									value={data.deviceType}
									className='mr-7'
									name='deviceType'
									id='deviceType'
									required>
									<option value='' selected></option>
									<option>Desktop</option>
									<option>Tablet</option>
									<option>Laptop</option>
								</select>
							</div>
						</div>

						<label className='font-bold text-md' htmlFor='isPC'>
							Please provide the device's information
						</label>
						{/* <p>3 of 3 steps</p> */}
						<div className='device-information-section'>
							<label className='mr-2' htmlFor='Device info'>
								PC or MAC
							</label>
							<select
								onChange={(e) => handleChange(e)}
								value={data.isPC}
								className='mr-7'
								name='isPC'
								id='isPC'
								required>
								<option value='' selected></option>
								<option value='True'>PC</option>
								<option value='False'>Mac</option>
							</select>
							<label className='mr-2' htmlFor='brand'>
								Brand
							</label>
							<select
								required
								onChange={(e) => handleChange(e)}
								value={data.brand}
								className='mr-7'
								name='brand'
								id='brand'
								required>
								<option value='' selected></option>
								<option>Dell</option>
								<option>Samsung</option>
								<option>Apple</option>
								<option>Asus</option>
								<option>Lenovo</option>
							</select>
							<label className='mr-2' htmlFor='modelType'>
								Model Type
							</label>
							<select
								onChange={(e) => handleChange(e)}
								value={data.modelType}
								className='mr-7'
								name='modelType'
								id='modelType'
								required>
								<option selected value=''></option>
								<option>Dell latitude 3000</option>
								<option>Dell latitude 5000</option>
								<option>Dell latitude 7000</option>
								<option>Dell xps 13</option>
								<option>Dell xps 17</option>
								<option>Dell xps 14</option>
							</select>
							<label
								className='mr-2'
								htmlFor='quantityToDonate'
								placeholder='Quantity'>
								Quantity
							</label>
							<input
								onChange={(e) => handleChange(e)}
								value={data.quantityToDonate}
								type='text'
								placeholder='1'
								id='quantityToDonate'
								required
							/>
						</div>

						<label
							className='font-bold'
							htmlFor='personal information'>
							Personal information
						</label>
						<div className='flex gap-8'>
							<input
								onChange={(e) => handleChange(e)}
								value={data.firstName}
								className='{isVisible ? "visible" "hidden"} bg-gray-100'
								type='text'
								id='firstName'
								name='firstName'
								placeholder='First Name'
								required
							/>
							<input
								onChange={(e) => handleChange(e)}
								value={data.lastName}
								className='bg-gray-100'
								type='text'
								id='lastName'
								name='lastName'
								placeholder='Last Name'
								required
							/>
							<input
								onChange={(e) => handleChange(e)}
								value={data.email}
								className='bg-gray-100'
								type='text'
								id='email'
								name='email'
								placeholder='Email'
								required
							/>
							<input
								onChange={(e) => handleChange(e)}
								value={data.phoneNumber}
								className='bg-gray-100'
								type='text'
								id='phoneNumber'
								name='phoneNumber'
								placeholder='phoneNumber'
								required
							/>
						</div>
						<div className='grid mt-10'>
							<p className='font-bold'>Location</p>
							<p>where are you donating from?</p>
							<div className='flex gap-8'>
								<div className='flex gap-8'>
									<select
										onChange={(e) => handleChange(e)}
										value={data.fromState}
										title='fromState'
										id='fromState'
										required>
										<option value='' selected></option>
										<option>Washington</option>
										<option>California</option>
										<option>New York</option>
										<option>Massachusetts</option>
										<option>Florida</option>
										<option>Texas</option>
										<option>Arizona</option>
										<option>Utah</option>
										<option>Colorado</option>
										<option>Montana</option>
									</select>
								</div>
								<div className=' flex gap-8'>
									<select
										onChange={(e) => handleChange(e)}
										value={data.fromCity}
										title='fromCity'
										id='fromCity'
										required>
										<option value='' selected></option>
										<option>Los Angeles</option>
										<option>New York</option>
										<option>Phoenix</option>
										<option>Austin</option>
										<option>Columbus</option>
										<option>Aurora</option>
										<option>District of Columbia</option>
										<option>Boston</option>
										<option>Salt Lake City</option>
										<option>Seattle</option>
										<option>Billings</option>
									</select>
								</div>
							</div>
						</div>
						<div className='grid gap-2 w-1/2 mt-10'>
							<p className='font-bold'>Address</p>
							<input
								onChange={(e) => handleChange(e)}
								value={data.address1}
								className='bg-gray-100'
								type='text'
								id='address1'
								name='address1'
								placeholder='First Address'
								required
							/>
							<input
								onChange={(e) => handleChange(e)}
								value={data.address2}
								className='bg-gray-100'
								type='text'
								id='address2'
								name='address2'
								placeholder='Second Address'
							/>
							<input
								onChange={(e) => handleChange(e)}
								value={data.zipCode}
								className='bg-gray-100'
								type='text'
								id='zipCode'
								name='zipCode'
								placeholder='ZipCode'
							/>
						</div>

						{/* <button
						title='button'
						type='submit'
						className='btn btn-primary py-5 px-1'>
						<Link
							className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
							href='#'>
							Next
						</Link>
					</button> */}
					</div>
					<div className='visible'>
						{/* <p>2 of 3 steps</p> */}
						{/* <button
						title='button'
						type='submit'
						className='btn btn-primary py-5 px-1'>
						<Link
							className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
							href='#'>
							Previous
						</Link>
					</button>
					<button
						title='button'
						type='submit'
						className='btn btn-primary py-5 px-1'>
						<Link
							className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
							href='#'>
							Next
						</Link>
					</button> */}
					</div>
					<div className='grid mt-10 visible'>
						<div className='flex gap-8'>
							{/* <button
							title='button'
							type='submit'
							className='btn btn-primary py-5 px-1'>
							<Link
								className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
								href='#'>
								Previous
							</Link>
						</button>
						<button
							title='button'
							type='submit'
							className='btn btn-primary py-5 px-1'>
							<Link
								className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
								href='#'>
								Next
							</Link>
						</button> */}
							<div className='grid mt-10'>
								<label className='font-bold'>
									Donation Send Off
								</label>
								<p>
									do you wish to drop the tech or have it
									picked up
								</p>
								<select
									onChange={(e) => handleChange(e)}
									value={data.isPicked}
									className='mr-7'
									name='isPicked'
									id='isPicked'
									required>
									<option value='' selected></option>
									<option value='False'>Drop</option>
									<option value='True'>Picked-up</option>
								</select>
							</div>
							<div className='grid mt-10'>
								<label
									className='font-bold'
									htmlFor='donateDate'>
									date
								</label>
								<label htmlFor='donateDate'>
									Select your date for pick up:
								</label>
								<input
									onChange={(e) => handleChange(e)}
									value={data.donateDate}
									required
									type='date'
									id='donateDate'
									name='donateDate'
								/>
							</div>
						</div>
					</div>
					<div>
						<button
							title='button'
							type='submit'
							className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white text-xl mt-10 py-2 px-7 rounded'>
							Submit
						</button>
					</div>
				</form>
				{submitted && (
					<p>
						Thank you for your Donation! <br />
						<br /> You will receive a confirmation email with a link
						to print your UPS label. You will also be sent a tax
						receipt once we have received your device.
					</p>
				)}
				{submitted && <hr className='mb-10 mt-5' />}
				{submitted && <p>Tracking Number: {'#345652'}</p>}

				{submitted && <p>Order Date: {'06/03/2023'}</p>}
				{submitted && <p>Order Item: {'laptop'}</p>}
				{submitted && <p>Quantity: {'1'}</p>}
				{submitted && <hr className='mt-10' />}
			</div>
		</div>
	);
}
