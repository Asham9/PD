import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/notfound.svg';

const Error = () => {
  const error = useRouteError();

  if (error?.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>OOPS! Page not found</h3>
          <p>We cannot find the page you are looking for.</p>
          <Link to="/">Back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
        <p>The page you requested is temporarily unavailable. Please try again.</p>
        <Link to="/">Back to home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
