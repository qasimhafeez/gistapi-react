import styled from "styled-components";

const Gist = ({ gist }) => {
  const { owner } = gist;
  return (
    <RootGist>
      <h2>{owner?.login}</h2>
    </RootGist>
  );
};
const RootGist = styled.section`
  h2 {
    color: red;
  }
`;

export default Gist;
