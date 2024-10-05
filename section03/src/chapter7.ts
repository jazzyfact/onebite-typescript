/* 타입 좁히기
조건문 등을 이용해 넓은 타입에서 좁은 타입으로
타입을 상황에 따라좁히느 방법을 이야기 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person: name 은 age살 입니다.
function func(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

/* 복습 한가지 . 더사례*/
//비동기 작업의 결과를 처리하는 과정

type LoadingTask = {
  state: "LOADING";
};

type FailedTaks = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTaks | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메세지 출력
// 성공 -> 성공: 데이터 출력
function porcessResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    date: "데이터 ~~",
  },
};
