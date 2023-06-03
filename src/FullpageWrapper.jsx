import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Details from './Components/Details'

const FullpageWrapper = ({ data, artist }) => (
  <ReactFullpage
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {data.map((item, i) => (
            <Details item={item} artist={artist} key={i} />
          ))}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default FullpageWrapper;
