import Nav from '../components/nav';
import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';

export function getPosts() {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
}

const IndexPage = ({ posts }) =>
  <>
    <Nav />
    {posts.map((post) => {
      return <li key={post.id}>{post.title}</li>
    })}
  </>


IndexPage.getInitialProps = async ({ query }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}
export default IndexPage;
