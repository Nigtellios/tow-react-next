import React from 'react';
import { NextPage } from 'next';
import {
  HeaderQueryQuery,
  HeaderQueryQueryVariables,
} from '../graphql/generated/schema';
import client from '../src/Connection/apollo-client';
import headerQuery from '../src/Components/Header/headerQuery';

export async function getServerSideProps() {
  try {
    const { data } = await client.query({
      query: headerQuery,
    });

    return {
      props: {
        headerData: [data?.header],
      },
    };
  } catch (error) {
    let errorMessage: string = '';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
}

// type HeaderProps = {
//   [key: string]: any;
// };

const Home: NextPage<{ data: HeaderQueryQuery }> = ({
  headerData,
}: {
  headerData: HeaderQueryQueryVariables;
}) => (
  <div>
    {headerData.map((header) => (
      <h1>{header.data.attributes.logotype.data.attributes.url}</h1>
    ))}
  </div>
);

export default Home;
