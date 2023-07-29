
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Welcome to Blogify</Typography>
                <Text variant="h5">Welcome to our blog website, where you can share your thoughts, insights, and stories with the world! We believe that everyone has a unique perspective to offer, and we are excited to provide a platform for you to do just that. Our blog website is designed to be user-friendly and accessible to anyone who wants to write. Whether you're an experienced blogger or just starting out, we have everything you need to create a high-quality post that will engage and inform your readers.
                <br />
                {/* User-friendly interface for seamless navigation */}
            
                    <Box component="span" style={{ marginLeft: 5 }}>
                        {/* <Link href="" color="inherit" target="_blank"><GitHub /></Link> */}
                    </Box>
                </Text>
                <Typography variant="h4">Top Features</Typography>
                <Text variant="h5">🔹User-friendly interface for seamless navigation</Text>
                <Text variant="h5">🔹authentication  for secure access</Text>
                <Text variant="h5">🔹  CRUD (Create, Read, Update, Delete) operations for blog posts</Text>
                <Text variant="h5">🔹 Responsive design for optimal performance on all devices</Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;