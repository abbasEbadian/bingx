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

  if (window.innerWidth < 768) {

    return (
      <HomeWrapper className="App">
        <Heading/>
        <Silder/>
        <Utils/>
        <CryptoList/>
        <Footer />
      </HomeWrapper>

    );
  } else {
    return (

       <div className="alert alert-danger mt-5">
          <p className="text-center ">
               please enter with mobile or tablet device (maximum : 768px)
          </p>
       </div>
    )


  }

}

export default App;
