import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

const Home = ({ Component, pageProps }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData(){
    axios.get(API_URL).then(res => {
      setList(res.data);
      setIsLoading(false);
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

      {isLoading && (
        <>
          <div style={{padding: "300px 0"}}>
            <Loader inline="centered" active>
              loading
            </Loader>
          </div>
        </>
      )}
      
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>Best product</Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />

          <Header as="h3" style={{ paddingTop: 40 }}>New product</Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}

      
    </div>
  )
}

export default Home;