import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

const About = (props) => {
    console.log('Props About', props);
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col>
                        <h2>О нас</h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <p>
                            Я преподаю информатику с 2008 года, когда предмет ещё назывался ИКТ. Начинал со школы, учил детей разбираться в программировании и сдавать ЕГЭ на 90 баллов и выше. За два года вывел нашу школу на второе место в районе по олимпиадам по информатике. Вёл два класса коррекции — пятый и одиннадцатый — и знаю, как объяснить основы теории вероятности даже тем, кто не хочет ничему учиться.
                        </p>
                        <p>
                            В 2012 защитил кандидатскую диссертацию по обучению информатике детей с недостатком внимания и стал внештатным преподавателем РГСУМ им. Макаренко. Параллельно с этим веду курсы по программированию «IDDQD» и записываю подкаст «Прогрокаст» с аудиторией 25 000 человек.
                        </p>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <img src="https://controleng.ru/wp-content/uploads/22-1.jpg" alt="img" style={{ maxWidth: "100%", maxHeight: "100%" }} className="rounded" />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <h5>Полезные ссылки</h5>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <h5>Контакты для связи</h5>
                        <address>
                            <strong>Twitter, Inc.</strong><br/>
                                1355 Market St, Suite 900<br/>
                                    San Francisco, CA 94103<br/>
                                        <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

                                    <address>
                                        <strong>Full Name</strong><br/>
                                            <a href="mailto:first.last@example.com">first.last@example.com</a>
  </address>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;