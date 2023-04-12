import React from "react";

const Label = () => {
  return (
    <>
      <div className="mb-[48px]">
        <form action="#">
          <label htmlFor="title">
            <input
              type="text"
              placeholder="Qidirish"
              className="w-[655px] pl-8 ml-4 rounded h-[52px] mt-[56px] "
            />
          </label>

          <h1 className="text-[28px] font-semibold mt-[35px] ml-4">
            Buyurtmalar ro’yhati{" "}
          </h1>

          <div className="flex gap-3 mt-6">
            <label htmlFor="buyurtma" className="ml-4">
              <p className="text-[20px] font-semibold">Buyurtmachi</p>
              <input
                type="text"
                id="buyurtma"
                placeholder="Enter Costumer Name"
                className="w-[266px] h-[50px] mt-4 pl-6 rounded-md"
              />
            </label>

            <label htmlFor="id">
              <p className="text-[20px] font-semibold">Enter Invoice ID</p>
              <input
                type="text"
                id="id"
                placeholder="Enter Invoice ID"
                className="w-[266px] h-[50px] mt-4 pl-6 rounded-md"
              />
            </label>

            <label htmlFor="date">
              <p className="text-[20px] font-semibold">Start Date</p>
              <input
                type="text"
                id="date"
                placeholder="Start Date"
                className="w-[266px] h-[50px] mt-4 pl-6 rounded-md"
              />
            </label>
            <label htmlFor="end">
              <p className="text-[20px] font-semibold">End Date</p>
              <input
                type="text"
                id="end"
                placeholder="End Date"
                className="w-[264px] h-[50px] mt-4 pl-6 rounded-md"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Label;
