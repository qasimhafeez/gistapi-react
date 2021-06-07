import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

import useAction from "../actions/gistAction";

const Search = () => {
  const [userName, setUserName] = useState("");

  const { fetchSingleGistByUserName, fetchAllGists } = useAction();

  useEffect(() => {
    if (userName) {
      fetchSingleGistByUserName(userName);
    } else if (!userName || userName === "" || userName.length === 0) {
      fetchAllGists();
    }
  }, [userName]);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
