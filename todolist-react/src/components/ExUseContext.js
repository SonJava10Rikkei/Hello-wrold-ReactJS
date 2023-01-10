// ExUseContext --> CompB --> CompC
import React, { useState, createContext } from 'react'
import CompB from './CompB'
// Tạo ngữ cảnh để chia sẻ dữu liệu
const ThemeContext = createContext();
export default function ExUseContext() {
  const [theme, setTheme] = useState('light')
  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? "dark" : "light");
  }
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <h2>Context and useContext</h2>
        <CompB></CompB>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </ThemeContext.Provider>
    </div>
  )
}
