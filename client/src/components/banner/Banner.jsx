
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://wallpaperaccess.com/full/2433830.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>BLOG</Heading> */}
            {/* <SubHeading>Journey into the realm of knowledge, where ideas take flight</SubHeading> */}
        </Image>
    )
}

export default Banner;