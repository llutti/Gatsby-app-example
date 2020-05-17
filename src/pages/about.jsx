import React from 'react';
import Layout from '../components/Layout';
import CardV2 from '../components/CardV2';
import SEO from "../components/seo";

const About = () =>
{
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste nisi eos possimus cumque libero architecto aspernatur vero praesentium sunt, fugiat neque quasi eaque ex dolore consectetur qui rem illum.';

  return (
    <Layout>
      <SEO title="Sobre"/>

      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Sobre</h1>
            <p>{text}</p>

            <div className="container">
              <div className="row">
                <div className="col-lg-4 mb-3">
                  <CardV2
                    titleCard='Card Title 01'
                    textCard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur alias eveniet autem nisi maiores omnis  expedita?'
                    colorButton='gatsby'
                    backgroundColor='#e3a617'
                    nameImage='foto01'
                    styleDefault={true}
                  />
                </div>
                <div className="col-lg-4 mb-3">
                  <CardV2
                    titleCard='Card Title 01'
                    textCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae dolore maxime a, quaerat necessitatibus!'
                    colorButton='warning'
                    nameImage='foto02'
                    styleDefault={false}
                  />
                </div>
                <div className="col-lg-4 mb-3">
                  <CardV2
                    titleCard='Card Title 01'
                    textCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam hic impedit dicta repellat laudantium autem.'
                    colorButton='gatsby'
                    nameImage='foto03'
                    backgroundColor='#e3a617'
                    styleDefault={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default About;
