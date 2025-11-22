import Header from '@/components/Header/Header';
import SectionMain from '@/components/sections/SectionMain';
import SectionResize from '@/components/sections/SectionResize';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>신테카바이오 - Syntekabio</title>
        <meta name='description' content='신테카바이오 홈페이지입니다. 면접 과제용으로 제작된 샘플 페이지입니다.' />
        <meta name='keywords' content='신테카바이오, Syntekabio' />
        <meta property='og:title' content='신테카바이오 - Syntekabio' />
        <meta property='og:description' content='신테카바이오 홈페이지입니다.' />
        <meta property='og:image' content='/image/logo.png' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='신테카바이오 - Syntekabio' />
        <meta name='twitter:description' content='신테카바이오 홈페이지입니다.' />
        <link rel='canonical' href='https://syntekabio.com' />
      </Head>
      <SectionResize>
        <a href='#main-content' className='skip-link'>
          메인 콘텐츠로 건너뛰기
        </a>
        <Header />
        <main id='main-content'>
          <SectionMain />
        </main>
      </SectionResize>
    </>
  );
}
