import { movies } from '../data/movies.json';

exports.handler = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;
  const movie = movies.find((currentMovie) => currentMovie.id === id);

  if (!movie) {
    return { statusCode: 404, body: 'Not Found' };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(movie),
  };
};
