import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

const Home = ({ Component, pageProps }) => {

  const [list, setList] = useState([]);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData(){
    axios.get(API_URL).then(res => {
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      <Head>
        <title> Ewan | main </title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
      <Divider />
      <ItemList list={list} />
    </div>
  )
}

export default Home;