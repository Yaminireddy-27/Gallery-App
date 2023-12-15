// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onActiveImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickThumbnail = () => {
    onActiveImage(id)
  }

  const onActiveClassName = isActive ? 'is-active-thumbnail' : 'thumbnail '
  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${onActiveClassName}`}
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
