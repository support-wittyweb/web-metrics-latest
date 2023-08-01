import { Column, Icon, Row, Text } from 'react-basics';
import Link from 'next/link';
import LanguageButton from 'components/input/LanguageButton';
import ThemeButton from 'components/input/ThemeButton';
import SettingsButton from 'components/input/SettingsButton';
import Icons from 'components/icons';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Row>
        <Column>
        <Link href="#" target="_blank" className={styles.title}>
            <Icon size="lg">
              <Image
                src="/images/logo/web-metrics-favicon.png"
                alt="Logo"
                width={30}
              />
            </Icon>
            <Text className={styles.text}> Web <span className={styles.span}>Metrics</span></Text>
          </Link>
        </Column>
        <Column className={styles.buttons}>
          <ThemeButton tooltipPosition="bottom" />
          <LanguageButton tooltipPosition="bottom" menuPosition="bottom" />
          <SettingsButton />
        </Column>
      </Row>
    </header>
  );
}

export default Header;
