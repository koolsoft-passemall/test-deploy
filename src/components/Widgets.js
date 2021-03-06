import { Box, CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { callApi } from '../services';
import { isAppDMV } from '../utils';
import Image from './Image';
const FixedContainer = (props) => {
    return (
        <React.Fragment>
            <Container fixed className={'fixed-container' + (props.className ? ' ' + props.className : '')} style={props.style} id="container">
                <Typography component="div">
                    {props.children}
                </Typography>
            </Container>
        </React.Fragment>
    );
}
const LoadingWidget = (props) => {
    let { color, width, height, fixed, style } = (props ? props : {});
    if (!color) {
        color = "var(--main-color)"
    }
    if(!style){
        style = { color: color, textAlign: "center", margin: "15px auto" };
        if (width) {
            style.width = width;
        }
        if (height) {
            style.height = height;
        }
    }
    if (fixed) {
        return (
            <Grid container justify="center" alignItems="center"
                style={{
                    position: 'fixed', width: '100%',
                    height: '100%', zIndex: 9999, backgroundColor: 'white'
                }}>
                <div style={style}><CircularProgress style={{ color: 'var(--main-color)' }} /></div>
            </Grid>
        );
    }
    return (
        <Grid container justify="center" alignItems="center" style={style}><CircularProgress color="inherit" /></Grid>
    );
}

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const LineProgress = ({ percent, size }) => {
    return (
        <Grid
            className="parent-line-progress-panel"
            container
            direction="row"
            alignItems="center"
        >
            <div className="line-progress-panel" style={{ 'height': size, 'width': 'calc(100% - 40px)' }}>
                <div style={{ 'width': percent + '%' }} className="content-line-progress-panel"></div>
            </div>
            <div style={{ 'width': '40px', 'textAlign': 'right' }}>
                {percent}%
                </div>
        </Grid>
    );
}
const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.click}></div> : null
);
const Modal = (props) => {
    return (
        <div>
            <Backdrop click={props.click} show={props.show}></Backdrop>
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? "1" : "0"
                }}>
                {props.children}
            </div>
        </div>
    )
}
const TitleBlock = ({ title = '', description = '', image = '' }) => {
    return (
        <div className="title-block">
            {image ? <Image src={image} /> : ''}
            <h2 className="title">{title}</h2>
            {description ? <p className="description" >{description}</p> : ''}
        </div >
    );
}

const ConnectAppStore = ({ appInfo }) => {
    return <div className="parent-app-info-name">
        <div className="app-info-name">
            <Image src={appInfo.avatar} alt={appInfo.appName} width="100px" height="100px" />
            <div className="app-child-name">
                <div className="title"><strong>{appInfo.appName}</strong></div>
                <Rating name="read-only" value={5} readOnly size="small" style={{ marginTop: '10px' }} />
            </div>
        </div>
        <div className="link-app-store">
            <a href={appInfo.urlAndroid} target="_blank" rel="noopener noreferrer">
                <Image alt="Link google app" src="/images/googlePlayIcon.png" />
            </a>
            <div style={{ width: '20px' }}></div>
            <a href={appInfo.urlIos} target="_blank" rel="noopener noreferrer">
                <Image alt="Link app store" src="/images/appStoreIcon.png" />
            </a>
        </div>
    </div>
}

const FAQLink = ({ style, className, appId }) => {
    if(isAppDMV(appId)){
        return <a style={style} className={className} href={"/faq?appId=" + appId} target="_blank">FAQ</a>
    }
    return null;
    // if(!appId){
    //     return null;
    // }
    // const [hasFAQ, setHasFAQ] = useState(null);
    // let elementId = "xxxxx-asdasdas-" + appId;
	// useEffect(() => {
    //     try {
    //         callApi({ url: '/new/api?type=detect-data&appId=' + appId, params: null, method: 'post' }).then((data) => {
    //             console.log("FAQLink data ", data['TOPIC_TYPE_FAQ'])
    //             data && setHasFAQ(!!data['TOPIC_TYPE_FAQ']);
    //             setTimeout(() => {
    //                 let element = document.createElement('div');
    //                 element.innerHTML = '<a style={style} className={className} href={"/faq?appId=" + appId} target="_blank">FAQ</a>';
    //                 document.getElementById(elementId).appendChild(element)
    //             }, 1000);
    //         }).catch((e) => {
    //             console.log("e 1", e)
    //         });
    //     } catch (e) {
    //         console.log("e 2", e)
    //     };
    // }, [appId])
    // return <div id={elementId}></div>
    // console.log("hasFAQ", hasFAQ)
	// if(!hasFAQ){
	// 	return null;
	// }
	// return <a style={style} className={className} href={"/faq?appId=" + appId} target="_blank">FAQ</a>
}

export { TitleBlock, FixedContainer, LoadingWidget, TabPanel, LineProgress, Modal, ConnectAppStore, FAQLink };
