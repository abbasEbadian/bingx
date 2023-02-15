import Heading from "./components/Heading";
import Utils from "./components/Utils";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";
import Silder  from "./components/Silder";
import styled from "styled-components";

const HomeWrapper = styled('div')`
  padding: 12px;
`
function App() {


    return (
      <HomeWrapper className="App">
        <Heading/>
        <Silder/>
        <Utils/>
        <CryptoList/>
        <Footer />
      </HomeWrapper>

    );
  

}

export default App;
