import React from 'react';
import Layout from '@theme/Layout';

export default function Playground() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/playground.tsx</code> and save to reload.
          TODO: Python editor, execution via Pyodide
        </p>
      </div>
    </Layout>
  );
}