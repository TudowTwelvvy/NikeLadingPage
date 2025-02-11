import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

function CustomerReviews() {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lag text-center">Hear genuine stories from our stisfied customers about their exceptional expreriences with us.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review)=>{
          return(
            <ReviewCard  key ={review.customerName} imgURL ={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
          )
        })}
      </div>
    </section>
  )
}

export default CustomerReviews