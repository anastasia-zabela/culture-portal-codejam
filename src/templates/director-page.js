import React from 'react';
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { graphql } from 'gatsby';
import directorPageStyles from './director-page.module.scss';

import GoogleMap from '../components/googlemap';
import ModalButton from '../components/modal/modalButton'

const DirectorPage = ({ data }) => {
  const { directorName, slug, text, image, json, place, gallery, videoLink } = data.contentfulTheaterDirector;
  const slicePosition = videoLink ? videoLink.indexOf('?v=') + 3 : null;
  const videoID = slicePosition ? videoLink.slice(slicePosition) : null;

  let siteTitle = '';
  const buttonNames = {
    home: "",
    list: ""
  }

  if (slug.slice(-2) === 'en') {
    siteTitle = 'THEATER DIRECTORS OF BELARUS';
    buttonNames.home = "Home";
    buttonNames.list = "LIST OF THEATER DIRECTORS";
  } else if (slug.slice(-2) === 'be') {
    siteTitle = 'Тэатральныя рэжысёры Беларусi';
    buttonNames.home = "На пачатковую";
    buttonNames.list = "Да спису рэжысерау";
  } else if (slug.slice(-2) === 'ru') {
    siteTitle = 'Театральные режиссёры Беларуси';
    buttonNames.home = "На стартовую";
    buttonNames.list = "К списку режиссёров";
  }


  return (
    <Layout
      slug={slug}
      siteTitle={siteTitle}
      buttonNames={buttonNames}
    >
      <h1>{directorName}</h1>
      <img src={image.file.url} alt={directorName} className={directorPageStyles.dirimage} />
      <p>{text.text}</p>


      {json.entries.map((entry) => {
        return (
          <>
            <Timeline lineColor={'#ddd'}>
              <TimelineItem
                key={entry.key}
                dateText={entry.date}
                dateInnerStyle={{ background: '#76bb7f' }}
              >
                <p>{entry.content}</p>
              </TimelineItem>
            </Timeline>
          </>
        )
      })}

      <GoogleMap srcLink={place.internal.content}></GoogleMap>
      <div>

        <ModalButton videoID={videoID} />
      </div>

      <div className={directorPageStyles.gallery}>

        {gallery.map((gallery_item, key) => {
          return (
            <div><img src={gallery_item.file.url} alt={gallery_item.file.url} className={directorPageStyles.image} /></div>
          )
        })}
      </div>

      <Link to="/directors">View more theater directors</Link>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default DirectorPage

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulTheaterDirector(slug: { eq: $slug }) {
      directorName
      videoLink
      slug
      text {
        text
      }
      image {
        file {
          url
        }
      }
      json {
        entries {
          key
          date
          content
        }
      }
      place {
        internal {
          content
        }
      }
      gallery {
        file {
          url
        }
      }
    }
  }
`;
