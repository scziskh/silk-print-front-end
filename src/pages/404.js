const NotFound = () => {
  return <div></div>;
};

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`@/messages/${context.locale}.json`)).default,
    },
  };
}

export default NotFound;
