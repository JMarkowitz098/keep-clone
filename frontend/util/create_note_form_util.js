//Hide body input when not selected, grow when selected
export const shrinkNoteForm = () => {
    toggleBodyAndClose('cn-body-input', 'cn-close-button', "hide");
    setTitlePlaceholder()
}

export const handleTitleClick = () => {
    toggleBodyAndClose(
        'cn-body-input',
        'cn-close-button', "none");
    changePlaceholderValues()
}
const toggleBodyAndClose = (bodyId, closeId, classVal) => {
    setAttrWithIdAndValue('class', bodyId, classVal)
    setAttrWithIdAndValue('class', closeId, classVal)
}

const changePlaceholderValues = () => {
    setAttrWithIdAndValue('placeholder', 'cn-title-input', "Title")
    setAttrWithIdAndValue('placeholder', 'cn-body-input', "Take a note...")
}

const setTitlePlaceholder = () => {
    setAttrWithIdAndValue('placeholder', 'cn-title-input', "Take a note...")
}

const setAttrWithIdAndValue = (attr, id, value) => {
    let title = document.getElementById(id);
    title.setAttribute(attr, value);
}
//-------------------------------------------------