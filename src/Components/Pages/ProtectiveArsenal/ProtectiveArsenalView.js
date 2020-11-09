import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../../Header';
// import { BsPencil, BsEye, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

class ProtectiveArsenalView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {}
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
				post: json.data
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
				<Container fluid>
					<Row>
						<Col md={6}>
							<h2>ProtectiveArsenalView page</h2>
							<Card>
								<Card.Header as="h5">Информация о защитном средстве</Card.Header>
								<Card.Body>
									<Card.Title>{this.state.post.title}</Card.Title>
									<Card.Text as="div">
										<dl className="row">
											<dt className="col-sm-3">ID:</dt>
											<dd className="col-sm-9">{this.state.post.id}</dd>
											<dt className="col-sm-3">Подстанция:</dt>
											<dd className="col-sm-9">{this.state.post.stantion_id}</dd>
											<dt className="col-sm-3">Наименование:</dt>
											<dd className="col-sm-9">{this.state.post.name}</dd>
										</dl>
									</Card.Text>
									<Link className="btn btn-primary" to="/protective-arsenal">Ко всем средствам</Link>
									<Button variant="danger" className="ml-2" disabled>Удалить</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default ProtectiveArsenalView;