import { FC, useState, useRef } from "react";
import './App.css'

type FormType = {
  hex: string;
};

const Converter: FC = () => {
  const [form, setForm] = useState<FormType>({hex: ''});

  const handleChange = (evt: any) => {
    evt.preventDefault();

    if (evt.target.value.length === 7) {
      if (isHex(evt.target.value)) {
        setForm({hex: hexToRgb(evt.target.value)});
      } else {
        setForm({hex: '0'});
      }
    }    
  }

  function isHex(num: string) {
    return Boolean(num.match(/^#[0-9A-F]{6}$/i))
  }

  function renderRgb() {
    if (form.hex === '') {
      return ''
    } else if (form.hex === '0') {
      return 'Ошибка!';
    } else {
      return 'rgb(' + form.hex + ')';
    }
  }

  function hexToRgb(hex: string) {
    var bigint = parseInt(hex.slice(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return r + "," + g + "," + b;
  }

  return (
    <form className='form' style={{backgroundColor: 'rgb(' + form.hex + ')'}}>
      <input
        type="text"
        name="name"
        className='hex'
        onChange={handleChange}
      />
      <div className='rgb' style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{renderRgb()}</div>
    </form>
  )
}

export default Converter
