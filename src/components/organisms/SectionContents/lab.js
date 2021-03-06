//** Standard Frameworks */
import * as React from 'react'

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton"

//** Helpers */
//** Personalization */
import Text from "../../helper/Text";
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

type Props = {
    content: string
}

/**
 * Section: Lab
 */
const SectionContent = (props: Props): React.Element<*> => {
    const { content, btn } = props;

    function printParagraph(i){
        if(typeof content[i].paragraph != "undefined"){
            return (<div key={i} dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ content[i].paragraph }/>))}}></div>)
        }
        
    }

    return (
        <div className="container text-left">
            {props.showHead === true &&
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ content[0].heading }/>))}}></h2>
            }
            <div className="text-center my-5">
                <img draggable="false" className="img-fluid" src={content[1].img} alt="Beautyprogramm starten"/>
            </div>
            <div className="row my-5">
            <div className="col-md-6">
                    <div className="row h-100">
                        <div className="col-12"><div className="lead" dangerouslySetInnerHTML={{__html: ReactHtmlParser(renderToString(<Text value={ content[2].lead }/>))}}></div></div>
                        <div className="col-12"><ModalBtn param={btn} /></div>
                    </div>
                </div>
                <div className="col-md-6">
                    {content.map((item, i) => {
                        return (
                            printParagraph(i)
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default SectionContent
