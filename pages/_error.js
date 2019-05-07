import React from 'react';
import Layout from '../component/Layout';

export default ({statusCode}) => (
  <Layout title='Error'>
    {statusCode ? (
      <p>Couldn't load the data: Status Code {statusCode}</p>
    ) : (
      <p>Couldn't get that page, sorry!</p>
    )}
  </Layout>
);