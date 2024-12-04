import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import {remark} from 'remark'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostData = fileNames.map((fileName) => {
    // remove .md from file nema to get id
    const fileId = fileName.replace(/\.md$/, '')

    // Read md file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse the post metadata section
    const parsingMdContent = matter(fileContent)

    return {
      fileId,
      ...(parsingMdContent.data as {date: string; titile: string}),
    }
  })

  // sort posts by date
  return allPostData.sort((a, b) => {
    if (a.date < b.date) return 1
    else return -1
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostIdContent(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remart to conver markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as {date: string; title: string}),
  }
}
