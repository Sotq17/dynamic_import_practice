import { useState } from 'react';
import Layout from '../components/Layout'

import dynamic from "next/dynamic";

// import List from '../components/List'
// import ListSecondary from '../components/ListSecondary'
const List = dynamic(() => import( '../components/List'))
const ListSecondary = dynamic(() => import( '../components/ListSecondary'), { loading: () => <p>loading...</p> })



const AboutPage = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle ?  <List /> : <ListSecondary />}
    </Layout>
  )
}

export default AboutPage
