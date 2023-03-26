import { GlobleImport } from '@/pages/globleImport';

const { Constants
} = GlobleImport;
const images = (props: any) => {
    var img: any = "";
    if (props.data) {
        img = props.data.img ? `${Constants.imgPath}${props.data.img}` : "";
    }
    return (
        <div>
            <img
                src={img}
                alt="Picture of the author"
                className="imag-border-radius  rounded float-start"
                width={340}
                height={340}
            />
        </div>
    )
}

export default images
