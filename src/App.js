import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Card from './components/card/Card';
import Catalog from './pages/catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Layout>
        <Catalog></Catalog>
      </Layout>

    </div>
  );
}

export default App;
