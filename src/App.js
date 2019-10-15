import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BowlBuilder from './containers/BowlBuilder/BowlBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BowlBuilder />
      </Layout>
    </div>
  );
}

export default App;
