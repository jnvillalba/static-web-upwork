import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Details from './Details'

const FullPageWrapper = ({ data, artist }) => (
  <ReactFullpage
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {data.map((item, i) => (
            <Details item={item} artist={artist} key={i} data={data} />
          ))}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default FullPageWrapper;