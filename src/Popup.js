import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Table, Button } from "reactstrap";

const Popup = ({ procedureCatergory, isOpen, toggle }) => {
	const [rightTableData, setRightTableData] = useState([
		...procedureCatergory,
	]);
	const [leftTableData, setLeftTableData] = useState([]);

	const moveToLeftTable = (item) => {
		setRightTableData((prevRightTableData) =>
			prevRightTableData.filter((data) => data.value !== item.value)
		);
		setLeftTableData((prevLeftTableData) => [...prevLeftTableData, item]);
	};

	const moveToRightTable = (item) => {
		setLeftTableData((prevLeftTableData) =>
			prevLeftTableData.filter((data) => data.value !== item.value)
		);
		setRightTableData((prevRightTableData) => [
			...prevRightTableData,
			item,
		]);
	};

	return (
		<Modal
			isOpen={isOpen}
			toggle={toggle}
		>
			<ModalHeader>Popup</ModalHeader>
			<ModalBody>
				<div className='d-flex'>
					<Table>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>action</th>
							</tr>
						</thead>
						<tbody>
							{rightTableData.map((item) => (
								<tr key={item.value}>
									<th scope='row'>{item.value}</th>
									<td>{item.label}</td>
									<td>
										<Button
											onClick={() =>
												moveToLeftTable(item)
											}
										>
											Move
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>

					<Table>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>action</th>
							</tr>
						</thead>

						<tbody>
							{leftTableData.map((item) => (
								<tr key={item.value}>
									<th scope='row'>{item.value}</th>
									<td>{item.label}</td>
									<td>
										<Button
											onClick={() =>
												moveToRightTable(item)
											}
										>
											Move
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default Popup;
