const students = [
  { name: 'Inje', id: 1 },
  { name: 'Steve', id: 2 },
  { name: 'Bill', id: 3 },
  { name: 'Jeff', id: 4 },
];

function AttendanceBook() {

  // 엘레먼트 변수에 렌더링 될 html 태그를 저장
  const studentList = students.map(std => <li key={std.id}>{std.name}</li>);

  return (
    <div>
      <h4 className={'mb-2'}>출석부</h4>
      {/* 엘레먼트 변수에 저장된 내용을 UI에 출력 */}
      <ul>{studentList}</ul>
      <ul>
        {
          // 배열의 내용을 배열 함수 map()을 통해서 직접 반복 출력
          // key 속성을 추가하여 반복 출력되는 html 태그 및 컴포넌트를 구분할 수 있도록 함
          students.map(std => <li key={std.id}>{std.name}</li>)
        }
      </ul>
    </div>
  );
}

export default AttendanceBook;










