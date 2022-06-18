# Jest & React-testing-library

## Function

### describe

설명: 개별 테스트를 묶는 함수

#### Usage

```ts
describe('테스트 설명', () => {
  it('', () => {});
  it('', () => {});
});
```

### it

설명: 개별 테스트 함수

#### Usage

```ts
it('테스트 설명', () => {});
```

### expect

설명: `DOM`을 연결해 테스트 `Matcher`를 사용 할 수 있게 해줌

### Usage

```tsx
const input = screen.getByPlaceholderText('Write Todo..');
expect(input).toBeInTheDocument();
```

### render

설명: 리엑트 컴포넌트를 메모리상의 `document.body` 에 추가함

#### Usage

```tsx
import { render } from '@testing-library/react';

function render(
  ui: React.ReactElement<any>,
  options?: {
    /* You won't often use this, expand below for docs on options */
  },
): RenderResult;

test('renders a message', () => {
  const { container, getByText } = render(<Greeting />);
  expect(getByText('Hello, world!')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `);
});
```

### screen

설명: `document.body` 를 기준으로 쿼리를 사용 할 수 있음

#### Usage

1. `screen` 을 사용하기전에 `render` 가 실행 되어야 함

```tsx
render(<Component />);
const input = screen.getByLabelText('UserName');
```

### fireEvent

설명: 액션(이벤트)에 대한 테스트를 해야하는 경우 사용

#### Usage

```ts
fireEvent[eventName](element: Element | Node | Window | Document, option?: {})

fireEvent.click(button);
fireEvent.change(input, { target: { value: 'changed value' } });
```

## Query

### Single Elements (Docs)

- `getBy...` : Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found

- `queryBy...` : Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found

- `findBy...` : Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms
