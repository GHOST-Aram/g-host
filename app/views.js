import { render } from "../g-host/utils/httpResponse.js";

const index = (req, res) =>{
    const context = {
        title: 'Home', 
        heading: 'Hey! Happy, Welcome to Building With G-host '
    }
    render(res, 'catalog/index',  context)
}


export {index}