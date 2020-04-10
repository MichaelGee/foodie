import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=' loader-span text-red-800 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0'>
        <i className='fas fa-circle-notch fa-spin fa-2x'></i>
      </div>
    </div>
  );
};

export default Loader;
