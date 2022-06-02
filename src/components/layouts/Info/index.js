import React, { useCallback } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import BackButton from "../../../Common/components/Buttons/BackButton";
import { useGetSingleUser } from "../../hooks/useFetchUsers";
import useUserService from "../../hooks/useUserService";
import Modals from "../../constant";
import useModal from "../../constant";
import Button from "../../constant";

const UpdateUserPage = () => {
	const { id } = useParams();
	const { user } = useGetSingleUser(id);
	const { deleteUser } = useUserService();
	const { isOpen, openModal, closeModal } = useModal();

	const deleteUserCallback = useCallback(() => {
		deleteUser(id);
	});

	const tabList = [
		{ tabTitle: "User Info", tabChildren: <EditUserInfo user={user} /> },
		{ tabTitle: "Password", tabChildren: <EditPassword user={user} /> },
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
				<h3 className="text-xl font-bold">Edit User {user && user.id}</h3>
			</div>

			<Tabs tabList={tabList} />

			<Modals
				title="Delete this user?"
				description="You can't undo this action once you deleted this user."
				isOpen={isOpen}
				onClickConfirm={deleteUserCallback}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default UpdateUserPage;
