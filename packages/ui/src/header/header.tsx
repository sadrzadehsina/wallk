import { useTranslation } from "react-i18next";
import Link from "next/link";

export const Header = ({
	user,
	loginFn,
	logoutFn,
}: {
	user: any;
	loginFn: () => void;
	logoutFn: () => void;
}) => {
	const { t } = useTranslation();

	return (
		<div className="navbar bg-base-300 p-4">
			<div className="flex-1">
				<a className="btn-ghost btn text-xl normal-case">WallK</a>
			</div>
			<div className="flex-none">
				{user && (
					<>
						<Link
							type="button"
							className="btn-primary btn-link no-animation btn"
							href="/post/add"
						>
							{t("Add Post")}
						</Link>

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
										{t("logout")}
									</button>
								</li>
							</ul>
						</div>
					</>
				)}
				{!user && (
					<div className="navbar-end">
						<button
							type="button"
							className="btn-primary btn-link no-animation btn"
							onClick={loginFn}
						>
							{t("login")}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
