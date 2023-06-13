import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta vel
            repellat quisquam temporibus voluptate quidem iusto dolorem animi
            vero voluptatem cupiditate et enim iure commodi laborum neque
            delectus, magni nam?
          </p>
          <div className="d-flex">
            <Button variant="primary" href="/login" className="me-3">
              Sign In
            </Button>
            <Button variant="secondary" href="/register">
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
