import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../shared/Footer/Footer';
import LeftNav from '../shared/LeftNav/LeftNav';
import RightNav from '../shared/RightNav/RightNav';
import TopNav from '../shared/TopNav/TopNav';
import LatestHeadLine from '../shared/LatestHeadLine/LatestHeadLine';
import RightNavBanner from '../shared/RightNavBanner/RightNavBanner';

const Main = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <LatestHeadLine></LatestHeadLine>
                <TopNav></TopNav>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav><RightNavBanner></RightNavBanner></RightNav>
                    </Col>
                </Row>

            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;