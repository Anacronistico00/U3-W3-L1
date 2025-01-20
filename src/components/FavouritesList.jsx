import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FavouritesList = () => {
  const jobs = useSelector((state) => {
    return state.favourites.list;
  });

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Jobs favourites list</h1>
        </Col>
        <Col xs={10} className='mx-auto my-3'>
          {jobs.map((job, i) => {
            return (
              <Row
                key={i}
                className='mx-0 mt-3 p-3 align-items-center'
                style={{ border: '1px solid #00000033', borderRadius: 4 }}
              >
                <Col xs={3}>
                  <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                </Col>
                <Col xs={6}>
                  <a href={job.url} target='_blank' rel='noreferrer'>
                    {job.title}
                  </a>
                </Col>
                <Col xs={3} className='text-center d-flex'>
                  <Button
                    className='m-2'
                    onClick={() => {
                      dispatch({
                        type: 'ADD_TO_FAVOURITES',
                        payload: job,
                      });
                    }}
                  >
                    Add to favorites
                  </Button>
                  <Button
                    className='m-2'
                    onClick={() => {
                      dispatch({
                        type: 'REMOVE_FROM_FAVOURITES',
                        payload: i,
                      });
                    }}
                  >
                    Remove from favorites
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesList;
