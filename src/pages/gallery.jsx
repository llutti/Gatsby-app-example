import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import fotosJson from '../images/fotos.json';

const Gallery = () =>
{
  const { gallery } = useStaticQuery(graphql`
      query {
        gallery: allFile(filter: {absolutePath: {regex: "/images/"}, ext: {eq: ".jpg"}}, sort: {fields: name}) {
          nodes {
            id
            name
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500) {
                originalName
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title='Galeria' />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">
              Galeria
            </h1>
          </div>
        </div>
        <div className="row">
          {gallery.nodes.map(
            image => (
              <div key={`dv${image.id}`} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <Img fluid={image.childImageSharp.fluid} alt='Gallery' />
                <span>{image.name}</span>
                <br />
                <span>{fotosJson.fotos.find(f => f.name === image.name)?.description ?? ''}</span>
              </div>
            )
          )}
        </div>
      </div>
    </Layout >
  );
}

export default Gallery;
