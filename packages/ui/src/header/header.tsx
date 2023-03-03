export const Header = ({
	user,
	loginFn,
	logoutFn,
}: {
	user: any;
	loginFn: () => void;
	logoutFn: () => void;
}) => {
	console.log(user)
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn-ghost btn text-xl normal-case">WallK</a>
			</div>
			<div className="flex-none">
				{user && (
					<div className="dropdown-end dropdown">
						<label tabIndex={0} className="btn-ghost btn-circle avatar btn">
							<div className="w-10 rounded-full">
								<img src={user.image} />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
						>
							<li>
								<a className="justify-between">Profile</a>
							</li>
							<li>
								<button type="button" onClick={logoutFn}>
									Logout
								</button>
							</li>
						</ul>
					</div>
				)}
				{!user && (
					<div className="navbar-end">
						<button type="button" className="btn" onClick={loginFn}>
							Login
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
