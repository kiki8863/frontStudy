export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

export interface IProfile2 {
    name: string
    age: number
    school: string
    hobby?: string
}




// 1. Partial 타입
type aaa = Partial<IProfile>

// 2. Required 타입
type bbb = Required<IProfile>

// 3. Pick 타입
type ccc = Pick < IProfile , "name" | "age">

// 4. Omit 타입
type ddd = Omit <IProfile , "school">

// 5. Record 타입
type eee = "철수" | "영희" | "훈이" // Union 타입 -> 합집합
let child1: eee = "철수" // 철수, 영희, 훈이 만 됨
let child2: string = "바나나" //  철수, 영희, 훈이, 바나나, 사과 다 됨

type fff = Record < eee, IProfile > // Record 타입 

// 6. 객체의 키들로 union 타입 만들기
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby"

// 7. type vs interface 차이 => interface 는 선언병합 가능
export interface IProfile {
    candy : number // 선언병합으로 추가됨 
}

// 8. 배운 것 응용
let profile: Partial<IProfile> = {
    candy: 10

}


// 브랜치 병합 테스트 해보기


