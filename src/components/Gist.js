import styled from "styled-components";
import moment from "moment";
const Gist = ({ gist }) => {
  const { owner, created_at, updated_at, description, files } = gist;
  return (
    <RootGist>
      <section className="upperbar">
        <section className="leftside">
          <img src={owner?.avatar_url} alt={owner?.avatar_url} />
          <h2>{owner?.login}</h2>
        </section>
        <section className="rightside">
          <p>{files && Object.keys(files).length} Files</p>
          <p>Forks</p>
          <p>Comments</p>
          <p>Stars</p>
        </section>
      </section>
      <section className="dates">
        <p>Created At: {moment(created_at).format("DD/MM/YYY")}</p>
        <p>Last updated: {moment(updated_at).format("DD/MM/YYY")}</p>
      </section>
      <p className="description">{description}</p>
      <ul className="files">
        {files &&
          Object.keys(files).map((file, index) => <li key={index}>{file}</li>)}
      </ul>
    </RootGist>
  );
};
const RootGist = styled.section`
  max-width: 600px;
  border-bottom: 1px solid #999898;
  padding: 10px 15px;
  .upperbar {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 10px;

    .leftside {
      justify-self: start;
      display: flex;
      align-items: center;
      img {
        width: 25px;
        border-radius: 50%;
        margin-right: 10px;
      }
      h2 {
        font-size: 12px;
      }
    }
    .rightside {
      justify-self: end;
      display: flex;
      align-items: center;
      p {
        font-size: 10px;
        color: #28669c;
        margin: 0 7px;
      }
    }
  }
  .dates {
    display: flex;
    align-items: center;
    p {
      font-size: 10px;
      color: #3d3d3d;
    }
    p:nth-child(1) {
      margin-right: 10px;
    }
  }
  .description {
    font-size: 15px;
  }
  .files {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style-type: none;
    li {
      font-size: 10px;
      color: #28669c;
      margin-right: 12px;
    }
  }
`;

export default Gist;
