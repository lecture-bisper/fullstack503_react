import Comment from './Comment.jsx'

const comments = [
  {name: '아이유', comment: '안녕하세요, 아이유 입니다.'},
  {name: '유인나', comment: '안녕하세요. 인나 입니다.'},
  {name: '유재석', comment: '국민 MC 유재석입니다. 반갑습니다.'},
  {name: '유병재', comment: '유병재 PD입니다. 반갑습니다.'},
]

function CommentList() {
  return (
    <div>
      {
        // ES6에서 제공하는 배열 함수 map을 사용하여 배열의 크기만큼 반복해서 자식 컴포넌트인 Comment 를 호출함, 데이터도 함께 전달
        comments.map(item => {
          return (
            <Comment name={item.name} comment={item.comment} />
          );
        })
      }

      {/*<Comment name={comments[0].name} comment={comments[0].comment} />*/}
      {/*<Comment name={comments[1].name} comment={comments[1].comment} />*/}
      {/*<Comment name={comments[2].name} comment={comments[2].comment} />*/}
      {/*<Comment name={comments[3].name} comment={comments[3].comment} />*/}
    </div>
  );
}

export default CommentList










