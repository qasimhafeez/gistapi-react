import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Gist from "./Gist";

import useAction from "../actions/gistAction";

const GistList = () => {
  const { fetchAllGists } = useAction();

  //fetch
  useEffect(() => {
    fetchAllGists();
  }, []);

  //redux store
  const gistsPublicList = useSelector((state) => state.gists.gistsPublicList);
  const singleGistByUserName = useSelector(
    (state) => state.gists.singleGistByUserName
  );
  const gistsPublicListError = useSelector(
    (state) => state.gists.gistsPublicListError
  );

  return (
    <RootGistsList>
      <h6 className="error">{gistsPublicListError && gistsPublicListError}</h6>
      {gistsPublicList?.map((gist, index) => (
        <Gist key={index} gist={gist} />
      ))}
      {/* {singleGistByUserName && (
				<section>
					{singleGistByUserName?.map((gist, index) => (
						<Gist key={index} gist={gist} />
					))}
				</section>
			)} */}
    </RootGistsList>
  );
};

const RootGistsList = styled.section`
  max-width: 500px;
  margin: 0 auto;
  .error {
    color: "red";
  }
`;

export default GistList;
