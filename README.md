Cellit client
=============

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

create-next-app 으로 설치하면
1. 컴파일과 번들링이 자동으로 된다. (webpack과 babel)
2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다.
3. 서버사이드 렌더링이 지원된다.
4. static 파일을 지원한다.

## Getting Started

먼저, craete-next-app 를 설치한다. 

```bash
npx craete-next-app nextjs-tutorial
```

nextjs-tutorial 가 설치된 경로로 들어가서 실행한다.
```bash
cd nextjs-tutorial
# and
npm run dev
```

브라우저로 [http://localhost:3000](http://localhost:3000) 에 접속한다.

`pages/index.js` 에서 바로 page를 수정할 수 있고 페이지는 파일이 수정될때 자동으로 업그레이드 됩니다.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Page Layout

pages 아래의 ___app.js__ 는 전헤화면의 Layout을 잡는데 사용된다.

___app.js 를 사용하면 :__

 * 페이지 전환시 상태값을 유지할 수 있다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
 * 글로벌 CSS를 이곳에 선언한다.

```javascript
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'

// Component 는 현재 페이지를 의미한다. 페이지 전환시에 이 Component props 가 변경된다.
// pageProps 는 데이터 fetching 을 이용해 미리 가져온값, 이걸 사용하지 않는다면 빈 객체가 전달됨
const MyApp = ({ Component, pageProps }) => { 
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
```

## Dynamic Routes

Next.js 는 Dynamic Route 를 지원합니다.

Pages Directory밑에 경로를 기준으로 Dynamic Route 를 생성합니다.

예를들어 `Pages/view/[id].js` 의 경로의 js 파일을 만들면, 400 이라는 id 값을 가진 `http://localhost:3000/view/400` 의 경로로 접속할 수 있습니다. 

중요한것은 `[]` 를 꼭 감싸주어야 Dynamic Route가 적용됩니다.

## next/link

Link 를 이용하여 Page를 이동할 수 있습니다.
`<Link>` component 를 선언하고 그 안에 `<a>` 태그를 이용하여 클릭시 해당 page로 routing 합니다.

`location.href = "/about"` 을 이용하여 page를 routing 해도 되지만 페이지가 새로고침되어 넘어가기 때문에 framework의 장점을 이용할 수 없고, 만약 Redux를 이용하여 상태관리를 하고있다면 그 상태들이 전부 지워지게 됩니다.

```javascript
<Link href={`/view/${item.id}`}>
    <a>
        <div className={styles.wrap}>
    </a>
</Link>
```

## Serverside

 * Next.js 는 모든 페이지를 사전 렌더링함
 * 더 좋은 퍼포먼스
 * 검색엔진촤적화(SEO)
 * Server Side Rendering (SSR, Dynamic Rendering)
 * 차이점은 언제  html 파일을 생성하는가

### [정적 생성]
 - 프로젝트가 빌드하는 시점에 html파일들이 생성
 - 모든 요청에 재사용
 - 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
 - 정적 생성된 페이지들은 CDN에 캐시
 - getStaticProps / getStaticpaths

### [서버사이드 렌더링]은 매 요청마다 html 을 생성
 - 항상 최신 상태 유지
 - getServerSideProps


```javascript
import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = ({ item }) => {
  
  return (
      <>
        {item && (
            <Item item={item}/>
        )}
      </>
  );
}

export default Post;

export async function getServerSideProps(context){
    const id = context.params.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(API_URL);
    const data = res.data;

    return {
        props: {
            item: data,
        },
    };
}
```

## Error page

### 404
* 404에러 페이지
* 이 파일은 build 시 정적으로 생성되어 제공됨
* 404.js 로 페이지를 만들 시 next.js 가 자동으로 404에러를 감지하여 페이지를 제공함

```javascript
import { Icon } from "semantic-ui-react";

const Error404 = ({  }) => {
    return (
        <>
            <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
                <Icon name="warning circle" color="red" />
                404 : 페이지를 찾을 수 없습니다.
            </div>
        </>
    )
  }
  
export default Error404;
```
