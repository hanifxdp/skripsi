import React, { Fragment, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button/Button";

const ConfirmModal = (props) => {
	const { isOpen, closeModal, title, description, onClickConfirm } = props;

	const confirmButton = useCallback(() => {
		onClickConfirm();
		closeModal();
	});

	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex items-center justify-center min-h-full p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									{title}
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-500">{description}</p>
								</div>

								<div className="flex mt-8 space-x-2">
									<Button size="small" onClick={confirmButton}>
										Ok
									</Button>
									<Button size="small" variant="danger" onClick={closeModal}>
										Cancel
									</Button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default React.memo(ConfirmModal);
