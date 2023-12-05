import Newsleterimg from '../assets/NewsletterImg.png';
import { motion } from "framer-motion"
//varriants
import { fadeIn } from './variants';
const Newsletter = () =>{
    return(
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20' id='' >
                <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-9'>
                   {/* Banner Image */}
                       <motion.div 
                           variants={fadeIn("down",0.2)}
                           initial='hidden'
                           whileInView={'show'}
                           viewport={{once:false, amount:0.7}} >
       
                           <img src={Newsleterimg} alt="" className='lg:h-[386px]' />
                       </motion.div>
                       
                       {/* Banner content */}
                       <motion.div 
                           variants={fadeIn("up",0.2)}
                           initial='hidden'
                           whileInView={'show'}
                           viewport={{once:false, amount:0.7}}  
                           className='md:w-3/5'>
                       <h2
                           className='md:text-6xl text-2xl font-bold text-white mb-6 leading-relaxed]'>
                             Each student an share their discount code for friends
                           </h2>
                       <p className='text-[EBEBEB] text-2xl mb-8'>
                            A simple paragraph is comprised of three major components. The first sentence,which 
                            is often a declarative sentence, is called the “topic sentence. 
                       </p>
                           <div className='space-x-5 space-y-4'>
                               <button className='btn-primary'>I have a code</button>
                           </div>
                       </motion.div>
               </div>
           </div>
         </div>
        
    );
}
export default Newsletter;