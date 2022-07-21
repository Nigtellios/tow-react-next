import client from "../src/Connection/apollo-client";
import {HeaderQuery} from "../src/Queries/Header";

export async function getServerSideProps() {
    const { data } = await client.query({
        query: HeaderQuery,
    });

  return {
    props: {
      headerData: [data?.header],
    },
  };
}

type HeaderProps = {
  [key: string]: any;
}

const Home = ( {headerData}: {headerData: Array<object>} ) => {
  return (
    <div>
      {headerData.map((header: HeaderProps) => (
        <h1>{header.data.attributes.logotype.data.attributes.url}</h1>
      ))}
    </div>
  );
}

export default Home;
