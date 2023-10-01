import useMediaQuery from "@/hooks/useMediaQuery";


type Props = {
    formatName: any;
}

const VidCard = ({ formatName }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");



  return (
    <div>
        {isAboveMediumScreens ? (
            <a
                href={formatName.url}
                target="_blank"
                download
                // className=" outline-none italic underline"
                className="bg-white rounded-md p-3 text-lg hover:bg-gray-300 
                        hover:text-red-700 active:text-white active:bg-black
                "
            >
                {formatName.mimeType.split(";")[0] + "  "}
                {formatName.hasVideo ? formatName.height + "p" : ""}
            </a>
        ) : (
            <a
                href={formatName.url}
                target="_blank"
                download
                className="bg-white rounded-md p-3 text-sm hover:bg-gray-300 
                        hover:text-red-700 active:text-white active:bg-black
                "
            >
                {formatName.mimeType.split(";")[0] + "  "}
                {formatName.hasVideo ? formatName.height + "p" : ""}
            </a>
        )}
        
    </div>
  )
}

export default VidCard