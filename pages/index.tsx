/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Textbox from '../components/Textbox';

//

const Home: NextPage = () => {
  return (
    <>
      <Layout title={'Person Viewer'} children={undefined}></Layout>
      <Navbar></Navbar>
      <Title></Title>
      <Textbox></Textbox>
    </>
  );
};

const getStaticProps = async () => {
  const res = await fetch('https://randomuser.me/api/?results=10');
  const data = await res.json();
  const data2 = data[0];

  return {
    props: { users: data2 },
  };
};

export default Home;
