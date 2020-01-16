export const changeInputColorOnError = (ctx) => {
    let inputsAndLabelInputs = resetInputsAndLabelsArrays();
    fillInputsAndLabelInputs(inputsAndLabelInputs);
    setInputAndLabelAttributes(inputsAndLabelInputs);
    inputsAndLabelInputs = resetInputsAndLabelsArrays(inputsAndLabelInputs);

    // debugger
    ctx.props.errors.forEach((error) => {
        if (error === "Email has already been taken") {
            addEmailErrorIds(inputsAndLabelInputs)
        } else if (error === "Password is too short (minimum is 6 characters)") {
            addPasswordErrorIds(inputsAndLabelInputs)
        } else {
            fillInputsAndLabelInputs(inputsAndLabelInputs);
        }
    })
    setInputAndLabelAttributes(inputsAndLabelInputs, 'has-errors', 'label-has-errors')
}

const resetInputsAndLabelsArrays = (inputsAndLabelInputs = [], inputs = [], labelInputs = []) => {
    inputs = [];[]
    labelInputs = [];
    inputsAndLabelInputs = [inputs, labelInputs];
    return inputsAndLabelInputs;
}

const addErrorIds = (inputArr, className) => {
    inputArr.push(Array.from(document.getElementsByClassName(className))[0]);
    return inputArr;
}

const addEmailErrorIds = (inputsAndLabelInputs) => {
    inputsAndLabelInputs[0] = addErrorIds(inputsAndLabelInputs[0], 'email-input');
    inputsAndLabelInputs[1] = addErrorIds(inputsAndLabelInputs[1], 'label-email-input');
    return inputsAndLabelInputs;
}

const addPasswordErrorIds= (inputsAndLabelInputs) => {
    inputsAndLabelInputs[0] = addErrorIds(inputsAndLabelInputs[0], 'password-input')
    inputsAndLabelInputs[1] = addErrorIds(inputsAndLabelInputs[1], 'label-password-input')
    return inputsAndLabelInputs;
}

const fillInputsAndLabelInputs = (inputsAndLabelInputs) => {
    addEmailErrorIds(inputsAndLabelInputs)
    addPasswordErrorIds(inputsAndLabelInputs)
    return inputsAndLabelInputs;
}

const setInputAndLabelAttributes = (inputsAndLabelInputs, inputAtr, labelAtr) => {
    inputsAndLabelInputs[0].forEach((ele) => ele.setAttribute("id", inputAtr));
    inputsAndLabelInputs[1].forEach((ele) => ele.setAttribute("id", labelAtr));
}