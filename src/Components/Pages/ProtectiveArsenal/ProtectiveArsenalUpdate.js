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

	deleteRow(event) {
		window.location.href = '/protective-arsenal';
	}

	render() {
		return (
			<>
				<Header />
				<ProtectiveArsenalForm data={this.state.protectiveArsenal} action="update" />
			</>
		);
	}
}

export default ProtectiveArsenalUpdate;