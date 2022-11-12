function element(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}

function render(vnode, container) {
    if (vnode.split) return document.createTextNode(vnode);

    let n = document.createElement(vnode.nodeName);

    let a = vnode.attributes || {};
    Object.keys(a).forEach( k => n.setAttribute(k, a[k]) );

    (vnode.children || []).forEach( c => n.appendChild(render(c)) );

    // console.log(container)
    return n;
}

let dx = {
    element,
    render,
}