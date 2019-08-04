import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { graphql } from 'gatsby';

import directorPageStyles from './director-page.module.scss';
import Layout from '../components/layout/layout';
import GoogleMap from '../components/map/googlemap';
import ModalButton from '../components/modal/modalButton'

const DirectorPage = (props) => {
  const { data } = props;
  const { directorName, text, image, json, place, gallery, videoLink, slug, works, years } = data.contentfulTheaterDirector;
  const slicePosition = videoLink.indexOf('?v=') + 3;
  const videoID = videoLink.slice(slicePosition);
  const listOfWorks = works.map((item, i) => {
    return (
      <li key={`work_${i}`}>{item}</li>
    )
  });

  return (
    <Layout path={props.path} slug={slug}>
      <div className="directors">
        <div className="directors__top container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <img src={image.file.url} alt={directorName} className={directorPageStyles.dirimage} />
            </div>
            <div className="top__info col-xs-12 col-sm-6">
              <h1>{`${directorName} (${years})`}</h1>
              <p>{text.text}</p>
            </div>
          </div>
        </div>

        <div className="directors__lifeinfo">
          {json.entries.map((entry) => {
            return (
              <div key={entry.key}>
                <Timeline lineColor={'#9f907e'}>
                  <TimelineItem
                    key={entry.key}
                    dateText={entry.date}
                    dateInnerStyle={{ background: '#9f907e' }}
                  >
                    <p className={directorPageStyles.entryContent}>{entry.content}</p>
                  </TimelineItem>
                </Timeline>
              </div>
            )
          })}
        </div>

        <div className="directors__works">
          <div className="info container">
            <div className="row">
              <div className="info__list col-sm-12 col-lg-6">
                <ul>{listOfWorks}</ul>
                <ModalButton videoID={videoID} />
              </div>
              <div className="info__video col-sm-12 col-lg-6">
                <GoogleMap srcLink={place.internal.content}></GoogleMap>
              </div>
            </div>
          </div>
          <div className="gallery">
            {gallery.map((gallery_item, key) => {
              return (
                <div key={key}><img src={gallery_item.file.url} alt={gallery_item.file.url} className={directorPageStyles.image} /></div>
              )
            })}
          </div>

        </div>

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
      works
      years
    }
  }
`;
