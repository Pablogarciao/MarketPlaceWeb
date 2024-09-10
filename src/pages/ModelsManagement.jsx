import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ModelsManagement = () => {
  const { modelId } = useParams();
  const { models } = useContext(ShopContext);
  const [modelData, setModelData] = useState(null);
  const [image, setImage] = useState('');

  const fetchModelData = async () => {
    if (Array.isArray(models)) {
      models.forEach((item) => {
        if (item._id === modelId) {
          setModelData(item);
          setImage(item.portfolio);
        }
      });
    }
  };

  useEffect(() => {
    fetchModelData();
  }, [modelId, models]);

  return modelData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            <img
              onClick={() => setImage(modelData.portfolio)}
              src={modelData.portfolio}
              className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              alt=''
            />
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>

        {/* Info */}
        <div className='flex-1'>
          <h1 className='mt-5 text-3xl font-medium'>{modelData.name}</h1>
          <div className='flex item-center gap-1 mt-2'>
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png'
              alt=''
              className='w-5 5'
            />
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png'
              alt=''
              className='w-5 5'
            />
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png'
              alt=''
              className='w-5 5'
            />
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png'
              alt=''
              className='w-5 5'
            />
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png'
              alt=''
              className='w-5 5'
            />
            <p className='pl-2'>(555)</p>
          </div>
          <p className='font-medium text-2xl mt-2'>
            Booking information: {modelData.booking_info}
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>
            Achievements: {modelData.achievements.join(', ')}
          </p>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-base text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Qualified Professionals</p>
            <p>More than 3 years of experience</p>
            <p>Low cost fees</p>
          </div>
        </div>
      </div>

      {/* Description and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (777)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            Holaaaaa
          </p>
          <p>
            Holaaaaaaa
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default ModelsManagement;