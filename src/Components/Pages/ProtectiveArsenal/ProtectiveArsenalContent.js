import React from 'react';
import { Container, Row, Col, Table, Spinner } from 'react-bootstrap';
import Header from '../../Header';
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const $ = require('jquery');
$.DataTable = require('datatables.net');
require('datatables.net-bs4');

class ProtectiveArsenalContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	async componentDidMount() {
		const columns = [
			{
				title: '#',
				width: '5%',
				data: 'id',
				className: 'text-center'
			},
			{
				title: 'Підстанція',
				width: '16%',
				data: 'stantion'
			},
			{
				title: 'Наименування',
				width: '16%',
				data: 'name'
			},
			{
				title: 'Тип',
				width: '16%',
				data: 'type'
			},
			{
				title: 'Інв. №',
				width: '16%',
				data: 'type'
			},
			{
				title: 'Місце',
				width: '16%',
				data: 'type'
			},
			{
				title: BsPencil,
				width: '5%',
				data: 'id',
				className: 'text-center',
				"render": function (data, type, row, meta) {
					return '<Link to="/protective-arsenal/edit/' + data + '">Правити</Link>';
				}
			},
			{
				title: 'Дивитися',
				width: '5%',
				data: 'id',
				className: 'text-center',
				"render": function (data, type, row, meta) {
					return '<Link to="/protective-arsenal/view/' + data + '">Дивитися</Link>';
				}
			},
			{
				title: 'Видалити',
				width: '5%',
				data: 'id',
				className: 'text-center',
				"render": function (data, type, row, meta) {
					return '<Link to="/protective-arsenal/edit/' + data + '">Видалити</Link>';
				}
			}
		];
console.log('< BsTrash />', BsPencil)
		console.log('componentDidMount()', 'Вы пришли на страницу ' + this.props.location.pathname);
		await this.getData();

		$('#DataTable').DataTable({
			dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6 text-right'f>>" +
				"<'row'<'col-sm-12'tr>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			data: this.state.posts,
			columns,
			ordering: true,
			autoWidth: false,
		})
	}

	async componentWillUnmount() {
		console.log('componentWillUnmount()', 'Вы ушли со страницы ' + this.props.location.pathname);
		$('#DataTable_wrapper').find('table').DataTable().destroy(true);
	}

	async getData() {
		let response = await fetch('https://sychov.pp.ua/api/protective_arsenal/get_all_data');
		if (response.ok) {
			let json = await response.json();
			this.setState({
				posts: json.data
			})
		} else {
			alert("Ошибка HTTP: " + response.status);
		}
	}

	editRow(event) {
		console.log(event.target.dataset.id);
	}

	viewRow(event) {
		console.log(event);
	}

	deleteRow(event) {
		console.log('Deleted!');
		// const id = event.target.dataset.id;
		const tr = event.currentTarget.parentElement.parentElement;
		tr.remove();
	}

	render() {
		console.log('render(1)')
		return (
			<>
				{console.log('render(2)')}
				<Header />
				<Container fluid>
					<Row>
						<Col>
							<h2>ProtectiveArsenal page</h2>
							<Table striped bordered hover id="DataTable">
								{/* <thead>
									<tr className="text-center">
										<th style={{ width: "5%" }}>ID</th>
										<th style={{ width: "20%" }}>Подстанция</th>
										<th style={{ width: "20%" }}>Наименование</th>
										<th style={{ width: "20%" }}>Тип</th>
										<th style={{ width: "20%" }}>Місце</th>
										<th style={{ width: "5%" }}><BsPencil /></th>
										<th style={{ width: "5%" }}><BsEye /></th>
										<th style={{ width: "5%" }}><BsTrash /></th>
									</tr>
								</thead>
								<tbody>
									{!this.state.posts.length
										?
										<tr className="text-center">
											<td colSpan="6">
												<Spinner animation="border" variant="secondary" />
											</td>
										</tr>
										:
										this.state.posts.map(post =>
											<tr key={post.id}>
												<td className="text-center">{post.id}</td>
												<td>{post.filial}</td>
												<td>{post.name}</td>
												<td>{post.type}</td>
												<td>{post.place}</td>
												<td className="text-center">
													<Link to={`/protective-arsenal/edit/${post.id}`}>
														<BsPencil className="text-success" data-id={post.id} style={{ cursor: "pointer" }} onClick={this.editRow} />
													</Link>
												</td>
												<td className="text-center">
													<Link to={`/protective-arsenal/view/${post.id}`}>
														<BsEye className="text-primary" data-id={post.id} style={{ cursor: "pointer" }} onClick={this.viewRow} />
													</Link>
												</td>
												<td className="text-center"><BsTrash className="text-danger" data-id={post.id} style={{ cursor: "pointer" }} onClick={this.deleteRow} /></td>
											</tr>
										)
									}
								</tbody> */}
							</Table>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default ProtectiveArsenalContent;