const name = "유미";
class App {
    constructor() {
        this.$button = document.querySelector('button');
        this.count = 0;

        this.$button.onclick = this.increase;
    }

    /*
        인스턴스 메서드: 각 인스턴스마다 별도 생성
        클래스의 필드를 화살표 함수로 정의
        화살표 함수의 this는 렉시컬 컨텍스트에 바인딩되므로, App 인스턴스 가리킴
    */
    increase = () => {
        this.$button.textContent = ++this.count;
    }

    /*
        프로토타입 메서드: 모든 인스턴스가 공유
        메서드 축약표현으로 정의
        호출 시의 컨텍스트에 따라 this(버튼 요소) 정의됨.
    */
    decrease() {
        console.log(this)
        this.$button.textContent = --this.count;
    }
}

const app = new App();
app.increase()