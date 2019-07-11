//** Standard Frameworks */
import * as React from 'react'

//** Components */
//** Atoms */
import ModalBtn from "../../atoms/ModalButton";
import Alert from "../../atoms/Alert";

/**
 * Section: Experts
 */
const SectionContent = (props: Props): React.Element<*> => {
    return (
        <div className="container text-left">
            {props.showHead === true &&
                <h2 className="font-weight-bold" dangerouslySetInnerHTML={{__html: props.heading}}></h2>
            }
            <div className="row mt-5">
            <div className="col-md-6">
                    <div className="row">
                        <div className="col-12 mb-5"><img draggable="false" className="img-fluid" src={"https://pharmaziegasse.at"+props.img} alt="Beautyprogramm starten"/></div>
                        <div className="col-12"><ModalBtn param={props.btn} /></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div dangerouslySetInnerHTML={{__html: props.paragraph}}></div>
                    <Alert show="true" className="alert-info">{props.footer}</Alert>
                </div>
                
            </div>
        </div>
    )
}

export default SectionContent
