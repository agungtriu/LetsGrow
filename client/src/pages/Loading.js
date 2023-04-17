import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <>
        <div className='loading-box'>
          <motion.div
            className=''
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'black',
              borderRadius: '10px',
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
          </motion.div>
            <div className='position-absolute top-50 start-50 translate-middle text-white'>
              Loading
            </div>
        </div>
    </>
  );
};

export default Loading;