import React, { useCallback } from "react";
import Button from "../../../../components/constant/Button/Button";
import { useSingleFetchBudaya } from "../../../../hooks/useSingleFetchBudaya";
import { Modals } from "../../../../components";
import useModal from "../../../../hooks/useModal";
import { useParams } from "react-router-dom";
import Tabs from "../../../../components/constant/Tabs";
import {
	EditBudayaInfo,
	EditBudayaMedia,
} from "../../../../components/layouts";
import useBudayaServices from "../../../../services/Budaya";
import BackButton from "../../../../components/constant/Button/Back";

const UpdateBudayaPage = () => {
	const { id } = useParams();
	const { singleData } = useSingleFetchBudaya(id);
	const { deleteBudaya } = useBudayaServices();
	const { isOpen, openModal, closeModal } = useModal();

	const deleteBudayaCallback = useCallback(() => {
		deleteBudaya(id);
	});

	const tabList = [
		{
			tabTitle: "Budaya Info",
			tabChildren: <EditBudayaInfo budaya={singleData} />,
			searchParams: "budaya-info",
		},
		{
			tabTitle: "Budaya Media",
			tabChildren: <EditBudayaMedia />,
			searchParams: "budaya-info",
		},
	];

	return (
		<div className="space-y-4">
			<div className="flex justify-between">
				<BackButton />
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
				title="Delete this Budaya?"
				description="You can't undo this action once you deleted this user."
				isOpen={isOpen}
				onClickConfirm={deleteBudayaCallback}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default UpdateBudayaPage;
