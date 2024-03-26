/*Components*/
import MainScreenSection from '@/components/sections/main-screen.section';
import WorksSection from '@/components/sections/works.section';

/*Page*/
const HomePage = () => {
  return (
    <>
      <MainScreenSection />
      <WorksSection />
    </>
  );
};

/*Static Props*/
export const getStaticProps = async (context) => ({
  props: {
    messages: (await import(`@/messages/${context.locale}.json`)).default,
  },
});

export default HomePage;
