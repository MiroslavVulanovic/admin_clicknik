import TextField from '@material-ui/core/TextField';

const NewTeaching = () => {
	return (
		<form>
			<div className="flex justify-evenly mt-1/12 mb-1/12">
				<div className="flex-col">
					<p className="text-gray-200">Unesite naslov pouke</p>
					<TextField label="naslov" />
				</div>
				<div className="flex-col">
					<p className="text-gray-200">Unesite redni broj pouke</p>
					<TextField label="broj" />
				</div>
			</div>
			<div className="flex justify-evenly">
				<div className="mx-auto">
					<p className="text-gray-200">Unesite pouku</p>
					<TextField label="pouka" variant="filled" multiline rowsMax={5} />
				</div>
			</div>
		</form>
		// </div>
	);
};

export default NewTeaching;
