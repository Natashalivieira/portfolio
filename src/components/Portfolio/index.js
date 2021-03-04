import React from 'react';
import { PortfolioContainer, PortfolioH1, PortfolioWrapper, PortfolioCard, PortfolioH2, PortfolioIcon, PortfolioP} from './PortfolioElements';
import Icon1 from '../../images/undraw_career_development_oqcb.svg';
import Icon2 from '../../images/about.svg';
import { Element } from 'react-scroll';

const Portfolio = () => {
    return (
        <Element id="myportfolio">
            <PortfolioContainer>
                <PortfolioH1>My Portfolio</PortfolioH1>
                <PortfolioWrapper>
                    <PortfolioCard to="myportfolio">
                        <PortfolioIcon src={Icon1}/>
                        <PortfolioH2>Automotive Industry</PortfolioH2>
                        <PortfolioP>I make engineering projects succeed</PortfolioP>
                    </PortfolioCard>
                    <PortfolioCard to="myportfolio">
                        <PortfolioIcon src={Icon2}/>
                        <PortfolioH2>Digital Products</PortfolioH2>
                        <PortfolioP>I code and create functional designs</PortfolioP>
                    </PortfolioCard>
                </PortfolioWrapper>
            </PortfolioContainer>
        </Element>
    )
}

export default Portfolio;
