import { GlobleImport } from '@/pages/globleImport';

import ReactHtmlParser from 'html-react-parser'
const { Constants
} = GlobleImport;
const alignment = (props: any) => {
    var img = "", title = "", subtitle = "";
    if (props.data) {
        img = props.data.img ? `${Constants.imgPath}${props.data.img}` : "";
        title = props.data ? props.data : "";
    }


    return (<p className='textalign-justify'>{ReactHtmlParser(title)} </p>)
}

export default alignment
