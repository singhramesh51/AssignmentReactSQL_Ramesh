import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';


 class services extends Component {
    constructor() {
        super()
        this.state = {
            items: null

        }
       
    }
    componentDidMount() {
    axios.get('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10', {
        'headers': {                
            'access-control-allow-credentials': true,
            'access-control-allow-methods': 'GET, OPTIONS',
            'access-control-allow-origin': 'http://localhost:3000',
            'access-control-max-age': 0, } 
        }).then(res => {
                 console.log(res);
                console.log( res.data["data"] );
              
                this.setState({ items: res.data["data"] });

            })
            .catch(error => {
                console.warn(error)
            });
    }

    render() {
        return (
            <div> services [1] 
                 <div className="row border">
                    <div className="col-2 btn-primary border">ID</div>
                    <div className="col-2 btn-primary border">Name</div>
                    <div className="col-1 btn-primary border">Type</div>
                    <div className="col-7 btn-primary border">links</div> 
                </div>
                {
                    this.state.items ?
                        this.state.items.map((item) =>
                        <div className="row border">
                        <div className="col-2 border">{item.id}</div>
                        <div className="col-2 border">{item.attributes.name}</div>
                        <div className="col-1 border">{item.type}</div>
                        <div className="col-7 border">{item.links.self}</div>                      

                    </div>
                        ) :
                        "No Record found"
                }
            </div>
        )
    }
}

export default services
