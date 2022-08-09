/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Textbox from '../components/Textbox';
import { GetServerSideProps } from 'next';
import PersonFrame from '../components/PersonFrame';

//

const Home: NextPage = (data) => {
  return (
    <>
      <Layout title={'Person Viewer'} children={undefined}></Layout>
      <Navbar></Navbar>
      <Title></Title>
      <Textbox></Textbox>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const res = await fetch('https://randomuser.me/api/?results=10');
  const data = await res.json();

  //console.log(data);
  //console.log(data.results);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
