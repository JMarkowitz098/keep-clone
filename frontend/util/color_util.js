export const changeNoteColor = (ctx, color) => {
    switch (color) {
        case 'blue':
            changeToBlue(ctx)
            break;
        case 'yellow':
            changeToYellow(ctx)
            break;
        default:
            break;
    }
}

const changeFormColor = (color) => {

    let editForm = document.getElementsByClassName('ef-form-container')[0];
    if (editForm) {
        editForm.style.backgroundColor = color;
        editForm.style.borderColor = color;
    }
}

const changeIndexItemColor = (noteId, color) => {
    let noteContainer = document.getElementById(`note-container-${noteId}`);
    if (noteContainer) {
        noteContainer.style.backgroundColor = color;
        noteContainer.style.borderColor = color;
    }
}

const changeToBlue = (ctx) => {
    let blue = "#a7ffeb"
    ctx.setState({
        color: 'blue'
    })
    changeFormColor(blue)
    changeIndexItemColor(ctx.props.note.id, blue)
}

const changeToYellow = (ctx) => {
    let yellow = "#fff475"
    ctx.setState({
        color: 'yellow'
    })

    changeFormColor(yellow)
    changeIndexItemColor(ctx.props.note.id, yellow)

}