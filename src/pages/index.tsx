import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

type Props = {
  name: string;
};

export default function Home(props: Props) {
  const [refetch, setRefetch] = useState(false);
  const [data, setData] = useState<Props | null>(null);
  useEffect(() => {
    (async () => {
      const data = await fetch('/api/hello');
      const json = (await data.json()) as Props;
      setData(json);
      console.log(json, Date.now());
    })();
  }, [refetch]);

  return (
    <>
      <section>
        <h2>Client Fetch</h2>
        <div>
          <button
            onClick={() => {
              setRefetch((prev) => !prev);
            }}
          >
            Refetch
          </button>
          <p>{data ? data.name : 'loading...'}</p>
        </div>
      </section>
      <br />
      <section>
        <h2>gSSP</h2>
        <p>{props.name}</p>
      </section>
    </>
  );
}

export const getServerSideProps = (async () => {
  const data = await fetch('http://localhost:3000/api/hello');
  const json = await data.json();
  console.log('fetch: ', Date.now());

  return {
    props: json,
  };
}) satisfies GetServerSideProps<Props>;
