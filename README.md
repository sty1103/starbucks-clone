# 제목(header)

## # 헤더의 중요도에 따라 샵 개수 지정해보자  

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

# 문장(Pragraph)

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세

# 줄바꿈(Line Breaks)

## # 띄어쓰기 두 번 또는 br 태그 사용를 사용하자

동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세  
무궁화 삼천리 화려 강산<br/>
대한 사람 대한으로 길이 보전하세<br/><br/>

# 강조
_이텔릭_  
**두껍게**  
**_이텔릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>  

# 목록(List)

1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록

# 링크
<a href="https://google.com">GOOGLE</a>

[GOOGLE](https://google.com)

<a href="https://naver.com" title="NAVER로 이동">NAVER</a>

[NAVER](https://naver.com "NAVER로 이동")

# 이미지(Image)
## 기본 이미지
![Image](https://yt3.ggpht.com/ytc/AKedOLQPrYF5QVXRyq5YX8Y5xNwS5DTS-nDgcSL5zVF5Ew=s900-c-k-c0x00ffffff-no-rj)

## 링크가 첨부된 이미지
[![LinkedImage](https://yt3.ggpht.com/ytc/AKedOLQPrYF5QVXRyq5YX8Y5xNwS5DTS-nDgcSL5zVF5Ew=s900-c-k-c0x00ffffff-no-rj)](https://www.youtube.com/channel/UCUr-4-pNtP6egtnVEvJzvrw)

# 인용문(BlockQuote)

## 꺽새(>)를 사용해 인용문을 만들어보자  
  
> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.  
> (네이버 국어 사전)

> 인용문을 작성하세요!
>> 중첩된 인용문
>>> 중중첩된 인용문 1

# 인라인(inline) 코드 강조

## 백틱 기호(`)를 사용해 글자를 강조해보자

CS에서 `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.

# 블록(block) 코드 강조

## 백틱 기호를 세 번 사용해서(```) 코드 블럭을 만들어보자


```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
    position: absolute;
    top: 40px;
}
```

```javascript
(()=>{
    console.log('Hello!');
})
```

```bash
$ git commit -m 'Study Markdown'
```

```plaintext
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
```

# 표(Table)

## Vertical Bar(|)를 사용해 표를 만들어보자

<br/>
position 속성

값 | 의미 | 기본값
--|:--:|--:
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰 포트 | X
sticky | 뷰 포트 + 위치 상 부모 요소 | X

# 원시 HTML(Raw HTML)

동해물과 <span style='text-decoration: underline;'>백두산</span>이 마르고 닳도록<br/>
하느님이 보우하사 우리나라 만세

<a href="https://google.com" title="GOOGLE로 이동">GOOGLE</a>

<img width="70" src="https://yt3.ggpht.com/ytc/AKedOLQPrYF5QVXRyq5YX8Y5xNwS5DTS-nDgcSL5zVF5Ew=s900-c-k-c0x00ffffff-no-rj">

# 수평선(Horizontal Rule)

---
