import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../../Header';
// import { BsPencil, BsEye, BsTrash } from "react-icons/bs";


import ProtectiveArsenalForm from './ProtectiveArsenalForm';

class ProtectiveArsenalUpdate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			protectiveArsenal: {}
		};
	}

	componentDidMount() {
		this.getData(this.props.match.params.id);
	}

	async getData(id) {
		let response = await fetch('https://sychov.pp.ua/api/protective_arsenal/get_one_data/' + id)
		if (response.ok) {
			let json = await response.json();
			this.setState({
				protectiveArsenal: json.data
			});
		} else {
			alert("Ошибка HTTP: " + response.status);
		}
	}

	updateRow(event) {
		event.preventDefault();
		console.log(event);
	}

	deleteRow(event) {
		event.preventDefault();
		console.log(event);
	}

	render() {
		return (
			<>
				<Header />
				<ProtectiveArsenalForm data={this.state.protectiveArsenal} action="update" handlerUpdate={this.updateRow} handlerDelete={this.deleteRow}/>
			</>
		);
	}
}

export default ProtectiveArsenalUpdate;