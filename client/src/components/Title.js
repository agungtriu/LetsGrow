import React from 'react'
import { motion } from 'framer-motion'

const Title = () => {
    return (
        <motion.div 
        className='container-title'
        initial={{ opacity: 10 }}
        animate={{ x: [null, 100, 0] }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ color: "#000", textAlign: "center" }}
                

            >
               🌱 Welcome Hero, now try to save our Earth 🌱
            </motion.h2>
        </motion.div>

    )
}

export default Title