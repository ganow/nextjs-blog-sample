import React from 'react'
import Link from 'next/link'
import fs from 'fs'
import frontMatter from 'front-matter'

import { getArticles } from '../utils/utils'

export default class extends React.Component {
  static async getInitialProps () {

    return getArticles('./static/articles/').then((articles) => {
      const linkParams = articles.nameList.map((articleName, i) => {
        const content = fs.readFileSync(articles.pathList[i], 'utf-8')
        const meta = frontMatter(content)
        return {
          name: articleName,
          title: meta.attributes.title,
          date: meta.attributes.date,
        }
      })
      return {
        linkParams: linkParams
      }
    })
  }

  render () {
    return (
      <div>

        <ul className='articles'>
          {
            this.props.linkParams.map((el, i) => {
              return <li className='article-list'>
                <Link href={'/article?name='+el.name} as={'/article/'+el.name}><a>
                  <p className='article-title'>{el.title}</p>
                  <p className='article-date'>{el.date}</p>
                </a></Link>
              </li>
            })
          }
        </ul>

      </div>
    )
  }
}
