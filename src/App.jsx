import "./App.css"
import ArtBox from "./components/ArtBox"
import  Footer  from "./components/Footer"
import MyCat from "./components/Illustrations/MyCat"
import  Main  from "./components/Main"
import  MainHeader  from "./components/MainHeader"

function App() {

  return (
    <>
      <MainHeader/>
      <Main>
        <ArtBox artDescription="This is my cat, Sméagol for friends">
          <MyCat/>
        </ArtBox>
        <ArtBox artDescription="Illustration #2">
          <div style={{ backgroundColor: '#2eb9db', height: "100%" }}></div>
        </ArtBox>
        <ArtBox artDescription="Illustration #3">
          <div style={{ backgroundColor: '#9741dd', height: "100%" }}></div>
        </ArtBox>
        <ArtBox artDescription="Illustration #4">
          <div style={{ backgroundColor: '#53dd41', height: "100%" }}></div>
        </ArtBox>
      </Main>
      <Footer/>
    </>
  )
}

export default App
