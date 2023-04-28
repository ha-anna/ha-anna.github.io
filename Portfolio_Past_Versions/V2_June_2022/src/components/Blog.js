import React from "react";
import { nanoid } from "nanoid"

export default function Blog() {
  const [posts, setPosts] = React.useState({})

  const blogQuery = `query {
    user(username: "ha-anna"){
      publication{
        posts(page: 0){
          slug
          title
          brief
          coverImage
        }
      }
    }
  }
  `

  React.useEffect(() => {
    async function gql(query) {
      const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });
    const data = await response.json()
    setPosts(data.data.user.publication.posts)
    }
    gql(blogQuery)
  }, [blogQuery])

  const postsHtml = posts.map(post => {
    const divImg = {
      backgroundImage: `url(${post.coverImage})`
    }

    return (
      <div className="card" key={nanoid()}>
        <div className="card-img" style={divImg}>
        </div>
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.brief}</p>
          <div className="card-buttons">
            <a href={`https://haanna.hashnode.dev/${post.slug}`} target="_blank" className="btn read-btn" rel="noreferrer">Read Now</a>
          </div>
        </div>
      </div>

    )
  })


  return (
    <section aria-labelledby="blog" className="blog">
      <h2 id="blog">Blog</h2>
      <div className="cards">
        {postsHtml}
      </div>
    </section>
  )
}