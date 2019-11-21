import React from 'react'
import Layout from '../layouts/Main';
import fetch from 'isomorphic-unfetch'

export function getPost (slug) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
  }

const PostPage = ({ post }) => (
  <Layout>
    <h1>hai</h1>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
  </Layout>
)

PostPage.getInitialProps = async ({ query }) => {
  console.log(query.slug);
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json[0] }
}

export default PostPage