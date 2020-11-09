import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

const Page404 = (props) => {
    console.log('Props Page404', props);
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col>
                        <h2>404 error</h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Page404;