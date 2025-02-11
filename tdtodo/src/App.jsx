import './App.css'
import Header from './components/Header'
import React from 'react'
import Form from './components/Form'
import List from './components/List'
import Footer from './components/Footer'

function App() {
  // Création de l'état todos avec quelques tâches initiales
  const [todos, setTodos] = useState([
    {id: 1, description: 'Trouver un job', done: false},
    {id: 2, description: 'Apprendre React.JS', done: true},
    {id: 3, description: 'Découvrir Formacitron', done: true},
  ])
  return (
    <>
      <Header></Header>
      <main>
        <Form></Form>
        <List></List>
      </main>
      <Footer></Footer>
    </>
  )
}
export default App

