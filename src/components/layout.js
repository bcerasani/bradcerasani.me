import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { GlobalStyle } from './global.css';
import { H1, Byline } from './atoms/headings';
import { Nav, NavItem, NavImage } from './molecules/nav';
import { Header, Aside } from './layout.css';

function Layout(props) {
  const {
    title,
    headline = 'Design & Engineering',
    children,
    backgroundColor,
  } = props;

  return (
    <Fragment>
      <GlobalStyle backgroundColor={backgroundColor} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '720px',
          padding: `32px`,
        }}
      >
        <Header>
          <H1>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </H1>

          <Aside>
            <Byline>{headline}</Byline>
            <Nav>
              <NavItem to={'/'} activeClassName="is-active">
                Index
              </NavItem>
              <NavItem to={'/about'} activeClassName="is-active">
                About
                <NavImage src="/images/puppo.jpg" />
              </NavItem>
              <NavItem
                to={'/writing'}
                activeClassName="is-active"
                partiallyActive={true}
              >
                Writing
                <NavImage src="/images/writing-kramer.gif" />
              </NavItem>
            </Nav>
          </Aside>
        </Header>
        <main>{children}</main>
        {/* <footer>© {new Date().getFullYear()}</footer> */}
      </div>
    </Fragment>
  );
}

export default Layout;
