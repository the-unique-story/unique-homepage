import * as React from 'react'

//Import atoms
import Btn from "../../atoms/Button"

type Props = {
    content: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { content } = props;

    return (
        <div className="container text-center py-5">
            <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: content[0].heading}}></h2>
            <div className="row section0-row my-5">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-12"><img draggable="false" className="img-fluid" src={content[1].icon} alt="Search Icon"/></div>
                        <div className="col-12">{content[1].text}</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-12"><img draggable="false" className="img-fluid" src={content[2].icon} alt="Expert Icon"/></div>
                        <div className="col-12">{content[2].text}</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-12"><img draggable="false" className="img-fluid" src={content[3].icon} alt="Leaf Icon"/></div>
                        <div className="col-12">{content[3].text}</div>
                    </div>
                </div>
            </div>
            <Btn btnstyle="WHITE" href={content[4].btnhref} className="font-weight-bold">{content[4].btntext}</Btn>
        </div>
    )
}

export default SectionContent