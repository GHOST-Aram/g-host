const render = (response, template, context) =>{
    response.render(template, context)
}

const render404 = (response, template, context) =>{
    response.status(404).render(template, context)
}

export {render, render404}