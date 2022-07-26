import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router?.pathname == '/') {
      router.push('/characters');
    }
  }, [router]);
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome rick-n-morty 👋
            </h1>
            <br />{' '}
            <h2>
              Go to <Link href="/characters">Characters</Link>
            </h2>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
