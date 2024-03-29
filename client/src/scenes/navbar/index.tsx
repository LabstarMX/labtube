import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/logo.png';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';





type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navBarBackground = isTopOfPage ? "" : "bg-black drop-shadow"
  return (
    <nav>
        <div className={ `${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                  {/* LEFT SIDE */}
                  <img  alt="logo" src={Logo} width="113px" height="24px" />

                  {/* RIGHT SIDE */}
                  {/* DESKTOP VIEW */}
                  {isAboveMediumScreens ? (
                  
                  <div className={`${flexBetween} w-full `}>
                    <div className={`${flexBetween} gap-8 text-sm `}>

                    <AnchorLink
                        className={`${selectedPage === "home" ? "text-primary-500" : ""}
                        transition duration-500 hover:text-primary-300
                        active:text-primary-500`}    
                        href={`#${SelectedPage.Home}`}              
                      >
                        Home
                    </AnchorLink>

                      <AnchorLink
                        className={`${selectedPage === "benefits" ? "text-primary-500" : ""}
                                transition duration-500 hover:text-primary-300
                                active:text-primary-500`}    
                        href={`#${SelectedPage.Benefits}`}              
                      >
                        Benefits
                      </AnchorLink>

                      <AnchorLink
                        className={`${selectedPage === "ourclasses" ? "text-primary-500" : ""}
                                transition duration-500 hover:text-primary-300
                                active:text-primary-500`}    
                        href={`#${SelectedPage.OurClasses}`}              
                      >
                        Our Classes
                      </AnchorLink>

                      <AnchorLink
                        className={`${selectedPage === "contactus" ? "text-primary-500" : ""}
                                transition duration-500 hover:text-primary-300
                                active:text-primary-500`}    
                        href={`#${SelectedPage.ContactUs}`}              
                      >
                        Contact Us
                      </AnchorLink>

                    </div>

                    <div className={`${flexBetween} gap-8`}>
                      <AnchorLink
                          className={`${selectedPage === "signin" ? "text-primary-500" : ""}
                                  transition duration-500 hover:text-primary-300
                                  active:text-primary-500`}    
                          href={`#${SelectedPage.SignIn}`}              
                        >
                          Sign In
                      </AnchorLink>
                      <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                      
                      
                      
                    </div>

                  </div> 
                  ) : (
                  /* MOBILE VIEW */
                    <div>
                      <button className="rounded-full bg-secondary-500 p-2  "
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                      >
                        <Bars3Icon className="h-6 w-6 text-white" />
                      </button>
                    </div>
                  )}
                </div>
            </div>
        </div>
        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 
                        drop-shadow-xl"
          > 
           {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={ () => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
              {/* MENU ITEMS */}
              <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <AnchorLink
                    className={`${selectedPage === "home" ? "text-primary-500" : ""}
                    transition duration-500 hover:text-primary-300
                    active:text-primary-500`}    
                    href={`#${SelectedPage.Home}`}              
                  >
                    Home
                </AnchorLink>

                  <AnchorLink
                    className={`${selectedPage === "benefits" ? "text-primary-500" : ""}
                            transition duration-500 hover:text-primary-300
                            active:text-primary-500`}    
                    href={`#${SelectedPage.Benefits}`}              
                  >
                    Benefits
                  </AnchorLink>

                  <AnchorLink
                    className={`${selectedPage === "ourclasses" ? "text-primary-500" : ""}
                            transition duration-500 hover:text-primary-300
                            active:text-primary-500`}    
                    href={`#${SelectedPage.OurClasses}`}              
                  >
                    Our Classes
                  </AnchorLink>

                  <AnchorLink
                    className={`${selectedPage === "contactus" ? "text-primary-500" : ""}
                            transition duration-500 hover:text-primary-300
                            active:text-primary-500`}    
                    href={`#${SelectedPage.ContactUs}`}              
                  >
                    Contact Us
                  </AnchorLink>  
                  <AnchorLink
                      className={`${selectedPage === "signin" ? "text-primary-500" : ""}
                              transition duration-500 hover:text-primary-300
                              active:text-primary-500`}    
                      href={`#${SelectedPage.SignIn}`}              
                    >
                      Sign In
                  </AnchorLink>                    
              </div>              
            
          </div>
        )}
    </nav>
  )
}

export default Navbar