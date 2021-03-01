import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Content from './components/Content/Content';
import Login from './components/Login/Login';
import LoginTitle from './components/Login/LoginTitle';
import Form from './components/Forms/Form';

function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
      <section>
        <Content>
          <Login>
            <LoginTitle ti="Sign in to your account" pa="Or " re="start your free trial"></LoginTitle>
            <Form></Form>
          </Login>
        </Content>        
      </section>
    </section>
  );
}

export default App;
