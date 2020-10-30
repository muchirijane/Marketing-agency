import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Button} from '../../GlobalStyles';
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
} from './InfoSection.elements';

function InfoSection ({
    lightBg, 
    imgStart, 
    lightTopLine,
    lightText,
    lightTextDec, 
    buttonLabel,
    description,
    headLine, 
    topLine, 
    primary,
    start,
    img,
    alt
}) {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                  <InfoRow imgStart={imgStart}>
                      <InfoColumn>
                          <TextWrapper>
                              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headLine}</Heading>
                              <Subtitle lightTextDec={lightTextDec}>{description}</Subtitle>
                              <Link to='/sign-up'>
                                <Button primary={primary} fontBig big>
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