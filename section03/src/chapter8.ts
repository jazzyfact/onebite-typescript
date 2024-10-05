/* 서로소 유니온 타입
교집합이 없는 타입으로만 만든 유니온 타입을 말함
*/

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}명 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}명 방문하였습니다.`
      );
      break;
    }
  }
}
