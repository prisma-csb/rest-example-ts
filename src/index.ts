import { prisma } from './generated/prisma-client'
import * as express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.post(`/createPost`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.createPost({
    title,
    content,
    author: { connect: { email: authorEmail } },
  })
  res.json(result)
})

app.post(`/delete/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.deletePost({ id })
  res.json(post)
})

app.post('/publish/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.updatePost({
    where: { id },
    data: { published: true },
  })
  res.json(post)
})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post({ id })
  res.json(post)
})

app.get('/drafts', async (req, res) => {
  const draftPosts = await prisma.posts({ where: { published: false } })
  res.json(draftPosts)
})

app.get('/feed', async (req, res) => {
  const posts = await prisma.posts({ where: { published: true } })
  res.json(posts)
})

app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'),
)
