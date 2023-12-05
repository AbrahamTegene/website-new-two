import aboutImg from '/src/assets/About.png'
import aboutImg1 from '/src/assets/About_.png'
import { motion } from "framer-motion"
//varriants
import { fadeIn } from './variants';


const About = () =>{
    return(

        <div className='px-4 md:px-14 max-w-s mx-auto my-8 space-y-10' id='about'>

             {/* 1st About PART*/}

            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div
                variants={fadeIn("right",0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}  className='md:w-1/2'>
                   <img src={aboutImg} alt="" />
                </motion.div>
                {/* About paragraph and Button */}
                <motion.div
                    variants={fadeIn("up",0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount:0.7}}  
                    className='md:w-2/5 '>

                    <h2 className='md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal '>We have been improving our product
                     <span className='text-secondary '> for many years. </span></h2>
                    <p className='text-lg  text-tartiary mb-7'>A good example of a paragraph contains a topic conclusion.
                    There are many different kinds of animals that live in Ethiopia.</p>
                    <button className='btn-primary'>Get Started</button>
                </motion.div>
            </div>

            {/* 2nd About PART*/}
            <motion.div
                variants={fadeIn("right",0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}  
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
             <motion.div
                    variants={fadeIn("left",0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount:0.7}} >
                    <img src={aboutImg1} alt="" className='-'/>
               </motion.div>

                   {/*HERE TEXT and btn*/}
                   <motion.div
                    variants={fadeIn("down",0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount:0.7}}  
                    className='md:w-1/2'>
                    <h1 className='text-5xl font-bold mb-4 text-primary md:w-3/4 leading-normal'>You can Practice at any 
                         <span className='text-secondary'> time convinent for you.</span></h1>
                         <p className='text-tartiary text-base mb-7 md:w-3/5'>A good example of a paragraph contains a topic conclusion.
                         There are many different kinds of animals that live in China.</p>
                         <button className="btn-primary">Get Started</button>
                   </motion.div>
                </motion.div> 
        </div>
    )
}

export default About;