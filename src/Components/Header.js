import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const Header = (props) => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/">Главная</Nav.Link>
					<Nav.Link as={Link} to="/about">О нас</Nav.Link>
					<NavDropdown title="Страницы" id="basic-nav-dropdown">
						<NavDropdown.Item as={Link} to="/protective-arsenal">Защитные средства</NavDropdown.Item>
						<NavDropdown.Item as={Link} to="/switching-forms">Бланки переключений</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item as={Link} to="/">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Logged isLoggedIn={true} />
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2 mt-1" />
					<Button variant="outline-success" className="mt-1">Поиск</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}

const Logged = (props) => {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return (
			<NavDropdown title={<BsFillPersonFill />} id="basic-nav-dropdown">
				<NavDropdown.Item as={Link} to="/settings">Настройки</NavDropdown.Item>
				<NavDropdown.Item as={Link} to="/profile">Профиль</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item as={Link} to="/change-password">Сменить пароль</NavDropdown.Item>
			</NavDropdown>
		);
	}
	return null;
}

export default Header;