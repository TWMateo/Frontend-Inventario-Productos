import React from 'react'
import NavBar from './components/NavBar'


function App() {
  const OptionsNavBar = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User" },
    { title: "Schedule", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Archivos", src: "Folder" },
  ]
  return (
    <div>
      <NavBar Options={OptionsNavBar}></NavBar>
    </div>
  )
}

//const container = document.getElementById('root')
//ReactDom.render(App,container)
export default App
