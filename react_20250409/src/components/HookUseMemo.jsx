import { useCallback, useEffect, useState, useMemo } from 'react';

function HookUseMemo() {
  const [btnX, setBtnX] = useState(0);
  const [btnY, setBtnY] = useState(0);

  useMemo(() => {
    console.log('useMemo 실행');
    console.log(`btnX : ${btnX}, btnY : ${btnY}`);
  }, [btnX]);

  useEffect(() => {
    console.log('useEffect 실행');
    console.log(`btnX : ${btnX}, btnY : ${btnY}`);
  }, [btnY]);

  // const returnFunc = useCallback(() => {
  //   console.log(btnY);
  // }, [btnY]);

  return (
    <div>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        setBtnX((prev) => prev +1);
      }}>useMemo 사용
      </button>
      <button type={'button'} className={'btn btn-success'} onClick={() => {
        setBtnY((prev) => prev +1);
      }}>useMemo 미 사용</button>
    </div>
  );
}

export default HookUseMemo;










