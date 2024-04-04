import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <Image src="https://static.vecteezy.com/system/resources/thumbnails/023/329/714/small/heart-tree-love-for-nature-red-landscape-at-sunset-generativ-ai-photo.jpg" rounded />
        </Col>
        <Col xs={4} md={4}>
          <Image src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;