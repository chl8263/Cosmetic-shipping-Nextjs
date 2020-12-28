import { Header } from "semantic-ui-react";

const Top = ({ Component, pageProps }) => {
    return (
      <div>
         <img src="/images/logo.png" alt="logo"/> {/* public 밑에 파일들을 넣어두면 정적으로 가져다 쓸 수 있다. */}
        <Header as="h1">Ewan</Header>
      </div>
    )
  }
  
  export default Top;