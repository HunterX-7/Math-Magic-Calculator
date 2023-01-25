import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => (
  <div className="container p-5">
    <h2 className="text-center mb-5">Welcome to our page!</h2>
    <LoremIpsum className="text-justify" p={3} />
  </div>
);

export default Home;
