import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Gists from "./Gist";

import useAction from "../actions/gistAction";

const GistList = () => {
  const { fetchAllGists } = useAction();

  // On page load fetch all the public gists
  useEffect(() => {
    fetchAllGists();
  }, []);

  // Redux Store
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
    </RootGistsList>
  );
};

const RootGistsList = styled.section`
  .error {
    color: "red";
  }
`;

export default GistList;
