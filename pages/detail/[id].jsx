import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = ({ item, name }) => {

    const router = useRouter();
    
    if (router.isFallback) {
        return (
          <div style={{ padding: "100px 0" }}>
            <Loader active inline="centered">
              Loading
            </Loader>
          </div>
        );
      }

    return (
        <>
            {item && (
                <>
                    <Item item={item}/>
                    {name} 환경 입니다.
                </>
            )}
        </>
    );
}

export default Post;

export async function getStaticPaths(){
    return {
        paths: [
            {params: {id: '740'}},
            {params: {id: '730'}},
            {params: {id: '729'}},
        ],
        fallback: true, // fallback: false 는 없는 페이지 대응을 해주지 않는다, 
                        //true 는 없는페이지를 동적으로 만들고 static 페이지를 만들어 다음부터는 정적 리소스를 제공한다.
    };
}

export async function getStaticProps(context){
    const id = context.params.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(API_URL);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name
        },
    };
}


