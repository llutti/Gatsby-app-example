import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Menu = () =>
{
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `);

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className="container">
        <Link to='/' className='nav-brand'>
          <Img fixed={logo.childImageSharp.fixed} alt='logo' />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav  ml-auto'>
            <li className='nav-item'>
              <Link to='' activeStyle={{ color: '#9963ba' }} className='nav-link' activeClassName='active'>Início</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' activeStyle={{ color: '#9963ba' }} className='nav-link' activeClassName='active'>Sobre</Link>
            </li>
            <li className='nav-item'>
              <Link to='/gallery' activeStyle={{ color: '#9963ba' }} className='nav-link' activeClassName='active'>Galeria</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' activeStyle={{ color: '#9963ba' }} className='nav-link' activeClassName='active'>Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
