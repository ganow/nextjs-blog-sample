nextjs-blog-sample
=========================

Minimum scaffold of blogging system with [Next.js](https://github.com/zeit/next.js) using in [ganow.me](http://ganow.me).
Detailed explanation is summarized in [ganow's blog](http://ganow.me/article/blog-system-configuration) (written in Japanese only).

The system realizes

- server-side rendering of articles written in Markdown format.
- fast and clear math typesetting by [KaTeX](https://khan.github.io/KaTeX/).
- syntax highlighting by [highlightjs.org](https://highlightjs.org/).

## Usage

You can edit your own article while checking the rendering result interactively by executing commands below at the project directory.

```
$ npm install
$ npm run dev
```

This system renders and displays `/static/articles/{:03d}-xxx-yyy-zzz.md` when visitor accessed to `/articles/xxx-yyy-zzz`.
