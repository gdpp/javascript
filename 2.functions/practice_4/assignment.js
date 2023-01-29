const sayHello = (name) => {
    console.log('Hi ' + name);
};

const sayHello2 = (phrase = 'Hello', name) => {
    console.log(`${phrase} ${name}`);
};

const sayHello3 = () => {
    console.log('Hi Gustavo');
};

const sayHello4 = (name) => {
    return 'Hi ' + name;
};

const checkInput = (validate, ...args) => {
    if (args === undefined) {
        validate();
    }
};

const validateInput = () => {};

sayHello();
sayHello2();
sayHello3();
sayHello4();
checkInput(validateInput, '1', '2', '3', '4', '5', '6');
checkInput(validateInput);
