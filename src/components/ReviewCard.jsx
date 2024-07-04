import { star } from "../assets/icons"


function ReviewCard({imgURL,customerName, rating,feedback}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt={customerName} className="rounded-full object-cover w-[120px] h-[120px]"/>
      <p className="mt-6 mx-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="" width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h1 className="mt-1 font-palanquin text-2xl text-center font-bold">{customerName}</h1>
    </div>
  )
}

export default ReviewCard