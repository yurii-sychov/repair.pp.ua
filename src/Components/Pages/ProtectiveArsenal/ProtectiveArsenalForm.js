import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ProtectiveArsenalForm = (props) => {
	console.log("FORM", props)
	return (
		<>
			<Container fluid>
				<Row>
					<Col md={6}>
						<h2>{props.action === 'update' ? 'Редактирование защитного средства' : 'Создание защитного средства'}</h2>
						<Card>
							<Card.Header as="h5">Форма</Card.Header>
							<Card.Body>
								<Card.Title>{props.action === 'update' ? 'Редактирование защитного средства' : 'Создание защитного средства'}</Card.Title>
								<Card.Text as="div">
									<Form>
										<Form.Group controlId="formName">
											<Form.Label as="strong">Наименование защитного средства</Form.Label>
											<Form.Control type="text" placeholder="Введите наименование защитного средства" value={props.data.name ?  props.data.name : ""} onChange={()=>{}} />
										</Form.Group>

										<Form.Group controlId="formType">
											<Form.Label as="strong">Тип защитного средства</Form.Label>
											<Form.Control type="text" placeholder="Введите тип защитного средства" value={props.data.type ?  props.data.type : ""} onChange={()=>{}} />
										</Form.Group>

										<Link className="btn btn-success mr-2" to="/protective-arsenal">Назад ко всем средствам</Link>
										<Button variant="primary" type="submit" className="mr-2" onClick={props.handlerUpdate}>{ props.action === 'update' ? 'Изменить' : 'Создать'}</Button>
										<Button variant="danger" type="submit" className="mr-2 right" onClick={props.handlerDelete}>Видалити</Button>
									</Form>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default ProtectiveArsenalForm;