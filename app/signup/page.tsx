"use client";

import { registerUser } from "scripts/postman";

export default function Signup() {
	return (
		<main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
			<div className="max-w-sm w-[65%] md:w-full text-gray-600">
				<div className="text-center">
					<div className="mt-4 space-y-2">
						<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
							Create an account
						</h3>
						<p className="">
							Already have an account?{" "}
							<a
								href="/login"
								className="font-medium text-indigo-600 hover:text-indigo-500">
								Log in
							</a>
						</p>
					</div>
				</div>
				<div className="p-4 py-6 sm:p-6 sm:rounded-lg">
					<form
						onSubmit={async (e) => {
							e.preventDefault();

							const email = document.getElementById("email");
							const pass = document.getElementById("pass");
							const name = document.getElementById("name");

							const authResponse = await registerUser({
								/* @ts-ignore */
								name: name.value,
								/* @ts-ignore */
								email: email.value,
								/* @ts-ignore */
								password: pass.value,
							});

							if (authResponse.success) {
								/* @ts-ignore */
								name.value = "";
								/* @ts-ignore */
								email.value = "";
								/* @ts-ignore */
								pass.value = "";

								alert("Account created.");
								location.assign("/login");
							} else {
								alert(authResponse.message);
							}
						}}
						className="mt-8 space-y-5 w-full max-w-sm flex-col flex">
						<div>
							<label className="font-medium">Name</label>
							<input
								type="text"
								required
								id="name"
								className="w-[94%] mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
							/>
						</div>
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
							Create account
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
