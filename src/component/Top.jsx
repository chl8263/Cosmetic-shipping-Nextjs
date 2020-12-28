import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = ({ Component, pageProps }) => {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20 }}>
                <div style={{ flex: "100px 0 0" }}>
                    <img src="/images/logo.png" alt="logo" style={{ display: "block", width: 80 }}/> {/* public 밑에 파일들을 넣어두면 정적으로 가져다 쓸 수 있다. */}
                </div>
                <Header as="h1">Ewan</Header>
            </div>
            <Gnb />
        </div>
    )
  }
  
  export default Top;