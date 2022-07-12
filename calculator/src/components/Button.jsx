function Button({ text, result, setResult, operation, setOperation }) {
  function updateResult() {
    const operators = ['+', '-', '/', '*'];

    if (text === '=') {
      const new_result = '' + eval(operation.concat(result));
      setOperation(new_result);
      setResult(new_result);
    } else if (text === '.') {
      if (!result.includes(text)) {
        setResult(result.concat(text));
      }
    } else if (operators.includes(text)) {
      if (operation) {
        const lastCharacter = operation.slice(-1);
        const number = operation.slice(0, operation.length - 1);

        if (operators.includes(lastCharacter)) {
          if (number === result) {
            setOperation(number.concat(text));
          } else {
            const new_result = '' + eval(operation.concat(result));
            setOperation(new_result.concat(text));
            setResult(new_result);
          }
        } else {
          setOperation(operation.concat(text));
        }
      } else {
        if (result !== '0') {
          setOperation(result.concat(text));
        }
      }
    } else {
      if (operation) {
        const number = operation.slice(0, operation.length - 1);
        if (result === number) {
          setResult(text);
          return;
        }
      }

      if (result === '0') {
        setResult(text);
      } else {
        setResult(result.concat(text));
      }
    }
  }

  return (
    <div className="calculator__button" onClick={updateResult}>
      {text}
    </div>
  );
}

export default Button;
