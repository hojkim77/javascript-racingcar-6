import { Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const tryNumInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );
  }
}

export default App;
