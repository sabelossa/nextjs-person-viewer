/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

//https://randomuser.me/api/?results=100

const Home: NextPage = () => {
  return (
    <>
      <Layout title={'Person Viewer'} children={undefined}></Layout>
      <Navbar></Navbar>
      <Title></Title>
    </>
  );
};

export default Home;
