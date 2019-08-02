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
  const slicePosition = videoLink.indexOf('?v=') + 3;
  const videoID = videoLink.slice(slicePosition);
  // console.log('slug:', slug.slice(0, -3));

   return (
     <Layout slug={slug.slice(0, -3)}>
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
