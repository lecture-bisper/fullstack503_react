// FruitSelect.jsx

import { useState } from 'react';

const selectList = ['apple', 'peach', 'grape', 'banana', 'watermelon'];

function FruitSelect() {

  // state로 관리되고 있는 변수, select box에서 선택한 데이터 1개를 저장하기 위한 변수, 초기값 빈 문자열
  const [value1, setValue1] = useState('');
  // state로 관리되고 있는 변수, select box에서 선택한 여러개의 데이터를 저장하기 위한 변수, 초기값 빈 배열
  const [value2, setValue2] = useState([]);

  // 이벤트 처리 함수
  const handleChange = e => setValue1(e.target.value);

  // select box 다중 선택 이벤트 처리 함수
  const handleChangeMultiple = e => {
    // e.target.selectedOptions 는 선택된 option 태그들을 배열로 반환
    // ... 전개 연산자를 사용하여 배열에 있는 모든 데이터를 출력
    const options = [...e.target.selectedOptions];
    // 배열 함수 map()을 사용하여 배열에 있는 요소(option 태그)에서 value 속성값만 출력
    const values = options.map(item => item.value);
    // console.log(e.target);
    // console.log(e.target.selectedOptions);
    // console.log(options);
    // console.log(values);
    setValue2(values);
  }

  const handleSubmit = e => {
    const msg = `선택한 과일 한개 : ${value1}
선택한 과일 여러개 : ${value2}`;
    alert(msg);
    e.preventDefault();
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className={'mt-3'}>
          <label htmlFor={'fruitSelect'} className={'form-label'}>좋아하는 과일 선택 : </label>
          <select name={'fruit'} id={'fruitSelect'} className={'form-control'} value={value1} onChange={handleChange}>
            <option value={'apple'}>사과</option>
            <option value={'peach'}>복숭아</option>
            <option value={'grape'}>포도</option>
            <option value={'banana'}>바나나</option>
            <option value={'watermelon'}>수박</option>
          </select>
        </div>

        <div className={'mt-3'}>
          <label htmlFor="fruitSelectMultiple" className={'form-label'}>좋아하는 과일 선택 (다중선택) : </label>
          <select name={'fruitMultiple'} id="fruitSelectMultiple" className={'form-control'} value={value2} onChange={handleChangeMultiple} multiple={true}>
            {
              // 배열 함수를 사용하여 html 태그를 반복 출력
              selectList.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
              })
            }
          </select>
        </div>
        <div className={'mt-3'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
        </div>
      </form>
    </div>
  );
}

export default FruitSelect;










