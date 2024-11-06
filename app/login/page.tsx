"use client";

import { login } from "scripts/postman";
import { setCookie } from "scripts/utils";

export default function Login() {
	return (
		<main className="w-full h-screen flex flex-col items-center justify-center">
			<div className="max-w-sm w-[65%] md:w-full text-gray-600">
				<div className="text-center">
					<div className="mt-3 space-y-2">
						<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
							Log in to your account
						</h3>
						<p className="">
							Don&apos;t have an account?{" "}
							<a
								href="/signup"
								className="font-medium text-indigo-600 hover:text-indigo-500">
								Sign up
							</a>
						</p>
					</div>
				</div>
				<form
					onSubmit={async (e) => {
						e.preventDefault();

						/*  */
						const email = document.getElementById("email");
						const pass = document.getElementById("pass");

						const authResponse = await login({
							/* @ts-ignore */
							email: email.value,
							/* @ts-ignore */
							password: pass.value,
						});

						if (authResponse.success) {
							/* @ts-ignore */
							email.value = "";
							/* @ts-ignore */
							pass.value = "";

							// Set the JWT in a cookie
							setCookie("token", authResponse.token || "", 1); // Expires in 1 day
							localStorage.setItem(
								"usermeta",
								(authResponse.usermeta as string) || "{}",
							);

							location.assign("/");
						} else {
							alert(authResponse.message);
						}
						/*  */
					}}
					className="mt-8 space-y-5 w-full max-w-sm flex-col flex">
					<div>
						<label className="font-medium">Email</label>
						<input
							id="email"
							type="email"
							required
							className="w-[94%] mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
						/>
					</div>
					<div>
						<label className="font-medium">Password</label>
						<input
							id="pass"
							type="password"
							required
							className="w-[94%] mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
						/>
					</div>
					<button className="w-[92.5%] px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
						Sign in
					</button>
					<div className="text-center">
						<a
							href="/forgot-password"
							className="hover:text-indigo-600">
							Forgot password?
						</a>
					</div>
				</form>
			</div>
		</main>
	);
}
