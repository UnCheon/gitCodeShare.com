import React, { Component } from 'react';
import {
  styled,
  GithubButton,
  GithubBadge,
  SmDownloadButton,
  MainNavMenu,
  SContainer,
  FlexRightBox,
} from '../styledComponents';
import { Layout } from 'antd';
import Link from 'next/link';

interface IProps {
  className?: string;
}

const { Header } = Layout;
const Nav = styled(Header as any)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  height: 70px;
  background-color: ${props => props.theme.primaryColor};
`;

const NavContainer = styled(SContainer as any)`
  display: inherit;
  align-items: center;

  h1,
  a {
    margin: 0;
  }

  [data-align] {
    display: inherit;
    align-items: center;
  }

  [data-violet] {
    color: ${props => props.theme.colorPalette.blueViolet};
    &.ant-badge {
      background-color: ${props => props.theme.colorPalette.blueViolet};
    }
  }

  [data-magenta] {
    color: ${props => props.theme.colorPalette.deepMagenta};
    &.ant-badge {
      background-color: ${props => props.theme.colorPalette.deepMagenta};
    }
  }
`;

const RightBox = styled(FlexRightBox as any)`
  & {
    button {
      margin-right: 30px;
    }
    [data-align] {
      margin-right: 15px;
    }
  }
`;

class MainNav extends Component<IProps> {
  render() {
    const { className } = this.props;
    return (
      <Nav className={className}>
        <NavContainer>
          <h1 data-align>
            <Link href="/">
              <a>
                <img src="/static/logo.png" alt="GitShareCode" />
              </a>
            </Link>
          </h1>
          <MainNavMenu mode="horizontal">
            <MainNavMenu.Item>
              <Link href="/contributors">
                <a>Contributors</a>
              </Link>
            </MainNavMenu.Item>
            <MainNavMenu.Item>
              <Link href="/features">
                <a>Features</a>
              </Link>
            </MainNavMenu.Item>
          </MainNavMenu>
          <RightBox>
            <SmDownloadButton icon="chrome">Add to Chrome</SmDownloadButton>
            <div data-align>
              <GithubButton data-violet icon="github">
                Star
              </GithubButton>
              <GithubBadge data-violet count={18} />
            </div>
            <div data-align>
              <GithubButton data-magenta icon="github">
                Fork
              </GithubButton>
              <GithubBadge data-magenta count={7} />
            </div>
          </RightBox>
        </NavContainer>
      </Nav>
    );
  }
}

export default MainNav;
