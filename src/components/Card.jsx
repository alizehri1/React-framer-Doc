import { LuFiles } from 'react-icons/lu';
import { LuDownload } from 'react-icons/lu';
import { IoIosClose } from 'react-icons/io';
import { motion } from "framer-motion"


function Card({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.1} dragTransition={{bounceDamping:300, bounceStiffness:100}} className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <LuFiles />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between mb-3 py-3 px-5'>
          <h5 className='font-semibold'>{data.filesize}</h5>
          <span className='bg-zinc-600 w-6 h-6 flex justify-center items-center rounded-full'>
            {data.close ? (
              <IoIosClose />
            ) : (
              <LuDownload size='.7em' color='#fff' />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag bg-${data.tag.tagColor}-600 w-full py-4 flex items-center justify-center`}>
            <h3 className='font-semibold text-sm '>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
