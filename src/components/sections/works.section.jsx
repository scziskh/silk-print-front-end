/*Libs*/
import styled from 'styled-components';

/*Layouts */
import Container from '@/layouts/container';

/*Components*/
import WorksGallery from '../works-gallery';
import ButtonLink from '../link/button.link';
import { useTranslations } from 'next-intl';

const WorksSection = (props) => {
  const t = useTranslations('WorksSection');
  return (
    <Wrapper>
      <Container>
        <h2>{t('header')}</h2>
        <WorksGallery />
        <ButtonLink label={t('link')} href="/services" />
      </Container>
    </Wrapper>
  );
};

export default WorksSection;

const Wrapper = styled.section`
  width: 100%;
  h2 {
    margin-bottom: 0;
    text-align: center;
  }
  & > div {
    display: grid;
    gap: 24px;
    a {
      margin: auto;
    }
  }
`;
