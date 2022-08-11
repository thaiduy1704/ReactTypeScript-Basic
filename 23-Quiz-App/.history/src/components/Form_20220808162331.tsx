import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='number'
				placeholder='amount'
				{...register('amount', { required: true, max: 50, min: 0 })}
			/>
			<select {...register('category', { required: true })}>
				<option value='history'>history</option>
				<option value='sports'>sports</option>
				<option value='politics'>politics</option>
			</select>
			<select {...register('difficulty', { required: true })}>
				<option value='hard'>hard</option>
				<option value='easy'>easy</option>
				<option value='medium'>medium</option>
			</select>

			<input type='submit' />
		</form>
	);
}