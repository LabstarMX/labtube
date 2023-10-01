import Logo from "@/assets/Logo.png"


type Props = {
    
}

const Footer = ({  }: Props) => {
  return (
    <footer className="bg-primary-100 py-16" >
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            {/* LOGO */}
            <div className="mt-16 basis-1/4 md:mt-0">
                <img src={Logo} alt="logo" width="113px" height="24px" />
                <p className="my-5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Consequatur veniam possimus consequuntur quas? Accusantium modi, dicta
                  aspernatur magnam ut beatae blanditiis quis aut reiciendis quos ipsum ex
                   dolore quisquam explicabo.
                </p>
                <p>© FitXpress All Rights Reserved.</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa orci esnnectus</p>
                <p className="my-5">lorem dude</p>
                <p className="my-5">eorey shosye</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"> Metu Tempes Es soro Massa orci esnnectus</p>
                <p className="my-5">(333)452-3752</p>                
            </div>
        </div>
    </footer>
  )
}

export default Footer