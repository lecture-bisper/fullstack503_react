import Ex2Sub from './Ex2Sub.jsx';

const contents = [
  {id: 1, imgUrl: "https://www.w3schools.com/w3css/img_5terre.jpg", title: "5 Terre", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {id: 2, imgUrl: "https://www.w3schools.com/w3css/img_monterosso.jpg", title: "Monterosso", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {id: 3, imgUrl: "https://www.w3schools.com/w3css/img_vernazza.jpg", title: "Vernazza", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {id: 4, imgUrl: "https://www.w3schools.com/w3css/img_manarola.jpg", title: "Manarola", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {id: 5, imgUrl: "https://www.w3schools.com/w3css/img_corniglia.jpg", title: "Corniglia", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {id: 6, imgUrl: "https://www.w3schools.com/w3css/img_riomaggiore.jpg", title: "Riomaggiore", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
]

function Ex2() {

  // 엘리먼트 변수 선언
  // let tagList = [];

  // 일반 for문을 사용하여 엘리먼트 변수에 자식 컴포넌트를 추가
  // for (let i = 0; i < 6; i ++) {
  //   tagList.push(<Ex2Sub  />);
  // }

  // 배열 함수 map() 을 사용하여 엘리먼트 변수에 자식 컴포넌트를 추가
  // tagList = contents.map(item => <Ex2Sub key={item.id} imgUrl={item.imgUrl} title={item.title} text={item.text} />)

  return (
    <div className={'text-start'}>
      <div className={'navbar navbar-expand-sm navbar-dark bg-success mb-3 p-2'}>
        <a href="" className={'navbar-brand fs-2 ms-2'}>Summer Holiday</a>
      </div>

      <div className={'container'}>
        {/*엘리먼트 변수 사용 시 */}
        {/*{tagList}*/}

        {/* JSX 문법에서 map()으로 직접 출력 시 */}
        {
          contents.map(item => {
            return <Ex2Sub key={item.id} imgUrl={item.imgUrl} title={item.title} text={item.text} />
          })
        }
      </div>
    </div>
  );
}

export default Ex2;










