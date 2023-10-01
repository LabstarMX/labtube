import { motion } from "framer-motion"
import { BenefitType, SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
// import AnchorLink from "react-anchor-link-smooth-scroll"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import HText from "@/shared/HText"
import Benefit from "./Benefit"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro vero et.", 
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Hundreds of Diverse Classes",
        description: "Molestiae et eligendi rem nemo ab dolorem odio sunt. Beatae minus reiciendis commodi dignissimos iste incidunt, debitis mollitia.", 
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum porro vero et.", 
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 relative z-[1]">
        <motion.div className="i"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADER */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{                                
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x:0 },                                
                }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm md:my-5 md:w-3/5">We provide world class fitness equipment, training and classes
                     to get you to your ultimate fitness goal with ease. We provide
                      true care into each and every member
                </p>                
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                className="md:flex items-center justify-between gap-8 mt-5">
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                     />
                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
                {/* DESDCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20
                                     before:z-[1] before:content-abstractwaves"
                        >
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{                                
                                    hidden: { opacity: 0, x:50 },
                                    visible: { opacity: 1, x:0 },                                
                                }}
                            >
                                <HText>Millions of Happy Members getting
                                    {/* <p className="text-transparent">.</p>  */}
                                    <span className="text-primary-500" >FIT</span> 
                                </HText>
                            </motion.div>

                        </div>

                    </div>
                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{                                
                            hidden: { opacity: 0, x:50 },
                            visible: { opacity: 1, x:0 },                                
                        }}
                    >
                        <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing 
                        elit. Dolor doloremque ullam accusamus repellendus voluptatibus? Ducimus
                         repellendus eum maiores, quia dolore ipsam perspiciatis a animi. Dolorem 
                         vitae nam soluta quo fugit.
                         </p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Molestias eius tempore incidunt perspiciatis iste quidem sit 
                        laudantium ea officiis maiores nesciunt dolores adipisci, saepe rem 
                        repudiandae assumenda. Nisi, quo soluta!
                        </p>

                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 
                                        before:z-[-1] before:content-sparkles
                        ">
                            <ActionButton  setSelectedPage={setSelectedPage} >Join Now</ActionButton>
                        </div>
                        

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits