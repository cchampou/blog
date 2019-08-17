import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Poster from './Poster';

const Wrapper = styled('div')`
  display: flex;
  width: calc(100% + 10px);
  margin: -5px;
  overflow-x: hidden;
`;

const PosterList = () => {
  const [articles, setArticles] = useState([{ _id: 2 }, { _id: 3 }, { _id: 4 }]);

  const fetchData = async () => {
    const res = await axios.get('https://cockpit.cchampou.me/api/collections/get/posts?token=a6755efa6ea9316c6c0a94a9d97053');
    setArticles(res.data.entries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      {articles.map(article => <Poster {...article} key={article._id} />)}
    </Wrapper>
  );
};

export default PosterList;
