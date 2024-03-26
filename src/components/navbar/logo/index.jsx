/*Libs*/
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = () => {
  const tLogo = useTranslations('Logo');
  return (
    <Wrapper>
      <Link href="/">
        <Image src="/assets/logo.svg" alt={tLogo('alt')} title={tLogo('title')} width={155} height={40} />
      </Link>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  width: 155px;
  height: 40px;
`;
