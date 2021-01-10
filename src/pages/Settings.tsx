import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { IAppContext } from '../types';

import { AppContext, defaults } from '../contexts/AppContext';

export default function SettingsPage() {
	const appContext: IAppContext = useContext<any>(AppContext);
	console.log(appContext);

	const { register, handleSubmit, reset, errors } = useForm({
		defaultValues: { ...defaults }
	});

	const onSubmit = (cfg: any) => {
		appContext.saveData({
			gamePath: cfg.gamePath,
			gameArgs: cfg.gameArgs
		});
	};

	const resetToDefaults = () => {
		reset({ ...defaults });
		appContext.resetData();
	};

	return (
		<main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={-1}>
			<div className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
				<form onSubmit={handleSubmit(onSubmit)}>
					<h3 className="text-lg leading-6 font-medium text-gray-900">Settings</h3>
					<p className="mt-1 text-sm text-gray-500">Setup your Tribes 2 Game path and arguments</p>

					<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4">
						<div className="sm:col-span-4">
							<label htmlFor="gamePath" className="block text-sm font-medium text-gray-700">
								Game Path
							</label>{' '}
							{errors.gamePath && errors.gamePath.type === 'required' && <p>Game path required!</p>}
							<div className="mt-1 flex rounded-md shadow-sm">
								<input
									ref={register({ required: true })}
									type="text"
									name="gamePath"
									id="gamePath"
									className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
									defaultValue={appContext.config.gamePath}
								/>
							</div>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 ">
						<div className="sm:col-span-4">
							<label htmlFor="gameArgs" className="block text-sm font-medium text-gray-700">
								Arguments
							</label>
							<div className="mt-1 flex rounded-md shadow-sm">
								<input
									ref={register()}
									type="text"
									name="gameArgs"
									id="gameArgs"
									className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
									defaultValue={appContext.config.gameArgs}
								/>
							</div>
						</div>
					</div>

					<div className="mt-6 flex justify-between">
						<button
							type="submit"
							className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							Save
						</button>

						<button
							type="button"
							onClick={() => resetToDefaults()}
							className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
						>
							Reset to Default
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}
