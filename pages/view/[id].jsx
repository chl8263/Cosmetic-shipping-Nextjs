import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = ({ item, name }) => {
  
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

export async function getServerSideProps(context){
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




/**
 * Next.js 는 모든 페이지를 사전 렌더링함
 * 더 좋은 퍼포먼스
 * 검색엔진촤적화(SEO)
 * 
 * 1.정적 생성
 * 2.Server Side Rendering (SSR, Dynamic Rendering)
 * 
 * 차이점은 언제  html 파일을 생성하는가
 * 
 * [정적 생성]
 * - 프로젝트가 빌드하는 시점에 html파일들이 생성
 * - 모든 요청에 재사용
 * - 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
 * - 정적 생성된 페이지들은 CDN에 캐시
 * - getStaticProps / getStaticpaths
 * 
 * [서버사이드 렌더링]은 매 요청마다 html 을 생성
 * - 항상 최신 상태 유지
 * - getServerSideProps
 */



// import axios from 'axios';
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react';
// import { Loader } from 'semantic-ui-react';
// import Item from '../../src/component/Item';

// const Post = ({ item }) => {
//   const router = useRouter()
//   const { id } = router.query
//   const [item, setItem] = useState({});
//   const [isLoading, setIsLoading] = useState(true);



//   const getData = () => {
//     axios.get(API_URL).then(res => {
//         setItem(res.data);
//         setIsLoading(false);
//     });
//   };

//   useEffect(() => {
//     if(id && id > 0){
//         getData();
//     }
//   }, []);

//   return (
//       <>
//         {isLoading && (
//             <>
//             <div style={{padding: "300px 0"}}>
//                 <Loader inline="centered" active>
//                     loading
//                 </Loader>
//             </div>
//             </>
//         )}

//         {!isLoading && 
//             (<Item item={item}/>
//         )}
//       </>
//   );
// }

// export default Post;