export const changeNoteColor = (ctx, color) => {
    switch (color) {
        case 'blue':
            changeToBlue(ctx)
            break;
        case 'yellow':
            changeToYellow(ctx)
            break;
        case 'green':
            changeToGreen(ctx)
            break;
        case 'red':
            changeToRed(ctx)
            break;
        case 'purple':
            changeToPurple(ctx)
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

const changeButtonBorders = (color) => {

    let buttons = Array.from(document.getElementsByClassName('color-button'))
    buttons.forEach((button) => {
        if (button.id === `${color}-button`) {
            button.style.border = "1.5px solid black"
        } else {
            button.style.border = "1.5px solid transparent"
        }
    })
}

//Colors

const changeToBlue = (ctx) => {
    let blue = "#a7ffeb"
    ctx.setState({
        color: 'blue'
    })
    changeFormColor(blue)
    changeIndexItemColor(ctx.props.note.id, blue)
    changeButtonBorders('blue');
}

const changeToYellow = (ctx) => {
    let yellow = "#fff475"
    ctx.setState({
        color: 'yellow'
    })
    changeFormColor(yellow)
    changeIndexItemColor(ctx.props.note.id, yellow)
    changeButtonBorders('yellow');
}

const changeToGreen = (ctx) => {
    let green = "#ccff90"
    ctx.setState({
        color: 'green'
    })
    changeFormColor(green)
    changeIndexItemColor(ctx.props.note.id, green)
    changeButtonBorders('green');
}

const changeToRed = (ctx) => {
    let red = "#f28b82"
    ctx.setState({
        color: 'red'
    })
    changeFormColor(red)
    changeIndexItemColor(ctx.props.note.id, red)
    changeButtonBorders('red');
}

const changeToPurple = (ctx) => {
    let purple = "#d7aefb"
    ctx.setState({
        color: 'purple'
    })
    changeFormColor(purple)
    changeIndexItemColor(ctx.props.note.id, purple)
    changeButtonBorders('purple');
}