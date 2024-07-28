import './App.css'
import Button from './Button'

function App() {
  const colorStyles:('black' | 'border' | 'white')[] = ['black', 'border', 'white']

  return (
    <div className="rows">
      {colorStyles.map(colorStyle => {
        return (
          <div className="row">
            <h1>{colorStyle}</h1>
            <div>
              <h2>Normal Button</h2>
              <Button label="編集" colorStyle={colorStyle} onClick={() => alert('Normal Button')} />
            </div>

            <div>
              <h2>Button with Left Icon</h2>
              <Button label="編集" colorStyle={colorStyle} iconLeft={<span>✏️</span>} onClick={() => alert('Left Icon Button')} />
            </div>

            <div>
              <h2>Button with Right Icon</h2>
              <Button label="編集" colorStyle={colorStyle} iconRight={<span>✏️</span>} onClick={() => alert('Right Icon Button')} />
            </div>

            <div>
              <h2>Disabled Button</h2>
              <Button label="編集" colorStyle={colorStyle} disabled />
            </div>

            <div>
              <h2>Loading Button</h2>
              <Button label="編集" colorStyle={colorStyle} loading />
            </div>

            <div>
              <h2>Form Button</h2>
              <Button label="編集" colorStyle={colorStyle} type="submit" />
            </div>

            <div>
              <h2>Button as Link</h2>
              <Button label="編集" colorStyle={colorStyle} href="https://example.com" target="_blank" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
