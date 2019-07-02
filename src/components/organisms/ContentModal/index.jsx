import * as React from 'react'

class ContentModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true}
    }

    render() {
        console.log(this.props);
        if(this.state.show){
            return (
                <div className="modal fade" id={this.props.modaldata[0].modalId} tabIndex="-1" role="dialog" aria-labelledby={this.props.modaldata[0].modalLabel} aria-hidden="true" data-backdrop="true">
                    <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="dark-text">×</span>
                                </button>
                                <div className="lead font-weight-bold text-center" dangerouslySetInnerHTML={{__html: this.props.modaldata[0].modalTitle}}></div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ContentModal;
