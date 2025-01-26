import React, { useState, Fragment } from "react";
import {
    Container,
    ProgressBar,
    ScrollContent,
} from "./Styles";
import Header from './Component/Header';
import CarouselEx from "./Component/Carousel";
import BasicTabs from "./Component/BasicTabs";
import ButtonBaseDemo from "./Component/ButtonBaseDemo";
import AccordionEx from "./Component/AccordionEx";
import SearchComponent from "./Component/SearchComponent";
import Footer from "./Component/Footer";
import Frame from "./Component/Frame";
const HomeMain = () => {
    const [scroll, setScroll] = useState(0);
 
    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };
 
    window.addEventListener("scroll", onScroll);
 
    return (
        <Fragment>
            <Container>
                <ProgressBar
                    style={{ width: `${scroll}%` }}
                ></ProgressBar>
            </Container>
            <ScrollContent>
                <Header />
                <CarouselEx />
                <BasicTabs />
                <ButtonBaseDemo />
                <AccordionEx />
                <Frame />
                <SearchComponent />
                <Footer />
            </ScrollContent>
        </Fragment>
    );
};
 
export default HomeMain;