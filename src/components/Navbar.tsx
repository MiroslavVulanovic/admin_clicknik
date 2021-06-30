import React from 'react';
import { CgProfile } from 'react-icons/cg';
import auth from './auth';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navbar = (props: any) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="bg-blue-100 flex justify-end border-b border-gray-600 h-10">
			<p className="my-auto">mail@gmail.com</p>
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				className="flex flex-col items-center px-2"
				onClick={handleClick}
			>
				<CgProfile size={30} className="mt-1" />
				{/* <span className="text-xs">Admin</span> */}
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Promijeni lozinku</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						auth.logout().then(() => {
							props.history.push('/');
						});
					}}
				>
					Izloguj se
				</MenuItem>
			</Menu>
			{/* RANIJE RJESENJE
             <button
				className="logoutButton h-7 w-30 bg-blue-200 hover:bg-blue-300 mt-1 mr-1 text-white text-sm font-normal py-1 px-2 rounded"
				onClick={() => {
					auth.logout(() => {
						props.history.push('/');
					});
				}}
			>
				Log Out
			</button> */}
		</div>
	);
};

export default withRouter(Navbar);
