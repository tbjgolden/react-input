import React, { useState } from 'react';
import { TextMask } from '../components/TextMask';
import { Example } from './_Example';
export const XTextMask = () => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('2012-05-19');
  return (
    <div>
      <p>TextMask is ideal for constraining data input with a known syntax.</p>
      <p>
        The keyboard logic is managed by <code>imask</code>, which allows you to
        pass in a completely custom mask.
      </p>
      <hr />
      <Example name="Plain text mask">
        <TextMask
          label="Phone"
          mask={{
            mask: '+1 (000) 000-0000',
          }}
          value={textInput1}
          onChange={(value) => {
            setTextInput1(value);
          }}
        />
      </Example>
      <Example name="Text mask with placeholder on by default">
        <TextMask
          label="SSN"
          mask={{
            mask: '000 00 0000',
          }}
          value={textInput2}
          onChange={(value) => {
            setTextInput2(value);
          }}
          placeholder
        />
      </Example>
      <Example name="Text mask prefilled">
        <TextMask
          label="Date"
          mask={{
            mask: Date,
            pattern: 'Y-`m-`d',
            format: function (date) {
              return [
                date.getFullYear(),
                `${date.getMonth() + 1}`.padStart(2, '0'),
                `${date.getDate()}`.padStart(2, '0'),
              ].join('-');
            },
            parse: function (str) {
              const [y, m, d] = str.split('-');
              return new Date(
                parseInt(y, 10),
                parseInt(m, 10) - 1,
                parseInt(d, 10),
              );
            },
            autofix: true,
            overwrite: true,
          }}
          value={textInput3}
          onChange={(value) => {
            setTextInput3(value);
          }}
          placeholder
        />
      </Example>
    </div>
  );
};
