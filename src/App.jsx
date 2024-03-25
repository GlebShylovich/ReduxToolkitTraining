import './App.css'
import ListParent from './Components/ListParent/ListParent'
import Foo from './Foo/Foo'
import { useGetPostQuery } from './reduxToolkit/queryApi/postsPlaceholder'
function App() {
  const {data} = useGetPostQuery()
  console.log(data)
  return (
    <>
      <ListParent/>
      <Foo/>
    </>
  )
}

export default App
