import React from 'react';
import {Helmet} from 'react-helmet-async';

export default function SEO({title, description, siteTitle}) {
 return (
  <Helmet
   htmlAttributes={{lang: 'en'}}
   title={title}
   link
   rel='canonical'
   href='https://eis-msk.ru/'
   titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
   meta={[
    {
     name: `description`,
     content: description,
    },
    {
     property: `og:title`,
     content: title,
    },
    {
     property: `og:description`,
     content: description,
    },
    {
     property: `og:type`,
     content: `website`,
    },
   ]}
  />
 );
}
