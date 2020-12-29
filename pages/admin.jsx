import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

const Admin = ({  }) => {

    const checkLogin = () => {
        axios.get("/api/isLogin").then((res) => {
            if (res.status === 200 && res.data.name) {
              //로그인
              setIsLogin(true);
            } else {
              //로그인 안됨
              router.push("/login");
            }
        });
    }

    useEffect(() => {
        
    },[]);
  
    return (
        <>
            admin
        </>
    )
}


export default Admin;

