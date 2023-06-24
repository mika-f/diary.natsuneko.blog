import React from "react";

import type { NextraBlogTheme } from "nextra-theme-blog";

export default {
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  navs: [
    {
      url: "https://twitter.com/6jz",
      name: "@6jz",
    },
  ],
  darkMode: true,
  footer: <p>© 2023 Natsuneko.</p>,
  titleSuffix: " at diary.natsuneko.blog",
  readMore: "Read More →",
} satisfies NextraBlogTheme;
