import NextLink from 'next/link'
import { 
    Link,
    Container,
    Box, 
    Heading,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogogTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const Home = () => {
    return (
        <Container>
            <Box 
             borderRadius="lg"
             mb={6}
             p={3}
             textAlign="center"
             bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
             css={{ backdropFilter: 'blur(10px)' }}
            >
                Hello, I&apos;m a full-stack developer
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Daniel Shepelev
                    </Heading>
                    <p>(Developer / Trader / Scientist)</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                        src="/images/daniel.jpg"
                        alt="Profile image"
                        borderRadius="full"
                        width="100"
                        height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                Work
                </Heading>
                <Paragraph>
                Daniel is a full-stack developer with a
                passion for building web-applications. He has a knack
                for all things launching products, from planning and designing all the
                way to solving real-life problems with code. 
                </Paragraph>
                <Box align="center" my={4}>
                <Button
                    as={NextLink}
                    href="/works"
                    scroll={false}
                    rightIcon={<ChevronRightIcon />}
                    colorScheme="teal"
                >
                    My portfolio
                </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                Bio
                </Heading>
                <BioSection>
                <BioYear>2003</BioYear>
                Born in Mariupol, Ukraine.
                </BioSection>
                <BioSection>
                <BioYear>2019</BioYear>
                Reached the republican level of the Small Academy of Sciences of Ukraine with a project of a smart drinker for animals. Additionally, with this project, I received a prize from investors at the IntelTechno competition.
                Won the Mariupol informatic olympiad
                </BioSection>
                <BioSection>
                <BioYear>2021</BioYear>
                Completed the Mariupol Technical Liceum
                </BioSection>
                <BioSection>
                <BioYear>2023</BioYear>
                Started education in Keyin College (Software Development)
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                My hobies
                </Heading>
                <Paragraph>
                Science, Music, BioInformatic, Chess, Computer Games
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'