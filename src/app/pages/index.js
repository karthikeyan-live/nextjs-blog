import React from 'react'
import Layout from '../layouts/Main';
import fetch from 'isomorphic-unfetch'

import Post from '../components/Post'

export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
}

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(p => (
        <Post key={p.title} post={p} />
      ))}
    </ul>
  </Layout>
)

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage