import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'

// Component 는 현재 페이지를 의미한다. 페이지 전환시에 이 Component props 가 변경된다.
// pageProps 는 데이터 fetching 을 이용해 미리 가져온값, 이걸 사용하지 않는다면 빈 객체가 전달됨
const MyApp = ({ Component, pageProps }) => { 
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp


/**
 * _app.js 를 이용하면
 * 페이지 전환시 상태값을 유지할 수 있다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
 * 글로벌 CSS를 이곳에 선언한다.
 */