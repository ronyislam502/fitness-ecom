import React from "react";

const UploadedProduct = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-center py-6"></div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="font-bold text-2xl text-black">
              <th>#</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>E-mail</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <hr />
          <tbody className="text-black">
            <tr>
              <th>index + 1</th>
              <td>name</td>
              <td>price</td>
              <td>delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadedProduct;
