import Head from "next/head";
import styles from '../styles/Home.module.css'
import { Container, Pagination, Table } from 'react-bootstrap';
import PageHeader from '@/components/PageHeader';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useState, useEffect } from 'react'; // Removed unnecessary 'use' import
import MainNav from '@/components/MainNav';

export default function Home() {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState(null); // Initialized as null instead of empty array

  const { data, error } = useSWR(`http://127.0.0.1:4000/api/features?page=${page}&per_page=20`);

  useEffect(() => {
    if (data) {
      console.log('data::UseEffect', data.data);
      setPageData(data.data); // Set pageData to data.data
    }
  }, [data, data?.pagination?.total_pages]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    // Changed condition to check if page is less than total pages
    if (data && page < data.pagination.total_pages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Head>
        <title>EarthQuakes DATA on RAILS</title>
        <meta name="description" content="Test for Frogmi creating an API on rails and a Front that consumes USGS data and persist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
      <Container>
        <PageHeader title='Earthquakes List' text='Full list of earthquakes on the last month.' />

        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Magnitude</th>
              <th>Place</th>
              <th>Time</th>
              <th>Magnitude Type</th>
            </tr>
          </thead>
          <tbody>
            {pageData ? (
              pageData.map((earthquake) => {
                const { id, attributes, links } = earthquake;
                const { magnitude, place, time, mag_type, coodinates } = attributes;
                const { longitude, latitude } = coodinates;
                const { external_url } = links;

                return (
                  <tr key={id} onClick={() => { router.push(`/earthquake/${id}`) }}>
                    <td>{id}</td>
                    <td>{magnitude}</td>
                    <td>{place}</td>
                    <td>{time}</td>
                    <td>{mag_type}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan='5'>Loading...</td> {/* Changed colSpan to match the number of columns */}
              </tr>
            )}
          </tbody>
        </Table>

        <Pagination>
          <Pagination.Prev onClick={previous} />
          <Pagination.Item>{page}</Pagination.Item>
          <Pagination.Next onClick={next} />
        </Pagination>

      </Container>
    </>
  );
}
