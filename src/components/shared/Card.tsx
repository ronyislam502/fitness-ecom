const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>Price:</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
