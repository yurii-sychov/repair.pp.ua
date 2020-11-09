import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Header';

const Form = (props) => {
    console.log('Props Form', props);
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Form page</h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Form;