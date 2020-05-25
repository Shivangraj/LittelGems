import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout/layout'
import PaperCard from '../components/UI/PaperCard'
import Grid from '../components/UI/Grid'
import Section from '../components/UI/Section'
import GooglePlayButton from '../components/UI/GooglePlayButton'

import {
  earthNA,
  openBook,
  paperAndPencil,
  hammer,
  gettingStarted,
  tv,
} from '../utils/svg'

import dictionary from '../assets/pages/home/dictionary.svg'
import map from '../assets/pages/home/map.svg'
import upvotedTools from '../assets/pages/home/upvoted-tools.svg'
import videos from '../assets/pages/home/videos.svg'
import weather from '../assets/pages/home/weather.svg'

const featureListContent = [
  {
    label: 'Browse FPV flying spots on the map and share your own',
    image: map,
    link: '/fpv-map/',
  },
  {
    label: 'Watch videos and photos from FPV spots',
    image: videos,
    link: '/videos/',
  },
  {
    label: 'Live wind and weather conditions',
    image: weather,
    link: '/weather/',
  },
  {
    label: 'Beginner friendly FPV dictionary',
    image: dictionary,
    link: '/dictionary/',
  },
  {
    label: 'Recommended tools, upvoted by the community',
    image: upvotedTools,
    link: '/tools/',
  },
]

const pageList = [
  {
    image: earthNA,
    link: '/fpv-map/',
    title: 'Games',
  },
  {
    image: paperAndPencil,
    link: '/blog/',
    title: 'Learn',
  },
  {
    image: tv,
    link: '/videos/',
    title: 'Ryms',
  },
  {
    image: gettingStarted,
    link: '/getting-started/',
    title: 'Getting started',
  },
  {
    image: hammer,
    link: '/tools/',
    title: 'Tools',
  },
  {
    image: openBook,
    link: '/dictionary/',
    title: 'Dictionary',
  },
]

const helmetStrings = {
  title: 'Fpvtips',
  keywords:
    'transmitter, receiver, fpv spot, fpv footage, drone pictures, quad build, build a drone, custom drone build, micro, mini, BNF, bind and fly, plug and play, set, soldering iron, fpv, quad, drone, community, dictionary, fpv terms, fpv blog, fpv getting started, fpv tools, tools, vtx, receiver, battery, flight controller, fc, quad builder, map, places, fpv video, fpv pictures, fpv freestyle, fpv drone',
}

const Intro = styled.div`
  margin: -1rem;
  padding: 1rem;
  background-color: #fafafa;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='71' height='71' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d5d5d5' fill-opacity='0.07'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.07'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  /* background by SVGBackgrounds.com */
`

const Bio = styled.div`
  margin: -1rem;
  padding: 3.5rem 1rem;
  background-color: #fafafa;

  img {
    width: 7rem;
    border-radius: 12px;
  }

  p {
    text-align: left;
    max-width: 70ch;
    margin: 0 auto;
  }

  a {
    font-size: 1rem;
  }

  .video-wrapper {
    max-width: 70ch;
    margin: 2rem auto 0;
  }

  video {
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: auto;
    z-index: -100;
    max-width: 70ch;
    cursor: pointer;
  }
`

const StyledFeatureList = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;

    img {
      height: 10rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;

    h2 {
      grid-column: span 2;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;

    h2 {
      grid-column: span 3;
    }
  }
`

class IndexPage extends React.Component {
  handleBioVideoClick = e => {
    e.target.pause()
    e.target.currentTime = 0
    e.target.load()
  }

  render() {
    // Break down home page section into 2
    let { edges: homePageSections } = this.props.data.allHomePageSectionsJson
    let firstHomePageSection = homePageSections[0]
    let restHomePageSections = homePageSections.filter((item, index) => {
      if (index > 0) {
        return item
      } else {
        return null
      }
    })

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={helmetStrings.title}
          meta={[
            {
              name: 'keywords',
              content: helmetStrings.keywords,
            },
          ]}
        />
        <div>
          <Intro>
            <h1
              style={{
                color: 'rgba(1, 115, 221, 0.86)',
                textTransform: 'uppercase',
              }}
            >
              Lear With Fun - Littel Gems
            </h1>
            <Grid col600="2" col900="2" col1200="3">
              {pageList.map((page, index) => (
                <Link key={index} to={page.link}>
                  <PaperCard hoverable="true" scale="true">
                    <img
                      src={page.image}
                      style={{ width: '150px' }}
                      alt={page.title}
                    />
                    <br />
                    <span
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        color: '#0469c1',
                      }}
                    >
                      {page.title}
                    </span>
                  </PaperCard>
                </Link>
              ))}
            </Grid>
    
            {/* Render first home page section standalone */}
            {firstHomePageSection && firstHomePageSection.node && (
              <div style={{ marginTop: '3rem' }}>
                <Section data={firstHomePageSection.node} />
              </div>
            )}
            <div style={{ padding: '3rem 0' }}>
              <StyledFeatureList>
                <h2>Features:</h2>
                {featureListContent.map(({ label, image, link }) => (
                  <div key={label}>
                    <Link to={link}>
                      <img src={image} alt={label} />
                      <p>{label}</p>
                    </Link>
                  </div>
                ))}
              </StyledFeatureList>
            </div>
          </Intro>
          {/* Render the rest of the home page sections, except the first one */}
          {restHomePageSections.map(section => (
            <Section key={section.node.id} data={section.node} />
          ))}

          {/* Bio section */}

          
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const homePageSectionsQuery = graphql`
  query homePageSectionsQuery {
    allHomePageSectionsJson {
      edges {
        node {
          id
          title
          content
          color
          bgcolor
          bgimage
          video
          buttons {
            link
            external
            label
            variant
            color
            minWidth
          }
        }
      }
    }
  }
`
