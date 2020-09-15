import React from 'react';
import { Link } from 'react-router-dom';
import { 
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrapper, 
    Img 
} from './infoSection.elements';
import { Container, Button } from '../../globalStyles';

const InfoSection = ({ 
    primary,
    lightBackground, 
    imgStart, 
    lightTopLine, 
    lightTextDescription, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine,
    start,
    img,
    alt
}) => {
    return (
        <>
            <InfoSec lightBackground={lightBackground}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDescription={lightTextDescription}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;
