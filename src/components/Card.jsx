function Card() {
  return (
    <>
      <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
        <div className="top">
          <img
            className="w-[200px] h-[200px] object-cover  p-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxP1VemWxHrzKvZ0HDMUrbv0wT6moztV_2A&usqp=CAU"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">BMW_BLACK</div>

          <div className="pricing flex items-center">
            {" "}
            <div className="price ">$100000</div>
            <div className="ml-2 text-xs ">
              $<del>130000</del>
            </div>
          </div>
          <div className="flex items-center my-2">
            <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
              Buy Now
            </button>
            <button className="border px-3 py-1 text-xs rounded-lg ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
