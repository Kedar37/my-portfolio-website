import React from 'react'
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (
    <div style={{width: '100%', textAlign: 'center', fontSize: "10px", padding: '10px 0', color: 'white', backgroundColor: '#333'}}>
      {t('Footer.copyrights')}
    </div>
  )
}

export default Footer