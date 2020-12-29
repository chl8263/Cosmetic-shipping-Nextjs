import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

const Home = ({ list }) => {
  
  return (
    <div>
      <Head>
        <title> Ewan | main </title>
        <meta name="description" content="Ewan's commetic ecommerce"></meta>
      </Head>
      
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>Best product</Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />

        <Header as="h3" style={{ paddingTop: 40 }}>New product</Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
  
    </div>
  )
}

export async function getStaticProps(){
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
      props: {
          list: data,
          name: process.env.name
      },
  };
}

export default Home;

