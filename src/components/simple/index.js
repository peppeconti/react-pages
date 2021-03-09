const Simple = (props) => {
    const name = props || 'User';

    return (
        <p>Hello {name}!</p>
    )
};


export {
    Simple
}