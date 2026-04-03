import React from 'react'
import { motion } from 'framer-motion'

const Showroom = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
    }
  }

  return (
    <section className="py-40 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={imageVariants} className="overflow-hidden h-[650px]">
            <img 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" 
              alt="Macro of tailor measuring wool" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmFAKwv-ElaHcIiO4_hrtloQUe1p-qUP6gfor2jyYWqE04P_bBf2XpsruJ4OVTViaPOWtvgv_jTHEpdyqsHh_TJMNM4e9GS_q-f_rQFbG13-kAgzPf5NAv33di2Euouocudyk7fB6RfuHzJcIiboM-vhloBIOMkng5FIWWI9UzLVuXuSErehxj4x5f8uQkmlX4DAiQg9vIP7oLczctTG2WBU9Aqik_TGTTHbXI4kM1qMiRtwHLLD1aWdqymc9UMLSjbTa0ZfYQa_LD"
            />
          </motion.div>
          <motion.div variants={imageVariants} className="overflow-hidden h-[650px]">
            <img 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" 
              alt="Artisanal silver thread" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vV1nQ8rGONpS-o5Qu8NquTnAvdfsXy3Laoc5IMHEWW53Z_KOrwN9guQuvZAjE_vGbTvIl7--e3_Y74Uqall7GYJ47EFmR1LN1y4_IDOCOvnQbeddQjRPQlIZ7esG3RrDFpPi4IYHXJKhsYNhtvgSGD6LtQh31vs9lcFerZEAYFxTJRed8MFkjSPXOPztl6gQRdAoYxZpiZyK4vzrjlTMaLQ69ZRuSagJ9DnTUpI0_vvycEUs77mKTNVF5MoqYX0B8MycZC-mhi2_"
            />
          </motion.div>
          <motion.div variants={imageVariants} className="overflow-hidden h-[650px]">
            <img 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" 
              alt="Professional shears" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABoXWo1xkib7-9vwIs56wSuYxT8vLCGgXDf7sBfo_fTyf5IGJrUh71T7F02W_vaiVFRCSgG14LQPWxKA-05Yi73-7VDh9bfSmh81ZRiOXmyRrbxSTKj8LjTN9LdTD67bssyY-o08yGwAX5IZhTr4s9ZvQ_lp2Pj9jmxEuzp4dNRCYLbm7W0DIw9DQP_thPpBiggZxPbqtGG9FLt_WJZIzml0DXuZPxSwFSVMWIvLC96p9Jpas9I4IQNLBxrmxdHWqZut6EDvct0S7b"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Showroom
