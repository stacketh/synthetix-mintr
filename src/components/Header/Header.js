import React, { useContext } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Store } from '../../store';
import { ThemeContext } from 'styled-components';

import { WalletStatusButton } from '../Button';
import { HeaderButton } from '../Button';
import ThemeSwitcher from '../ThemeSwitcher';

import { Globe } from '../Icons';

const shortenAddress = address => {
  if (!address) return null;
  return address.slice(0, 6) + '...' + address.slice(-4, address.length);
};

const Header = ({ t, currentWallet }) => {
  const theme = useContext(ThemeContext);
  const { state } = useContext(Store);
  return (
    <HeaderWrapper>
      <Logo
        src={`/images/mintr-logo-${
          state.ui.themeIsDark ? 'light' : 'dark'
        }.svg`}
      />
      <WalletStatusButton>{shortenAddress(currentWallet)}</WalletStatusButton>
      <HeaderButton>{t('dashboard.header.support')}</HeaderButton>
      <GlobeButton>
        <Globe theme={theme} />
      </GlobeButton>
      <ThemeSwitcher
        onLabel={t('dashboard.header.onLabel')}
        offLabel={t('dashboard.header.offLabel')}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0 32px;
`;

const Logo = styled.img`
  width: 104px;
  margin-right: 18px;
`;

const GlobeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 40px;
  border: 1px solid ${props => props.theme.colorStyles.borders};
  background-color: ${props => props.theme.colorStyles.buttonTertiaryBgFocus};
`;

export default withTranslation()(Header);
