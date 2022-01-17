// Post.js

function Post(props) {

  const toggleLike = (e) => {
    if(e.target.className === 'fas fa-heart like') {
      e.target.classList.add('liked')
      e.target.classList.remove('like')
    } else{
      e.target.classList.add('like')
      e.target.classList.remove('liked')
    }
  }


  return (
    <>
      {
        props.images.map(image => {
          return (
            <div className="postContainer" key={image.date}>
              <div className="imageContainer">
                <img src={image.url} alt={image.title} />
              </div>
              {/* /imageContainer */}
              <div className="textContainer">
                <h2>{image.title} by {image.copyright}</h2>
                <p>{image.date}</p>
                <p>{image.explanation}</p>
                <button onClick={toggleLike} aria-label='Click to like this image'>
                  <i className="fas fa-heart like"></i>
                </button>
              </div>
              {/* /textContainer */}
            </div>
            // /postContainer
          )
        })
      }
    </>
  )
}

export default Post;