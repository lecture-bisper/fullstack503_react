function Ex2Sub(props) {
  return (
    <div className={'row mb-3'}>
      <div className={'col-sm-4'}>
        <img src={props.imgUrl} alt={''} className={'mw-100'}/>
      </div>
      <div className={'col-sm-8'}>
        <h2 className={'mt-3'}>{props.title}</h2>
        <p className={'mt-3'}>{props.text}</p>
      </div>
    </div>
  );
}

export default Ex2Sub;










