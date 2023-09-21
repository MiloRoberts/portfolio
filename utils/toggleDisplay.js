function toggleDisplay(...items) {
    try {
        if (!items.length > 0) {
            throw new Error('No elements passed to toggleDisplay()');
        }
        items.map((item) => {
            item.classList.toggle('display-none');
        });
    } catch (error) {
        console.log(error);
    }

}

export default toggleDisplay;