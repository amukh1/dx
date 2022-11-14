
function element(nodeName, attributes, ...args) {
    console.log(nodeName)
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}

function render(vnode, container) {
    console.log('vnpode:'+vnode)

    if(typeof vnode == Number){
        vnode = vnode.toString()
    }

    if (vnode.split) return document.createTextNode(vnode);

    let n = document.createElement(vnode.nodeName);

    let a = vnode.attributes || {};
    Object.keys(a).forEach( k => n.setAttribute(k, a[k]) );

    (vnode.children || []).forEach( c => n.appendChild(render(c)) );

    // console.log(container)
    return n;
}

let Globalstate = [];

function useState(initial) {
    let state = initial;
    Globalstate.push(initial)
    let index = Globalstate.length - 1;
    function setState(next) {
        console.log(state)
        Globalstate
        state = next;
    }
    return [state, setState];
}

let dx = {
    element,
    render,
    useState
}

// set dx.element as the default pragma, and replace all react settings with dx

