/*Libs*/
import styled from 'styled-components';

const WorksGallery = (props) => {
  return (
    <Wrapper>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Wrapper>
  );
};

export default WorksGallery;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  border: 1px solid red;
`;
