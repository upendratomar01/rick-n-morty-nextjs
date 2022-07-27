import { GetServerSidePropsContext } from 'next';
import Spinner from '../components/spinner/spinner';

export function Index() {
  return <Spinner />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    redirect: {
      permanent: true,
      destination: '/characters',
    },
  };
}
export default Index;
