import React from 'react'
import { lazy, Suspense } from 'react';

const Main = lazy(() => import('../components/Main'));
const Row = lazy(() => import('../components/Row'));

const Home = () => {
  return (
    <>
        <Suspense fallback={<div>Loading....</div>}>
          <Main />
        </Suspense>
        <Suspense fallback={<div>Loading....</div>}>
          <Row rowID='1' title='Popular TV Shows'/>
          <Row rowID='2' title='Popular Movies'/>
          <Row rowID='3' title='Trending Now'/>
          <Row rowID='4' title='Top Movie Franchises'/>
          <Row rowID='6' title='Bollywood Box Office Hits'/>
          <Row rowID='7' title='Watch with the Family'/>
          <Row rowID='8' title='Pakistani Short Films'/>
          <Row rowID='9' title='House of Horror'/>
          <Row rowID='10' title='Based on Comic-books'/>
          <Row rowID='11' title='Bond, James Bond'/>
          <Row rowID='12' title='STARZ Originals'/>
          <Row rowID='13' title='Action Movies'/>
          <Row rowID='14' title='Full Boxsets'/>
          <Row rowID='15' title='Must-See Movies'/>
          <Row rowID='16' title='Recent Bollywood Releases'/>
          <Row rowID='17' title='Must-See Movies'/>
          <Row rowID='18' title='Comedy Movies'/>
          <Row rowID='19' title='Boxsets to Discover'/>
          <Row rowID='20' title='Romantic Comedies'/>
          <Row rowID='21' title='International Short Films'/>
        </Suspense>
    </>
  )
}

export default Home