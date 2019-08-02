import React from 'react';

import { Link } from 'gatsby-plugin-intl';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { graphql } from 'gatsby';
import directorPageStyles from './director-page.module.scss';

import Layout from '../components/layout/layout';
import GoogleMap from '../components/map/googlemap';
import ModalButton from '../components/modal/modalButton'

const DirectorPage = ({ data }) => {
  const { directorName, text, image, json, place, gallery, videoLink } = data.contentfulTheaterDirector;
  const slicePosition = videoLink.indexOf('?v=') + 3;
  const videoID = videoLink.slice(slicePosition);

  return (
    <Layout>
      <div className={`container ${directorPageStyles.directorPage}`}>
        <div className="row">
          <div className="col-5">
            <img className={directorPageStyles.dirimage} src={image.file.url} alt={directorName} />
          </div>
          <div className="col-7">
            <h2>{directorName}</h2>
            <p>{text.text}</p>
          </div>
        </div>
        


        {json.entries.map((entry) => {
          return (
            <div key={entry.key}>
              <Timeline lineColor={'#ddd'}>
                <TimelineItem
                  key={entry.key}
                  dateText={entry.date}
                  dateInnerStyle={{ background: '#76bb7f' }}
                >
                  <p>{entry.content}</p>
                </TimelineItem>
              </Timeline>
            </div>
          )
        })}

        <GoogleMap srcLink={place.internal.content}></GoogleMap>
        <div>

          <ModalButton videoID={videoID} />
        </div>

        <div className={directorPageStyles.gallery}>

          {gallery.map((gallery_item, key) => {
            return (
              <div key={key}><img src={gallery_item.file.url} alt={gallery_item.file.url} className={directorPageStyles.image} /></div>
            )
          })}
        </div>

        <Link to="/directors">View more theater directors</Link>
        <Link to="/">Home</Link>
      </div>
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
