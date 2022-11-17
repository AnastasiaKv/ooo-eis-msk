import React from 'react';
import {Helmet} from 'react-helmet-async';

export default function SEO({title, description, siteTitle}) {
 return (
  <Helmet
   title={title}
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
    //     {
    //      name: `twitter:card`,
    //      content: `summary`,
    //     },
    //     {
    //      name: `twitter:creator`,
    //      content: twitter,
    //     },
    //     {
    //      name: `twitter:title`,
    //      content: title,
    //     },
    //     {
    //      name: `twitter:description`,
    //      content: description,
    //     },
   ]}
  />
 );
}
