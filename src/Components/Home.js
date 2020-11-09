import { Container, Row, Col,Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';

const Home = (props) => {
	console.log('Props Home', props);
	const [count, setCount] = useState(Number(props.arg));
	console.log(typeof count)
	return (
		<>
			<Header />
			<Banner warn={false} />
			<Container fluid>
				<Row>
					<Col>
						<h2>Home page</h2>
						<p><strong>Вы кликнули {count} раз(а)</strong></p>
						<Button variant="secondary" onClick={() => setCount(count + 1)}>Кликни меня</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Home;