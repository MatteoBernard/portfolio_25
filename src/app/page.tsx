"use client"

import {useTranslations} from "use-intl";

const Home = () => {

  const t = useTranslations();

  return (
      <>
        <p>{t('navbar.about')}</p>
      </>
  );
}

export default Home;