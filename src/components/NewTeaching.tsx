import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios';

import Input from '@material-ui/core/Input';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const NewTeaching = () => {
	const [inputsObject, setInputsObject] = useState({
		title: '',
		author: '',
		content: '',
		file: null,
	});

	const handleChange = (event: { target: { name: any; value: any } }) => {
		let key = event.target.name;
		let value = event.target.value;
		setInputsObject({ ...inputsObject, [key]: value });
	};

	const handleSubmit = async () => {
		let token = localStorage.getItem('somina_token');
		await axios
			.post('http://localhost:3000/quotes', inputsObject, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => console.log(res));
	};

	const handlePicChange = (event: {
		target: { name: any; value: any; files: any };
	}) => {
		if (event.target.files[0] === undefined) {
			return;
		}
		let key = event.target.name;
		let value = URL.createObjectURL(event.target.files[0]);
		setInputsObject({ ...inputsObject, [key]: value });
		// console.log(event.target.files[0]);
	};
	// console.log(inputsObject.file);

	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			root: {
				'& > *': {
					margin: theme.spacing(1),
				},
			},
			input: {
				display: 'none',
			},
		}),
	);
	const classes = useStyles();

	return (
		<form method="post" action="http://localhost:3000/quotes">
			<div className="flex flex-col">
				<div className="flex flex-col mx-4 my-4">
					<label htmlFor="title" className="text-blue-600 mb-2">
						Naslov
					</label>
					<TextField
						onChange={handleChange}
						name="title"
						label="Naslov"
						variant="outlined"
					/>
				</div>
				<div className="flex flex-col mx-4 my-4">
					<label htmlFor="author" className="text-blue-600 mb-2">
						Autor
					</label>
					<TextField
						onChange={handleChange}
						name="author"
						label="Autor"
						variant="outlined"
					/>
				</div>
				<div className="flex flex-col mx-4 my-4">
					<label htmlFor="content" className="text-blue-600">
						Pouka
					</label>
					<TextField
						onChange={handleChange}
						name="content"
						label="Pouka"
						variant="filled"
						multiline
						rowsMax={5}
					/>
				</div>
			</div>
			<div className="flex justify-evenly my-4">
				<div>
					<input
						accept="image/*"
						className={classes.input}
						id="contained-button-file"
						type="file"
						onChange={handlePicChange}
						name="file"
					/>
					<label htmlFor="contained-button-file">
						<Button variant="contained" component="span">
							Dodaj sliku
						</Button>
					</label>
				</div>
				<Button
					className="h-full"
					variant="contained"
					color="primary"
					onClick={handleSubmit}
				>
					Posalji
				</Button>
			</div>
			<img
				className="mx-auto w-half sm:w-1/4 mt-3"
				src={inputsObject.file || ''}
			></img>
		</form>
	);
};

export default NewTeaching;
