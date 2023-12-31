import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import MovieEvaluation from '../public/images/works/movie_evaluation_platform.png'
import Onix from '../public/images/works/onix.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={8} mt={10} textAlign="center">
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={8}>
        <Section>
          <WorkGridItem 
           id="movie-evaluation-platform" 
           title="Movie Evaluation Platform" 
           thumbnail={MovieEvaluation}
           githubLink="https://github.com/Altrocore/movie-evaluation-platform"
           >
          Dive into a community-driven feedback hub where movie buffs share their thoughts and recommendations. Explore diverse perspectives and make informed choices for your next movie night.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="onix"
            title="Onix"
            thumbnail={Onix}
            githubLink="https://github.com/Altrocore/sprint-frontend"
          >
            E-commerce website to buy jewelry
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'