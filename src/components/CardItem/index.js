// Write your code here.
import './index.css'

const CardSection = props => {
  const {cardDetails} = props
  const {className, title, description, imgUrl} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <h1 className="header"> {title} </h1>
      <p className="description"> {description} </p>
      <div className="img-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardSection
