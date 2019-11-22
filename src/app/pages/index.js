import Nav from '../components/nav';
import React, { useEffect, useState } from 'react';
import data from '../data.json';
import ListItem from '../components/ListItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    cards: {
      marginBottom: '20px',
      marginRight: '50px',
      width: '70%',
    },
    container: {
      display: 'flex',
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingTop: '100px',
    },
    menu: {
      width: '30%',
    },
  })
);

const IndexPage = ({ posts }) => {
  const classes = useStyles();
  const [visiblePosts, setVisiblePost] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(0);
  const [authorDetails, setauthorDetails] = useState({ firstName: '', lastName: '' });
  return (
    <>
      <Nav />
      <div className={classes.container}>
        <div className={classes.cards}>
          {posts.map((post) => {
            return (
              <ListItem
                key={post.id}
                {...post}
              />
            );
          })}
        </div>
        <div className={classes.menu}>
          {/* <AuthorCard  /> */}
        </div>
      </div>
    </>);
}

IndexPage.getInitialProps = async ({ query }) => {
  return data;
}
export default IndexPage;
