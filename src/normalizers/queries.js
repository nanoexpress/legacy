import { parse } from 'querystring';

export default (req, queries) => {
  const query = req.getQuery();

  if (query.length < 3) {
    return queries;
  }
  const parsedQueries = parse(query);

  if (!queries) {
    queries = {};
  }

  for (const query in parsedQueries) {
    queries[query] = parsedQueries[query];
  }
  return queries;
};
