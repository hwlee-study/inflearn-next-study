import {getAllPostIds, getPostIdContent} from '@/lib/post'
import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import {ParsedUrlQuery} from 'node:querystring'
import homeStyles from '@/styles/Home.module.css'

export default function Posts({
  postData,
}: {
  postData: {
    id: string
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={homeStyles.headingXl}>{postData.title}</h1>
        <span className={homeStyles.lightText}>{postData.date}</span>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false, // return path가 없으면 404페이지
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (clickId) => {
  const {id} = clickId.params as Params
  const postData = await getPostIdContent(id as string)
  return {
    props: {
      postData,
    },
  }
}
