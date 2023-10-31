# Button Component

The Button component is a React component that allows you to create a customizable button that can adapt to various usage scenarios.

![App Screenshot](https://github.com/ezgihekimm/storybook-button/blob/main/buttonVariant.png)

## Installation and Running

Install Dependencies

```bash
yarn install
```

Start Storybook

```bash
yarn run storybook
```

## Usage

### Basic Usage

```javascript
import { Button } from '@/stories/components/button/Button'

function App() {
  return <Button />
}
```

### Customization Options

The Button Component offers various customization options:

#### Props

| Attributes |               Type               | Default  |
| :--------- | :------------------------------: | :------: |
| type       | `filled`,`pill`,`outline`,`link` | `filled` |
| size       |     `xs`,`sm`,`md`,`lg`,`xl`     |   `xs`   |
| label      |             `string`             | `Button` |
| disabled   |            `boolean`             | `false`  |
| loading    |            `boolean`             | `false`  |
| onClick    |            `function`            |  `void`  |

#### Button Types

You can specify different button types using the `type` prop:

- `filled`

- `pill`

- `outlined`

- `link`

```javascript
function App() {
  <Button label="Primary" type="filled" />
  <Button label="Secondary" type="pill" />
}
```

#### Button Sizes

The `size` prop allows you to set the button size:

- `xs`

- `sm`

- `md`

- `lg`

- `xl`

```javascript
function App() {
  <Button label="Small" size="sm" />
  <Button label="Medium" size="md" />
}
```

#### Adding Icons

You can add icons to your buttons with the `IconSource` prop and specify the icon's position using `iconPosition`:

```javascript
import { FaIcon, AiIcon } from 'icon-library'; // Replace with your icon components

<Button label="Search" IconSource={FaIcon} iconPosition="left" />
<Button label="Delete" IconSource={AiIcon} iconPosition="right" />
<Button label="Only" IconSource={AiIcon} iconPosition="only" />

```

#### Loading State

You can add an icon to the loading button and specify its position using the `IconLoadingSource`,
`iconLoadingPosition` and `loading` props

```javascript
import { LoadingIcon } from 'spinner-icons'; // Replace with your loading spinner components

<Button loading={true} IconLoadingSource={LoadingIcon} iconLoadingPosition="left" />
<Button loading={true} IconLoadingSource={LoadingIcon} iconLoadingPosition="only" />

```

#### Disabling the Button

To disable the button, set the `disabled` prop to true:

```javascript
<Button label="Disabled" disabled={true} />
```

## Example

![App Screenshot](https://github.com/ezgihekimm/storybook-button/blob/main/button.png)

```javascript
<Button
  IconLoadingSource={() => {}}
  IconSource={() => {}}
  iconPosition="left"
  label="Button"
  onClick={() => {}}
  size="lg"
  type="filled"
/>
```
