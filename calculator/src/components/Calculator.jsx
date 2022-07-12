import Row from './Row';
import Button from './Button';

import { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState('');
  const rows = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '.', '+'],
    ['='],
  ];

  return (
    <div className="calculator">
      <Row>
        <div className="calculator__operation">{operation}</div>
      </Row>
      <Row>
        <div className="calculator__result">{result}</div>
      </Row>
      {rows.map((row, index) => (
        <Row key={index}>
          {row.map((value) => (
            <Button
              key={value}
              text={value}
              result={result}
              setResult={setResult}
              operation={operation}
              setOperation={setOperation}
            />
          ))}
        </Row>
      ))}
    </div>
  );
}

export default Calculator;
