import React from 'react';
import {Helmet} from 'react-helmet-async';

export default function SEO({title, description, siteTitle, keywords, href}) {
 return (
  <Helmet
   htmlAttributes={{lang: 'ru'}}
   title={title}
   titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
   defaultTitle={title}
   link={[
    {
     rel: `canonical`,
     href: href,
    },
   ]}
   meta={[
    {
     name: `description`,
     content: description,
    },
    {
     name: `keywords`,
     content: keywords,
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
