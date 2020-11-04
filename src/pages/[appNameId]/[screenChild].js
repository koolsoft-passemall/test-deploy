import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
const StudyViewScreen = dynamic(() => import('../../container/study/Study.View'), { ssr: false })
const TestViewScreen = dynamic(() => import('../../container/test/Test.View'), { ssr: false })
const ReviewViewScreen = dynamic(() => import('../../container/review/Review.View'), { ssr: false })
import Head from 'next/head';
import configStore from '../../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useRouter } from 'next/router';
import Routes from '../../routes';
import ReactGA from 'react-ga';
import { oldUser } from '../../utils';
import { callApi } from '../../services';
initializeReactGA();
function initializeReactGA() {
    ReactGA.initialize('UA-167769768-1');
}
const Screen = ({ appInfoState }) => {
    useEffect(() => {
        // setScrollDownAuto()
        oldUser()
    }, [])
    console.log("xxx appInfoState,", appInfoState)
    const store = configStore();
    return (
        <>
            <Head>
                <title>{appInfoState.title}</title>
                <link rel="icon" href={appInfoState.avatar} />
                <link rel="preconnect" href="https://webappapi-dot-micro-enigma-235001.appspot.com"></link>
                <link rel="stylesheet" type="text/css" href="/styles/game.css" />
                <link rel="stylesheet" type="text/css" href="/styles/review.css" />
                <link rel="stylesheet" type="text/css" href="/styles/test.css" />
                <link rel="stylesheet" type="text/css" href="/styles/study.css" />
                <link rel="stylesheet" type="text/css" href="/styles/header.css" />
                <meta property="og:type" content="website" />
                <meta name="title" content={appInfoState.title} />
                <meta name="description" content={appInfoState.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content={appInfoState.keywords} />
            </Head>
            <Provider store={store.store}>
                <PersistGate
                    persistor={store.persistor}
                >
                    <ScreenChild appInfoState={appInfoState} />;
                </PersistGate>
            </Provider>
        </>
    )
}

export async function getStaticProps(context) {
    const directoryUserRate = path.join(process.cwd(), 'src/data/userRatePerfect.json')
    let userRateFile = fs.readFileSync(directoryUserRate);
    const useRateJSON = Object.values(JSON.parse(userRateFile));

    let appId = appInfoState.id
    let userRateState = [];
    useRateJSON.forEach((u) => {
        let userRate = UserRate.fromJS(u);
        if (appId === userRate.appId) {
            userRateState.push(userRate);
        }
    });
    return {
        props: {
            appInfoState: appInfoState, appInfoState: appInfoState,
            userRateState: JSON.stringify(userRateState),
        }
    }
}
export async function getStaticPaths() {

    const arrayAppNameId = ["dmv-permit-practice-test-2020", "ati-teas-vi-practice-test", "ged-practice-test-free-2020", "comptia-network-exam-training"
        , "comptia-a-exam-training", "hesi-a2-practice-test-free-2020", "pmp-exam-prep-6th-edition", "cissp-practice-test-free-2020", "g1-practice-test-2020", "motorcycle-permit-practice-test",
        "driving-theory-uk-practice-test-2020", "comptia-security-exam-training", "ptcb-pharmacy-technician-certification-exam-prep", "cdl-practice-test-2020", "asvab-practice-test-2020", "dkt-nsw-learner-car-practice-test-2020"
        , "cna-practice-test-free-2020", "real-estate-license-exam-prep", "college-board-accuplacer-study-app"]
    return {
        paths: arrayAppNameId.map(id => (
            { params: { appNameId: id } }
        )),
        fallback: false
    }
}
function ScreenChild({ appInfoState }) {
    const router = useRouter();
    const { practice, appNameId, screenChild } = router.query
    let screen = screenChild
    screen = screen ?? '';
    if (screen.startsWith(Routes.TEST_SCREEN)) {
        let offset = screen.lastIndexOf('-');
        let topicId = -1;
        if (offset > -1) {
            offset += 1;
            topicId = offset > -1 ? parseInt(screen.substring(offset, screen.length)) : -1;
        }
        return <TestViewScreen topicId={topicId} appInfoState={appInfoState} />
    }
    if (screen.startsWith(Routes.REVIEW_SCREEN)) {
        return <ReviewViewScreen appInfoState={appInfoState} />
    }
    if (screen.length > 0) {
        return <StudyViewScreen appInfoState={appInfoState} />
    }
}
export default Screen