import React, { useCallback, useState } from "react";
import { Tab } from "@headlessui/react";
import Button from "../../../../components/constant/Button";
import { useSingleFetchBudaya } from "../../../../hooks/useSingleFetchBudaya";
import { Modals } from "../../../../components";
import useModal from "../../../../hooks/useModal";
import { useParams } from "react-router-dom";
import Tabs from "../../../../components/constant/Tabs";

const UpdateBudayaPage = () => {
	const { id } = useParams;
	const { singleData } = useSingleFetchBudaya(id);
	// const { deleteUser } = useUserService();
	const { isOpen, openModal, closeModal } = useModal();

	// const deleteUserCallback = useCallback(() => {
	// 	deleteUser(id);
	// });

	const tabList = [{ tabTitle: "Budaya Info" }, { tabTitle: "Budaya Media" }];

	return (
		<div className="space-y-4">
			<div className="flex justify-between">
				{/* <BackButton /> */}
				<div>
					<Button size="small" variant="danger" onClick={openModal}>
						Delete
					</Button>
				</div>
			</div>
			<div className="flex justify-between mb-5">
				<h3 className="text-xl font-bold">
					Edit Budaya {singleData && singleData.id}
				</h3>
			</div>

			<Tabs tabList={tabList} />

			<Modals
				title="Delete this user?"
				description="You can't undo this action once you deleted this user."
				isOpen={isOpen}
				// onClickConfirm={deleteUserCallback}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default UpdateBudayaPage;
